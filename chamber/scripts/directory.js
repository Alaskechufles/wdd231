// Scripts for the Directory page

const url = "data/members.json";
const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

// Membership levels used in members.json (1 = member, 2 = silver, 3 = gold)
const membershipLevels = {
  1: "Member",
  2: "Silver Member",
  3: "Gold Member"
};

/* Get the members data */
async function getMembers() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    membersContainer.innerHTML = "<p>Sorry, the directory could not be loaded right now.</p>";
    console.error(error);
  }
}

/* Build one card for each member */
const displayMembers = (members) => {
  members.forEach((member) => {
    const card = document.createElement("section");
    card.innerHTML = `
      <img src="images/directory/${member.image}" alt="${member.name} logo" loading="lazy" width="80" height="80">
      <h2>${member.name}</h2>
      <p class="membership level-${member.membership}">${membershipLevels[member.membership]}</p>
      <p class="info">${member.info}</p>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener">${member.website.replace("https://", "")}</a>
    `;
    membersContainer.appendChild(card);
  });
};

/* Grid / List view */
function showView(view) {
  membersContainer.className = view;
  gridButton.classList.toggle("active", view === "grid");
  listButton.classList.toggle("active", view === "list");
}

gridButton.addEventListener("click", () => showView("grid"));
listButton.addEventListener("click", () => showView("list"));

getMembers();
