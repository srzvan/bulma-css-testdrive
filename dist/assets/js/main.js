const nextBtn = document.getElementById("js-next-btn");
const backBtn = document.getElementById("js-back-btn")
const mainSection = document.querySelector("main.main");

nextBtn.addEventListener("click", () => {
  mainSection.classList.add("in-view");
});

backBtn.addEventListener("click", () => {
  mainSection.classList.remove("in-view");
});

