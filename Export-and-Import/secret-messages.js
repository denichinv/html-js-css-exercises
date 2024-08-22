import {
  toggleHiddenElement,
  changeToFunkyColor,
} from "../Export-and-Import/domFunctions.js";

const buttonElement = document.getElementById("secret-button");
const pElement = document.getElementById("secret-message");

buttonElement.addEventListener("click", () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
