const secretButton = document.getElementById("secret-button");
const secretMessage = document.getElementById("secret-message");

const toggleHiddenElement = function (domElement) {
  if (domElement.style.display === "none") {
    domElement.style.display = "block";
  }
};

secretButton.addEventListener("click", () => {
  toggleHiddenElement(secretMessage);
});
