// Shared scripts for every page of the Chamber site

/* Responsive navigation (hamburger menu) */
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", navigation.classList.contains("open"));
});

/* Footer dates */
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
