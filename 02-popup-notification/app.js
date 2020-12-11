const notificationContainer = document.getElementById("notification-container");
const button = document.getElementById("btn");

const createNotification = () => {
  const notification = document.createElement("div");
  const notificationText = document.createTextNode(
    "This is a popup notification. It will auto-hide in 3 seconds. Hang in there!"
  );
  notification.appendChild(notificationText);
  notification.classList.add("notification");
  notification.style.backgroundColor = generateBackgroundColor();
  notificationContainer.appendChild(notification);
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
};

const generateBackgroundColor = () => {
  return `hsla(${Math.floor(Math.random() * 360)}, 100%, 50%, 0.7)`;
};

button.addEventListener("click", () => {
  createNotification();
});
