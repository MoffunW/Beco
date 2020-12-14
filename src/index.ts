import "../public/styles/main.scss";

const toggler = document.getElementById("toggler") as HTMLInputElement;
const sidebar = document.querySelector(".l-sidebar") as HTMLElement;
const navbar = document.querySelector(".c-navbar") as HTMLElement;
const list = navbar.querySelector(".c-navbar__list") as HTMLUListElement;
const items = [
  ...list.querySelectorAll(".c-navbar__link"),
] as HTMLLinkElement[];

toggler.addEventListener("change", () => {
  sidebar.classList.toggle("l-sidebar--is-active");
  navbar.classList.toggle("c-navbar--is-active");
});

list.addEventListener("click", (e: Event) => {
  const event = e.target as HTMLElement;
  if (event.classList.contains("c-navbar__link")) {
    items.forEach((item) => item.classList.remove("c-navbar__link--is-active"));
    event.classList.add("c-navbar__link--is-active");
  }
});
