function alertMessage() {
  alert("Click the button");
}

function changeHeadingText() {
  var headingElement = document.getElementById("myHeading");

  headingElement.textContent = "New Heading Text";

  console.log("Successful!");
}

document.addEventListener("DOMContentLoaded", alertMessage);
