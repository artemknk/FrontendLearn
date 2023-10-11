const menuItems = document.querySelectorAll('.menu__item');
const menuImgs = document.querySelectorAll('img.menu__img');

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener('click', () => {
    const menuImg = menuImgs[index];
    menuImg.classList.toggle('menu__img__active');
  });
});





