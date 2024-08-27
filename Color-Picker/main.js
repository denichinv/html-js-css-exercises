let button = document.getElementById("color-button");

let mysteryButton = document.getElementById("next-button");

function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event) {
  let randomColor =
    "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";
  event.target.style.backgroundColor = randomColor;
}
button.addEventListener("click", colorChange);
mysteryButton.addEventListener("wheel", colorChange);
