import Modal from "./Modal.js";

export default class Categorys extends Modal {
  constructor(container) {
    super(container);
  }
  
  renderCategory(category) {
    const categoryName = document.createElement('p');
    categoryName.classList.add('category__name');
    categoryName.textContent = category;
    this.container.appendChild(categoryName);
  }
}