const alertExampleBox = document.querySelector("#alert-close");
const alertExampleCloseBtn = document.querySelector("#alert-close-btn");
const resetAlert = document.querySelector("#reset-alert");

alertExampleCloseBtn.addEventListener("click", () => {
  alertExampleBox.style.display = "none";
  resetAlert.style.display="block";
});

resetAlert.addEventListener("click", () => {
  alertExampleBox.style.display="flex";
  resetAlert.style.display="none";
})