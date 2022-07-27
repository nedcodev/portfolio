/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
//  Validate if constant exists
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
//  Validate if constant exists
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*===== CONTACT-TEXTAREA =====*/

let textArea = document.getElementById('textbox');
let characterCounter = document.getElementById('char_count');
const maxNumOfChars = 100;

const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  let counter = maxNumOfChars - numOfEnteredChars;
  characterCounter.textContent = counter + '/100';

  if (counter < 0) {
    characterCounter.style.color = 'var(--ninth-color)';
  } else if (counter < 20) {
    characterCounter.style.color = 'var(--fifteenth-color)';
  } else {
    characterCounter.style.color = 'var(--second-color)';
  }
};

textArea.addEventListener('input', countCharacters);

// let toggle = document.querySelector('.nav-toggle');
// toggle.addEventListener('click', function () {
//   toggle.classList.toggle('is-active');
// });
