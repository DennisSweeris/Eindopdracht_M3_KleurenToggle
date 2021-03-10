// Selectors
const background = document.querySelector("body");
const header = document.querySelector("header");
const toggleMenu = document.querySelector(".toggleMenu");
const menuList = document.querySelector(".menuList");
const displayText = document.querySelector(".displayText");
const radioButtons = document.getElementsByName("colors");
const buttons = Array.from(document.getElementsByTagName("button"));

// Event Listeners
document.addEventListener("keydown", changeColor);
toggleMenu.addEventListener("click", () => menuList.classList.toggle("active"));
radioButtons.forEach(radiobtn => {
  radiobtn.addEventListener("click", getRandomColor);
  radiobtn.addEventListener("click", changeColor);
  radiobtn.addEventListener("click", () => menuList.classList.remove("active"));
});
buttons.forEach(btn => {
  btn.addEventListener("mouseover", buttonMouseOver);
  btn.addEventListener("mouseleave", () => (btn.style.background = ""));
});

function buttonMouseOver(e) {
  value = e.target.value;
  this.style.background = value;
}

function changeColor(e) {
  let value = e.target.value;
  let keyCode = e.keyCode;
  if (e.target.type === "radio") {
    displayText.innerHTML = `${value}`;
    background.style.background = `${value}`;
    displayText.style.color = background.style.background;
  }
  switch ((keyCode = e.keyCode)) {
    case 49:
      background.style.background = `gray`;
      displayText.style.color = background.style.background;
      break;
    case 50:
      background.style.background = "red";
      displayText.style.color = background.style.background;
      break;
    case 51:
      background.style.background = `orange`;
      displayText.style.color = background.style.background;
      break;
    case 52:
      background.style.background = `yellow`;
      displayText.style.color = background.style.background;
      break;
    case 53:
      background.style.background = `green`;
      displayText.style.color = background.style.background;
      break;
    case 54:
      background.style.background = `blue`;
      displayText.style.color = background.style.background;
      break;
    case 55:
      background.style.background = `indigo`;
      displayText.style.color = background.style.background;
      break;
    case 56:
      background.style.background = `violet`;
      displayText.style.color = background.style.background;
      break;
    case 57:
      background.style.background = getRandomColor();
      displayText.style.color = background.style.background;
      break;
  }
  displayText.innerHTML = `${background.style.background.toUpperCase()}`;
}

function getRandomColor() {
  const getRandomNumber = (low, high) => Math.floor(Math.random() * (high - low + 1)) + low;
  let characters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += characters[getRandomNumber(0, 15)];
  }
  return (background.style.background = color);
}

// Document element clicked logger
document.addEventListener("click", e => console.log(e.target));
