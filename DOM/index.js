// const button = document.querySelector('.btn');
// const cont = document.querySelector('.conteiner')
// const buttonReverse = document.querySelector('.btn-reverse');

// const logic = {
//   activeElement: null,
//   count: 0,
// }

// function eventBlock (e) {
//   document.querySelectorAll('.block').forEach(elem => elem.classList.remove('block-active')) // - 
//   e.target.classList.add('block-active');
//   logic.activeElement = e.target;
//   logic.count = e.target.dataset.count || 0
// }

// function createElem () {
//   const elem = document.createElement('div');
//   elem.classList.add('block'); // - добавляес класс
//   cont.append(elem);
//   elem.addEventListener('click', eventBlock)
// }

// for (let i = 0; i < 4; i++) {
//   createElem();
// }

// function eventBtn() {
//   const deg = 90;
//   logic.count++ 
//   logic.activeElement.dataset.count = logic.count;
//   logic.activeElement.style.transform = `rotate(${deg * logic.count}deg)`;
// }

// function eventBtnReverse() {
//   const deg = 90;
//   logic.count--;
//   logic.activeElement.dataset.count = logic.count;
//   logic.activeElement.style.transform = `rotate(${deg * logic.count}deg)`;
// }

// button.addEventListener('click', eventBtn);
// buttonReverse.addEventListener('click', eventBtnReverse);

// function createElement (tag, className, dir, content = null) {
//   const elem = document.createElement(tag);
//   elem.classList.add(className);
//   elem.textContent = content;
//   dir.append(elem);
//   return elem;
// }

// const input = createElement ('input', 'input', cont)
// const btn = createElement ('button', 'btn', cont, 'Кнопка')
// const secondInput = createElement ('input', 'input', cont)

// function eventBtn () {
//   const wrap = secondInput.value
//   secondInput.value = input.value
//   input.value = wrap
//   // [input.value, secondInput.value] = [secondInput.value, input.value] // - деструктурированное присваивание
// }

// function eventInput () {
//   secondInput.value = input.value;
// }

// input.addEventListener('input', eventInput) // - input - замена в реальном времени, change - замена после клика по странице

// btn.addEventListener('click', eventBtn);

// new Promise((resolve) => {
//   setTimeout(() =>{
//     resolve('hello')
//   }, 3000)
// })
//   .then((e) => {
//     console.log(e)
//     setTimeout(()=> {
//       console.log('bye')
//     }, 3000)
//   })
/*
fetch('https://jsonplaceholder.typicode.com/user', 'GET')
.then(response => response.json())
      .then(json => console.log(json))
      .catch(e => console.log(`Not Responce ` + e)) // - помогает поймать возможные ошибки
*/
const rightInp = document.querySelectorAll('.rightInp');
const formInput = document.forms['form'];
const inputsForm = Array.from(formInput.elements).filter(item => item.tagName === 'INPUT')
const btnForm = document.querySelector('.btn')

const validReq = {
  userMail : /\S+@\S+\.\S+/,
  userPassword : /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
  userName : /[a-zA-Z][a-zA-Z]{4,15}/,
  userPhone : /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
};

function validation(e) {
  const re = validReq[e.target.name]
  const boolValid = re.test(e.target.value)
  blockBtn(!boolValid, e)
}

function blockBtn (boolValid, e){
  // btnForm.disabled = boolValid ? true : false
  // boolValid ? e.target.classList.add('redBorder') : e.target.classList.remove('redBorder')
  btnForm.disabled = boolValid;
  if (boolValid) {
    e.target.classList.add('redBorder');
    e.target.classList.remove('greenBorder');
  } else {
    e.target.classList.add('greenBorder');
    e.target.classList.remove('redBorder');
  }
}

function post (e) {
  e.preventDefault()
  const User = {}
  inputsForm.forEach(item => User[item.name] = item.value);
  Registred(User);
}

function syncValues (e, i) {
  const value = e.target.value;
  rightInp[i].value = value
}

async function Registred (body){
  const responce = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  console.log(await responce.json())
}

inputsForm.forEach((input, i) => {
  input.addEventListener('input', (e) =>  syncValues(e, i))
  input.addEventListener('change', validation)
});
formInput.addEventListener('submit', post);

// rightInp.forEach(input => {input.addEventListener('input', syncValues);});

// const leftInp = document.querySelectorAll('.leftInp');
// const rightInp = document.querySelectorAll('.rightInp');

// function syncValues (event) {
//   const name = event.target.name;
//   const value = event.target.value;
//   const inputs = document.querySelectorAll(`input[name="${name}"]`);
//   inputs.forEach(input => {
//     if (input !== event.target) {
//       input.value = value;
//     }
//   });
// }

// leftInp.forEach(input => {input.addEventListener('input', syncValues);});
// rightInp.forEach(input => {input.addEventListener('input', syncValues);});


fetch('https://jsonplaceholder.typicode.com/users')
  .then(responce => responce.json())
  .catch(error => console.log(error))
  .then(data => console.log(data))
  .finally(() => console.log('Выполнен запрос'))