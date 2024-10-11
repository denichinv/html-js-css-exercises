let paragraph = document.querySelector("p");
let inputField = document.querySelector("input");

inputField.addEventListener("input", () => {
  paragraph.textContent = inputField.value;
});
