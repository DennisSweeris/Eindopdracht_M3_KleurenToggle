// Selectors
const menuList = document.querySelector(".menuList");
const toggleMenuBtn = document.querySelector(".hamburger");
const changeText = document.querySelector(".myText");
const radioButtons = document.getElementsByName("colors");
const background = document.querySelector(".background");
const buttons = document.querySelectorAll(".btn");

// Listeners
toggleMenuBtn.addEventListener("click", () => menuList.classList.toggle("active"));
document.addEventListener("keydown", changeColor);
radioButtons.forEach(radiobtn => radiobtn.addEventListener("click", () => menuList.classList.remove("active")));
buttons.forEach(btn => btn.addEventListener("mouseover", changeColor));

function changeColor(e) {
  let value = e.target.value;
  let keyCode = e.keyCode;
  if (e.target.type === "button") {
    changeText.innerHTML = `Background: ${value}`;
    background.style.background = `${value}`;
  }
  switch ((keyCode = e.keyCode)) {
    case 49:
      background.style.background = `gray`;
      break;
    case 50:
      background.style.background = `red`;
      break;
    case 51:
      background.style.background = `orange`;
      break;
    case 52:
      background.style.background = `yellow`;
      break;
    case 54:
      background.style.background = `green`;
      break;
    case 54:
      background.style.background = `blue`;
      break;
    case 55:
      background.style.background = `indigo`;
      break;
    case 56:
      background.style.background = `violet`;
      break;
  }
  changeText.innerHTML = `Background: ${background.style.background}`;
}
