document.getElementById("submit").addEventListener("click", function () {
  const resultBox = document.getElementById("result");
  const inputField = document.getElementById("inputField").value;

  resultBox.innerHTML = "";

  const num = parseInt(inputField);
  let result = "";

  if (isNaN(num)) {
    result = "Please enter valid number!";
  } else if (num % 3 === 0 && num % 5 === 0) {
    result = "FizzBuzz";
  } else if (num % 3 === 0) {
    result = "Fizz";
  } else if (num % 5 === 0) {
    result = "Buzz";
  } else {
    result = num;
  }

  const resultH1 = document.createElement("h1");
  resultH1.textContent = result;
  resultBox.appendChild(resultH1);
});
