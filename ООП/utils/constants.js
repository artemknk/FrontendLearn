export const Hello = 'TODO'

export const daysWeek = [
  {
    id: 1,
    nameDay: "Monday",
    todos: [
      // {time : '11:00', task:'Задача 1', isComplited : false, description : 'Описание задачи'},
      // {time : '19:00', task:'Задача 2', isComplited : false, description : 'Описание задачи'},
    ]
  },
  {
    id: 2,
    nameDay: "Tuesday",
    todos: [ 
      // {time : '12:00', task:'Задача 1', isComplited : false, description: 'Описание задачи'},
    ]
  },
  {
    id: 3,
    nameDay: "Wednesday",
    todos: [
      // {time : '11:00', task:'Задача 1', isComplited : false, description: 'Описание задачи'},
      ]
  },
  {
    id: 4,
    nameDay: "Thursday",
    todos: [
      // {time : '11:00', task:'Задача 1', isComplited : false, description: 'Описание задачи'},
    ]
  },
  {
    id: 5,
    nameDay: "Friday",
    todos: [
      // {time : '11:00', task:'Задача 1', isComplited : false, description: 'Описание задачи'},
    ]
  },
  {
    id: 6,
    nameDay: "Saturday",
    todos: [
      // {time : '11:00', task:'Задача 1', isComplited : false, description: 'Описание задачи'},
    ]
  },
  {
    id: 7,
    nameDay: "Sunday",
    todos: [
      // {time : '11:00', task:'Задача 1', isComplited : false, description: 'Описание задачи'},
    ]
  }
];

export const patternValid = {
  email : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password : /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  name : /[a-zA-Z][a-zA-Z]{4,15}/
}

export const valid = {
  email: false,
  password: false,
}
