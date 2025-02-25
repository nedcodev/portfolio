/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent this click from triggering the document click
    navMenu.classList.toggle('show-menu');
    
    // When opening the menu, make sure the hamburger animation stays in sync
    if (navMenu.classList.contains('show-menu')) {
      if (navToggle.querySelector('.ham1') && !navToggle.querySelector('.ham1').classList.contains('active')) {
        navToggle.querySelector('.ham1').classList.add('active');
      }
    } else {
      if (navToggle.querySelector('.ham1') && navToggle.querySelector('.ham1').classList.contains('active')) {
        navToggle.querySelector('.ham1').classList.remove('active');
      }
    }
  });
}

/*===== MENU HIDDEN =====*/
// Validate if constant exists
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    
    // Update hamburger icon state
    if (navToggle.querySelector('.ham1') && navToggle.querySelector('.ham1').classList.contains('active')) {
      navToggle.querySelector('.ham1').classList.remove('active');
    }
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
  navMenu.classList.remove('show-menu');
  
  // Update hamburger icon state
  if (navToggle.querySelector('.ham1') && navToggle.querySelector('.ham1').classList.contains('active')) {
    navToggle.querySelector('.ham1').classList.remove('active');
  }
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

// Prevent menu from closing when clicking inside the menu
if (navMenu) {
  navMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
  if (navMenu && navMenu.classList.contains('show-menu')) {
    navMenu.classList.remove('show-menu');
    
    // Update hamburger icon state
    if (navToggle.querySelector('.ham1') && navToggle.querySelector('.ham1').classList.contains('active')) {
      navToggle.querySelector('.ham1').classList.remove('active');
    }
  }
});

/*===== CONTACT-TEXTAREA =====*/
let textArea = document.getElementById('textbox');
let characterCounter = document.getElementById('char_count');
const maxNumOfChars = 100;

const countCharacters = () => {
  if (!textArea) return; // Guard clause if element doesn't exist
  
  let numOfEnteredChars = textArea.value.length;
  let counter = maxNumOfChars - numOfEnteredChars;
  
  if (characterCounter) {
    characterCounter.textContent = counter + '/100';

    if (counter < 0) {
      characterCounter.style.color = 'var(--ninth-color)';
    } else if (counter < 20) {
      characterCounter.style.color = 'var(--fifteenth-color)';
    } else {
      characterCounter.style.color = 'var(--second-color)';
    }
  }
};

if (textArea) {
  textArea.addEventListener('input', countCharacters);
}