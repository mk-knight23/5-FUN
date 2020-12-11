// get all DOM elements
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const functionButtons = document.querySelectorAll("[data-function]");
const input = document.getElementById("input");

let inputToDisplay = "";
let storedValue = "";

// functions
const concatenateInputString = (string) => {
  inputToDisplay = inputToDisplay.concat(string);
  input.value = inputToDisplay;
};

const evaluateResult = (string) => {
  const result = eval(string);
  input.value = result;
  inputToDisplay = "";
};

const getSquareRoot = (string) => {
  const result = Math.sqrt(parseInt(string));
  inputToDisplay = "";
  input.value = result.toString();
};

const clearInput = () => {
  inputToDisplay = "";
  concatenateInputString("");
};

const removeSign = () => {
  if (inputToDisplay.startsWith("-")) {
    const inputArray = inputToDisplay.split("");
    inputArray.shift();
    const result = inputArray.join("");
    input.value = result;
    inputToDisplay = result;
  } else {
    const value = `-${inputToDisplay}`;
    input.value = value;
    inputToDisplay = value;
  }
};

const appendZero = () => {
  input.value = `${inputToDisplay}.0`;
  inputToDisplay = `${inputToDisplay}.0`;
};

const checkIfOperatorPresent = () => {
  let operators = ["*", "+", "-", "/"];
  let check = false;
  operators.forEach((operator) => {
    if (input.value.includes(operator)) {
      check = true;
    }
  });
  return check;
};

const storeValue = () => {
  if (!checkIfOperatorPresent()) {
    storedValue = input.value;
    input.value = "";
    inputToDisplay = "";
    console.log(storedValue);
  }
};

const clearStoredValue = () => {
  storedValue = "";
  console.log(storedValue);
};

const recallStoredValue = () => {
  inputToDisplay += storedValue;
  input.value = inputToDisplay;
  console.log(storedValue);
};

const memoryPlus = () => {
  storedValue = eval(`${storedValue}+${input.value}`);
  input.value = "";
  inputToDisplay = "";
};

// adding event listeners on click
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    concatenateInputString(button.innerHTML);
  });
});

// for input through keyboard
input.addEventListener("input", () => {
  console.log(input.value);
  inputToDisplay = input.value;
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.innerHTML) {
      case "x":
        concatenateInputString("*");
        break;
      case "x2":
        evaluateResult(`${inputToDisplay} * ${inputToDisplay}`);
        break;
      case "√":
        getSquareRoot(inputToDisplay);
        break;
      case "1/x":
        evaluateResult(`1/${inputToDisplay}`);
        break;
      case "±":
        removeSign();
        break;
      default:
        concatenateInputString(button.innerHTML);
        break;
    }
  });
});

functionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.innerHTML) {
      case "=":
        evaluateResult(inputToDisplay);
        break;
      case "c":
        clearInput();
        break;
      case ".":
        appendZero();
        break;
      case "MS":
        storeValue();
        break;
      case "MC":
        clearStoredValue();
        break;
      case "MR":
        recallStoredValue();
        break;
      case "M+":
        memoryPlus();
        break;
    }
  });
});
