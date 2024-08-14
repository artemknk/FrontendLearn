 class App {
  catalog = [];
  cartProducts = [];
  categorys = [];
  user = {};
  order = {
    userId : '',
    products: []
  }

  setOrder(userId , products) {
    this.order = {userId , products : products.map((product) => ({id: product.id, quantity: product.count}))};
  }


  setCatalog(catalog) {
    this.catalog = catalog;
  }
  setCartProducts(cartProducts) {
    this.cartProducts = cartProducts;
  }
  setCategorys(categorys) {
    this.categorys = categorys;
  }
  
  setUser(data = {}) {
    this.user.firstName = data.firstName || '';
    this.user.lastName = data.lastName || '';
    this.user.email = data.email || '';
    this.user.phone = data.phone || '';
    this.user.id = data.id || '';
  }
}

const app = new App();
export default app