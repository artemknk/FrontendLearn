const burgerMenuButton = document.querySelector('.header_burger');
const headerNav = document.querySelector('.header_nav');
const headerNavClose = document.querySelector('.header_nav-close');


burgerMenuButton.addEventListener('click', () => {
  headerNav.classList.toggle('hidden');
  setTimeout(() => {
    headerNav.classList.add('show_nav');
  }, 50);
})

headerNavClose.addEventListener('click', () => {
  headerNav.classList.remove('show_nav');
  setTimeout(() => {
    headerNav.classList.add('hidden');
  }, 1000);
})

console.log(burgerMenuButton);
console.log(headerNav);