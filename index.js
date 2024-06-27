let button = document.querySelector("#btn-mobile");

button.addEventListener("click", () => {
  document.querySelector("#header-container-nav").classList.toggle("active");
});