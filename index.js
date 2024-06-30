// Menu hamburguer
const button = document.querySelector("#btn-mobile");

button.addEventListener("click", () => {
  document.querySelector("#header-container-nav").classList.toggle("active");
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
