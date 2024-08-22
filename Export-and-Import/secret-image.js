import {
  toggleHiddenElement,
  changeToFunkyColor,
} from "../Export-and-Import/domFunctions.js";

const buttonElement = document.getElementById("secret-button");
const imgElement = document.getElementById("secret-img");

buttonElement.addEventListener("click", () => {
  toggleHiddenElement(imgElement);
  changeToFunkyColor(buttonElement);
});
