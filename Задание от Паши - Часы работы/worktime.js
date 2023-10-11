const daysBtn = document.querySelectorAll('.week_day');
const date = new Date()
const workingDayTime = document.querySelector('.working_day_time');
const containerTask = document.querySelector('.Task');
const addtask = document.querySelector('.addtask');
const popup = document.querySelector('.create_task');
const closeBtn = document.querySelector('.close_btn');
const formInput = document.forms['form'];
const inputsForm = Array.from(formInput.elements).filter(item => item.tagName === 'INPUT');
const btnForm = document.querySelector('.input_btn');

const daysWeek = [
  {
    id: 1,
    nameDay: "Monday",
    todos: [
      {time : '11:00 - 22.00', task:'Задача 1', isComplited : false},
      {time : '19:00', task:'Задача 2', isComplited : false},
    ]
  },
  {
    id: 2,
    nameDay: "Tuesday",
    todos: [ 
      {time : '11:00 - 22.00', task:'Задача 1', isComplited : false},
    ]
  },
  {
    id: 3,
    nameDay: "Wednesday",
    todos: [
      {time : '11:00 - 22.00', task:'Задача 1', isComplited : false},
      ]
  },
  {
    id: 4,
    nameDay: "Thursday",
    todos: [
      {time : '11:00 - 22.00', task:'Задача 1', isComplited : false},
    ]
  },
  {
    id: 5,
    nameDay: "Friday",
    todos: [
      {time : '11:00 - 22.00', task:'Задача 1', isComplited : false},
    ]
  },
  {
    id: 6,
    nameDay: "Saturday",
    todos: [
      {time : '11:00 - 22.00', task:'Задача 1', isComplited : false},
    ]
  },
  {
    id: 7,
    nameDay: "Sunday",
    todos: [
      {time : '11:00 - 22.00', task:'Задача 1', isComplited : false},
    ]
  }
];

const isComplitedFunc = (item, clone) => {
  item.isComplited ? clone.classList.add('closeTask') : clone.classList.remove('closeTask');
}
const removeElement = () => {
  workingDayTime.querySelectorAll('.Task').forEach(item => item.remove());
}

let day = date.getDay() === 0 ? 7 : date.getDay(); // проверка на день недели, т.к. отсчет идет с воскресенья - [0], меняем его на 7
daysBtn[day - 1].classList.add('choose_btn'); // добавляем класс к выбранному дню, добавляем цвет в css

const createTask = (item) => {
  const clone = containerTask.cloneNode(true);
  clone.classList.remove('disabled');
  clone.querySelector('.time_clock').innerText = item.time;
  clone.querySelector('.time_order').innerText = item.task;
  isComplitedFunc(item, clone)
  workingDayTime.append(clone);
  addListeners(clone, item);
}


function chooseDay(index) {
  removeElement()
  const TasksFromDay = daysWeek[index].todos;
  TasksFromDay.forEach(createTask);
  btnColor(index);
  day = index
}

function btnColor(index) { // меняем цвет кнопки на красный удаляем класс и добавляем выбранному дню по индексу
  daysBtn.forEach(btn => btn.classList.remove('choose_btn'));
  daysBtn[index].classList.add('choose_btn');
}

const addListeners = (clone, item) => { // слушатель события на клик, чтобы менять статус задачи, делаем его серым
  clone.addEventListener('click', () => {
    clone.classList.add('closeTask')
    item.isComplited = true
  })
}

function saveUserInput() {
  const task = document.querySelector('.inputs_form[name="task"]').value;
  const time = document.querySelector('.inputs_form[name="time"]').value;
  
  const userInput = {
    task,
    time,
    day
  };
  daysWeek[userInput.day].todos.push(userInput)
  chooseDay(userInput.day);
}

function post (e) {
  e.preventDefault()
  const User = {}
  inputsForm.forEach(item => User[item.name] = item.value);
}

chooseDay(day - 1)
formInput.addEventListener('submit', post);
btnForm.addEventListener('click', () => saveUserInput());
addtask.addEventListener('click', () => popup.classList.add('open'))
closeBtn.addEventListener('click', () => popup.classList.remove('open'))
daysBtn.forEach((item, index) => item.addEventListener('click', (e) => chooseDay(index)))