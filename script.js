const hamburgerBtn = document.querySelector('.header__menu-btn');
const hamburgerBtnIcon = document.querySelector('.header__menu-btn img');
const menuSection = document.querySelector('.header__nav ul');

hamburgerBtn.addEventListener('click', () => {
  if(menuSection.classList.contains('open')) {
    hamburgerBtnIcon.src = "Assets/Bars.svg";
    menuSection.classList.remove('open');
    hamburgerBtn.style.position = "relative";
  } else {
    menuSection.classList.add('open');
    hamburgerBtnIcon.src = "Assets/Times.svg";
    hamburgerBtn.style.position = "fixed";
  }
})