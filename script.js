let navIcon = document.querySelector(".navicon-div");
let menu = document.querySelector(".menu");
let closeBtn = document.querySelector(".fa-xmark");
let firstDrop = document.querySelector(".first-drop");
let secondDrop = document.querySelector(".second-drop");
let longArrowDownOne = document.querySelector(".longarrowdownone");
let longArrowDownTwo = document.querySelector(".longarrowdowntwo");
let ulListOne = document.querySelector(".drop-one");
let ulListTwo = document.querySelector(".drop-two");
let longFeature = document.querySelector(".feature");

let downArrowOne = document.querySelector(".one");
let downArrowTwo = document.querySelector(".two");
let body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", (event) => {
  firstDrop.classList.remove("menu-height");
  secondDrop.classList.remove("menu-height");
  ulListOne.classList.remove("menu-height");
  ulListTwo.classList.remove("menu-height");
});

navIcon.addEventListener("click", function () {
  menu.classList.add("show-menu");
  firstDrop.classList.remove("menu-height");
  secondDrop.classList.remove("menu-height");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("show-menu");
});

// downArrowOne.addEventListener("click", function () {

// });
// downArrowTwo.addEventListener("click", function () {

// });

function sideMenuDownOne() {
  firstDrop.classList.toggle("menu-height");
}
function sideMenuDownTwo() {
  secondDrop.classList.toggle("menu-height");
}

function ArrowOne() {
  ulListTwo.classList.remove("menu-height");
  ulListOne.classList.toggle("menu-height");
}

function ArrowTwo() {
  ulListOne.classList.remove("menu-height");
  ulListTwo.classList.toggle("menu-height");
}
