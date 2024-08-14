import app from './components/Model/App.js';
import Product from './components/Product.js';
import ProductCart from './components/ProductCart.js';
import Api from './components/Model/Api.js';
import Cart from './components/Cart.js';
import Categorys from './components/Categorys.js';
import Profile from './components/Profile.js';
import Header from './components/Header.js';


const productsSection = document.querySelector('.products');
const cartButton = document.querySelector('.cart__button');
const cart = document.querySelector('.cart');
const header = document.querySelector('.header');
const headerButtons = document.querySelector('.header__buttons');
const cartContainer = document.querySelector('.cart__container');
const fullPrice = document.querySelector('.full__price');
const payButton = document.querySelector('.cart__pay');
const loginLink = document.querySelector('.header__login');
const userProfile = document.querySelector('.userProfile');
const userModal = document.querySelector('.user__modal');
const userPic = userProfile.querySelector('.user__pic');
const userLogoutButton = userModal.querySelector('.user__modal-logout');
const closeButtons = document.querySelectorAll('.user__modal-close');
const userEditButton = userModal.querySelector('.user__modal-edit');
const editProfileOverlay = document.querySelector('.overlay');
const overlayForm = editProfileOverlay.querySelector('.form__edit-profile');
const addProductButton = document.querySelector('.add__product');
const addProductOverlay = document.querySelector('.add__product-modal');
const addProductForm = addProductOverlay.querySelector('.form__add-product');
const productSaveButton = addProductForm.querySelector('.product__save-button');
const searchProductButton = document.querySelector('.search__product-button');
const searchProductOverlay = document.querySelector('.search__container');
const searchProductInput = document.querySelector('.search__product-input');
const searchProductClearButton = document.querySelector('.search__product-clear');
const searchProductByCategoryButton = document.querySelector('.products__category');
const categorysContainer = document.querySelector('.categorys__container');
const categorysClearButton = document.querySelector('.categorys__clear-button');
const burgerMenuButton = document.querySelector('.burger__menu');

const api = new Api();
const profile = new Profile(userModal);
const viewCart = new Cart(cart);
const viewCategorys = new Categorys(categorysContainer);
const viewHeader = new Header(document.body);

api.getProducts()
  .then(data => {
    app.catalog = data.products;
    app.setCatalog(data.products);
    app.setCategorys([...new Set(app.catalog.map(product => product.category))]);
    app.categorys.forEach(viewCategorys.renderCategory.bind(viewCategorys));
    data.products.forEach((product) => renderProducts(product, 'appendFile'));
  });

async function userAuth() {
    const res = await api.userAuth();
    if(res.ok){
      const data = await res.json();
      userProfile.classList.add('userProfile__open');
      loginLink.classList.add('hidden__link');
      app.setUser(data);
      userPic.src = data.image;
      profile.setProfile(data);
    } else {
      loginLink.classList.remove('hidden__link');
    }
  }
async function addNewProduct(body) {
  return await api.addNewProduct(body);
}

userProfile.addEventListener('click', () => {
  profile.open()
  if (window.matchMedia("(max-width: 500px)").matches) {
    viewHeader.closeHeader();
  }
})
function editUserProfileOpen() {
  overlayForm.querySelector('#name').value = app.user.firstName;
  overlayForm.querySelector('#surname').value = app.user.lastName;
  overlayForm.querySelector('#email').value = app.user.email
  overlayForm.querySelector('#phone').value = app.user.phone;
  editProfileOverlay.classList.remove('hidden');
}
async function saveEditProfile(event) {
  event.preventDefault();
  const editProfileValues = {
    firstName: overlayForm.querySelector('#name').value,
    lastName: overlayForm.querySelector('#surname').value,
    email: overlayForm.querySelector('#email').value,
    phone: overlayForm.querySelector('#phone').value
  }
  const data = await api.updateUser(editProfileValues, app.user.id);
  profile.setProfile(data);
  app.setUser(data);
  editProfileOverlay.classList.add('hidden');
}
async function saveNewProduct(event) {
  event.preventDefault();
  const newProduct = {
    title: addProductForm.elements['title'].value,
    description: addProductForm.elements['description'].value,
    category: addProductForm.elements['category'].value,
    price: addProductForm.elements['price'].value,
    images: [addProductForm.elements['image'].value]
  }
  const newProductData = await addNewProduct(newProduct);
  app.setCatalog([...app.catalog, newProductData]);
  app.setCategorys([...new Set(app.catalog.map(product => product.category))]);
  renderProducts(newProductData, 'prependFile');
  viewCategorys.renderCategory(newProductData.category);
  addProductOverlay.classList.add('hidden');
}
function logout() {
  localStorage.removeItem('token');
  window.location.reload();
}
// Описывали в классе Modal закрытие модального окна при клике на крестик, т.е. этот код можно убрать, а в лиссенере вызывать закрытие при клике на крестик.
function closeModal(btn) {
  const modal = btn.closest('.close');
  modal.classList.add('hidden');
}

function renderProducts(obj, method) {
  const product = new Product();
  product.renderProduct(obj);
  product[method](productsSection);

  product.btn.addEventListener('click', () => {
    const product = app.cartProducts.find(el => el.id === obj.id);
    const objectCartElement = {...obj, count: 1};
    
    if (product) {
      product.count++;
      product.countItem.textContent = product.count;
    } else {
      addToCart(objectCartElement);
      app.setCartProducts([...app.cartProducts, objectCartElement]);
    }
    getTotal()
  });
  return product;
}

