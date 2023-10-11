class SignUp {
  constructor() {
    this.form = document.querySelector('#form');
    this.addListeners();
  }

  getInpValues() {
    const [name, email, password] = Array.from(document.querySelectorAll('.regInp')).map(item => item.value);
    return {name, email, password};
  }

  registration(body){
    return fetch('https://testapiservisefortesting.onrender.com/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }

  addListeners() {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const {name, email, password} = this.getInpValues();
      await this.registration({name, email, password});
      this.form.reset();
      window.location = './index.html';
    });
  };
}

const signUp = new SignUp()