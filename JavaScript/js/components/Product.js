export default class Product {
  element = document.createElement('div');
  btn = null;
  renderProduct(obj) {
    this.element.classList.add('product');
    this.element.innerHTML = `
      <img src="${obj.images[0]}" alt="${obj.description}" class="product__image">
      <h3 class="product__title">${obj.title.toUpperCase()}</h3>
      <p class="product__category">${obj.category ? obj.category : ''}</p>
      <p class="product__description">${obj.description}</p>
      <button class="product__button">Add to cart</button>
    `;
    this.btn = this.element.querySelector('.product__button');
  }
  appendFile(parent) {
    parent.append(this.element);
  }
  prependFile(parent) {
    parent.prepend(this.element);
  }
}