function addToCart(obj) {
  const cartItem = new ProductCart();
  cartItem.render(obj);
  cartItem.appendFile(cartContainer);
  
  obj.countItem = cartItem.countElem
  cartItem.cartItemButtonPlus.addEventListener('click', () => {
    obj.count++;
    cartItem.countElem.textContent = obj.count;
    getTotal();
  });
  
  cartItem.cartItemButtonMinus.addEventListener('click', () => {
    if (obj.count > 1) {
      obj.count--;
      cartItem.countElem.textContent = obj.count;
      getTotal();
    }
  });

  cartItem.cartItemRemove.addEventListener('click', () => {
    app.cartProducts.splice(app.cartProducts.indexOf(obj), 1);
    cartItem.element.remove();
    app.setCartProducts(app.cartProducts.filter(el => el.id !== obj.id));
    getTotal();
  })
}

function getTotal () {
  fullPrice.textContent = app.cartProducts.reduce((acc, el) => {
    return acc + el.price * el.count;
  }, 0).toFixed(2);
}

async function cartPay() {
  app.setOrder(app.user.id, app.cartProducts);
  const data = await api.createOrder(app.order);
  app.setCartProducts([]);
  viewCart.cartPayButton();
  orderSuccess(data);
}

function orderSuccess(data) {
  const orderOverlay = document.querySelector('.order__overlay');
  const orderOverlayPrice = orderOverlay.querySelector('.order__price');
  const orderId = orderOverlay.querySelector('.order__id');
  orderId.textContent = `Order number ${data.id}`
  orderOverlayPrice.textContent = `Total price: ${Math.floor(data.total)}`
  orderOverlay.classList.remove('hidden');
  setTimeout(() => {
    orderOverlay.classList.add('hidden');
  }, 3000)
}
function searchProductOpenInput() {
  if (window.matchMedia('(max-width: 500px)').matches) {
    searchProductOverlay.classList.remove('hidden__search-overlay');
  } else {
    viewHeader.toggleHeader();
    searchProductOverlay.classList.toggle('hidden__search-overlay');
  }
}
function clearSearchInput() {
  searchProductInput.value = '';
  searchProduct();
  const allProducts = productsSection.querySelectorAll('.product');
  allProducts.forEach(product => {product.classList.remove('search__product')});
  searchProductOverlay.classList.add('hidden__search-overlay');
  viewHeader.closeHeader();
}
function removeSearchClasses() {
  productsSection.classList.remove('search__products');
  const allProducts = productsSection.querySelectorAll('.product');
  allProducts.forEach(product => {
    product.classList.remove('search__product');
  });
}
function searchProduct() {
  const allProducts = productsSection.querySelectorAll('.product');
  allProducts.forEach(product => {product.remove()})
  const searchValue = searchProductInput.value;
  const searchProducts = app.catalog.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()));
  searchProducts.forEach(productData => {
    renderProducts(productData, 'appendFile');
  });
  if (searchValue === '') {
    removeSearchClasses();
  }
}

function searchProductByCategorys() {
  viewCategorys.toggle();
  const allCategoryNames = categorysContainer.querySelectorAll('.category__name');
  allCategoryNames.forEach(category => {
    category.addEventListener('click', () => {
      const allProducts = productsSection.querySelectorAll('.product');
      allProducts.forEach(product => {product.remove()});
      const searchProducts = app.catalog.filter(product => product.category === category.textContent);
      searchProducts.forEach(productData => {renderProducts(productData, 'appendFile')});
      removeSearchClasses();
      const allCategoryNames = categorysContainer.querySelectorAll('.category__name');
      allCategoryNames.forEach(category => category.classList.remove('category__name--active'));
      category.classList.add('category__name--active');
      viewCategorys.close();
    });
  });
  if (window.matchMedia('(max-width: 500px)').matches) { viewHeader.closeHeader(); }
}

function clearCategorysSearch() {
  viewCategorys.close();
  const allCategoryNames = categorysContainer.querySelectorAll('.category__name');
  allCategoryNames.forEach(category => category.classList.remove('category__name--active'));
  const allProducts = productsSection.querySelectorAll('.product');
  allProducts.forEach(product => {product.remove()});
  app.catalog.forEach(productData => {renderProducts(productData, 'appendFile')});
}
function addProductOpen() {
  if (window.matchMedia('(max-width: 500px)').matches) {
    addProductOverlay.classList.remove('hidden');
    viewHeader.closeHeader();
  }
  addProductOverlay.classList.remove('hidden');
}
function openBurgerMenu() {
  if (window.matchMedia('(max-width: 500px)').matches) {
    viewHeader.toggleHeader();
    searchProductOverlay.classList.add('hidden__search-overlay');
  }
}

userAuth();
cartButton.addEventListener('click', () => {
  viewCart.open()
  viewHeader.closeHeader();
  searchProductOverlay.classList.add('hidden__search-overlay');
});
closeButtons.forEach(btn => btn.addEventListener('click', () => closeModal(btn)));
userLogoutButton.addEventListener('click', logout);
userEditButton.addEventListener('click', editUserProfileOpen);
overlayForm.addEventListener('submit', saveEditProfile);
productSaveButton.addEventListener('click', saveNewProduct);
payButton.addEventListener('click', cartPay);
addProductButton.addEventListener('click', addProductOpen);
searchProductButton.addEventListener('click', searchProductOpenInput);
searchProductInput.addEventListener('input', searchProduct);
searchProductClearButton.addEventListener('click', clearSearchInput);
searchProductByCategoryButton.addEventListener('click', searchProductByCategorys);
categorysClearButton.addEventListener('click', clearCategorysSearch);
burgerMenuButton.addEventListener('click', openBurgerMenu);
