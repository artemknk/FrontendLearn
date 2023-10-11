const numbers = document.querySelectorAll('.num');
const signs = document.querySelectorAll('.sign');
const equal = document.querySelector('.equal');
const del = document.querySelector('.numC');
const interInput = document.querySelector('.inpValue');
// - находим и записываем в константы необходимые элементы

const math = {
  num1: '',
  num2: '',
  sign: ''
};
// - создем пустой массив с ключами вводимых чисел и математической операции

function addInp () {
  interInput.value = `${math.num1} ${math.sign} ${math.num2}`
} 
// - функция для отображения ввода чисел и мат.знака

function mathOperation(){
  const { num1, num2, sign } = math;
  switch (sign) {
    case '+': 
      interInput.value = +num1 + +num2;
      break;
    case '-':
      interInput.value = num1 - num2;
      break;
    case '*': 
      interInput.value = num1 * num2;
      break;
    case '/':
      interInput.value = num1 / num2;
      break;
  }
  math.num1 = interInput.value;
  math.num2 = '';
  math.sign = '';
}

function mathEvent (event) {
  if (math.sign) {
    math.num2 += event.target.textContent
  } else {
    math.num1 += event.target.textContent
  }
  addInp ();
};
// - функция записи чисел, проверяет был ли введен математический знак

function signEvent (event) {
  math.sign = event.target.textContent
  addInp ();
}
// - записывает знак

function clear () {
  interInput.value = ''
  math.num1 = ''
  math.num2 = ''
  math.sign = ''
}
// - функция для сброса ввода

numbers.forEach(item => item.addEventListener('click', mathEvent));
signs.forEach(item => item.addEventListener('click', signEvent));
equal.addEventListener('click', mathOperation);
del.addEventListener('click', clear);
// - прослушиватели событий на клик, с вызовом соответствующей функции

// - создаем функцию, которая создает блок
function createBlock () {
  const block = document.createElement('div');
  block.classList.add('block');
  block.textContent = 'block';
  return block;
}
document.body.append(createBlock());
// - создаем блок