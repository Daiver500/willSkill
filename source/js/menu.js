const menu = () => {

  const navigationToggleButton = document.querySelector('.header__button-mobile');
  const menuSvgs = document.querySelectorAll('.header__toggle');
  const navigationMenu = document.querySelector('.navigation');
  const body = document.querySelectorAll('.page');


  const menuToggle = () => {
    navigationMenu.classList.toggle('is-active');
    body[0].classList.toggle('no-scroll');
    menuSvgs.forEach((svg) => {
      svg.classList.toggle('is-hidden');
    });
  };

  navigationToggleButton.addEventListener('click', menuToggle);
};

export {menu};
