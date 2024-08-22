const toggleHiddenElement = function (domElement) {
  if (domElement.style.display === "none") {
    domElement.style.display = "block";
  }
};

const changeToFunkyColor = function (domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
};

export { toggleHiddenElement, changeToFunkyColor };