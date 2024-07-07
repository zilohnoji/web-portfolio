// Menu hamburguer
const button = document.querySelector("#btn-mobile");

button.addEventListener("click", () => {
  document.querySelector("#header-container-nav").classList.toggle("active");
  const lis = document.querySelectorAll("#nav-button li");

  lis.forEach((li) => {
    li.addEventListener("click", () => {
      document
        .querySelector("#header-container-nav")
        .classList.remove("active");
    });
  });
});

// Menu Tab
const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach((tab) => tab.addEventListener("click", () => tabClicked(tab)));

const tabClicked = (tab) => {
  tabs.forEach((tab) => tab.classList.remove("tab-active"));
  tab.classList.add("tab-active");

  const contents = document.querySelectorAll(".content");
  contents.forEach((content) => content.classList.remove("show"));

  const contentId = tab.getAttribute("content-id");
  const content = document.getElementById(contentId);

  content.classList.add("show");
};

// Header
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
