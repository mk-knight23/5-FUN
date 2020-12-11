const button = document.getElementById("toggle-btn");
const buttonText = document.getElementById("btn-text");

button.addEventListener("click", () => {
  const currentClass = document.body.classList.value;
  if (currentClass === "light") {
    document.body.classList.add("dark");
    buttonText.innerHTML = "Light Mode 🌖";
  } else {
    document.body.classList.remove("dark");
    buttonText.innerHTML = "Dark Mode 🌒";
  }
});
