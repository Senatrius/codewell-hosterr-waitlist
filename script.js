const hamburgerBtn = document.querySelector('.header__menu-btn');
const hamburgerBtnIcon = document.querySelector('.header__menu-btn img');
const menuSection = document.querySelector('.header__nav ul');
const formField = document.querySelector('form input');
const formBtn = document.querySelector('form .cta-btn');
const errorMessage = document.querySelector('.error');

hamburgerBtn.addEventListener('click', () => {
  if(menuSection.classList.contains('open')) {
    hamburgerBtnIcon.src = "Assets/Bars.svg";
    menuSection.classList.remove('open');
    hamburgerBtn.style.position = "relative";
    hamburgerBtn.style.right = "unset";
  } else {
    menuSection.classList.add('open');
    hamburgerBtnIcon.src = "Assets/Times.svg";
    hamburgerBtn.style.position = "fixed";
    hamburgerBtn.style.right = "4rem";
  }
})

formBtn.addEventListener('click', e => {
  e.preventDefault();

  let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

  if(formField.value === "" || !formField.value.match(emailRegex)) {
    errorMessage.classList.add('active');
  } else {
    errorMessage.classList.remove('active');
  }
})