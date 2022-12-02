alert('hi');
let navIcon = document.querySelector('.navicon-div');
let menu = document.querySelector('.menu');
let closeBtn = document.querySelector('.fa-xmark');
let firstDrop = document.querySelector('.first-drop');
let secondDrop = document.querySelector('.second-drop');

let downArrowOne = document.querySelector('.one');
let downArrowTwo = document.querySelector('.two');
let body = document.querySelector('body');

navIcon.addEventListener('click', function(){
// body.style.filter = 'blur(2px)';
menu.classList.add('show-menu');
// console.log(window.innerHeight, 'inner height');
// menu.style.height=window.innerHeight;
firstDrop.classList.remove('menu-height');
secondDrop.classList.remove('menu-height');
});

closeBtn.addEventListener('click', function(){
menu.classList.remove('show-menu')
});

downArrowOne.addEventListener('click', function(){
    firstDrop.classList.toggle('menu-height');
    
})
downArrowTwo.addEventListener('click', function(){
   
    secondDrop.classList.toggle('menu-height');
})