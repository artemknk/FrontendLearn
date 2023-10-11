import { valid, patternValid } from "../utils/constants.js";


class SignIn {
  constructor() {
    this.auth()
    this.url = 'https://testapiservisefortesting.onrender.com/'
    this.form = document.querySelector('.authForm');
    this.inputs = Array.from(this.form.elements).filter(item => item.tagName === 'INPUT')
    this.errMessages = this.form.querySelectorAll('.errMessage')
    this.submitBtn = this.form.querySelector('.submitBtn')
    this.addListeners()
  }

  auth(){
    if(localStorage.getItem('token')) {
      window.location = './index.html'
    }
  }

  AuthApi(body) {
    return fetch('https://testapiservisefortesting.onrender.com/user/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((responce) => responce.json())
      .then(data => localStorage.setItem('token', data.token))
  }

  getInputValues() {
    const body = {}
    this.inputs.forEach(item => body[item.name] = item.value.trim());
    return body;
  }
  
  validation(e){
    const inp = e.target
    valid[inp.name] = patternValid[inp.name].test(inp.value.trim())
    const arrvalid = Object.values(valid)
    this.errMessages.forEach((err, i) => !arrvalid[i] 
      ? err.classList.add('visible') : err.classList.remove('visible'))
    this.submitBtn.disabled = arrvalid.includes(false)
  }

  addListeners() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      const values = this.getInputValues();
      this.AuthApi(values)
        .then((responce) => {
          console.log(responce);
          this.form.reset()
          window.location = './index.html'
        })
        .catch(e => console.log(e))
    });
    
    this.inputs.forEach(input => input.addEventListener('input', this.validation.bind(this)))
  }
}
const signIn = new SignIn()
export default signIn;