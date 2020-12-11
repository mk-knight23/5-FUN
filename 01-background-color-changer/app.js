const button = document.getElementById("btn");
const buttonText = document.getElementById("btn-text");
const textArray = [
  "Great work!",
  "Keep it coming!",
  "That's the spirit!",
  "One more time!",
  "You're doing great!",
  "It's cool isn't it?",
  "You can't stop doing it, can you?",
  "It's like magic!",
  "That's a great color!",
];

const getRandomInt = () => {
  return Math.floor(Math.random() * 9);
};

const checkIfSameText = (text) => {
  return buttonText.innerHTML === text ? true : false;
};

const generateNewText = () => {
  return textArray[getRandomInt()];
};

button.addEventListener("click", () => {
  const generatedColor = Math.random() * 360;
  const generatedText = textArray[getRandomInt()];
  document.body.style.backgroundColor = `hsla(${generatedColor}, 100%, 50%, 0.7)`;
  buttonText.innerHTML = checkIfSameText(generatedText)
    ? generateNewText()
    : generatedText;
});
