import { Hello } from "../utils/constants.js";
import TaskFromDay from "./TaskFromDay.js";
import { daysWeek } from "../utils/constants.js";
import Form from "./Form.js";
import EditForm from "./EditForm.js";
import Api from "./Api.js";

class App {
  name = Hello
  constructor() {
    this.auth()
    this.api = Api
    this.btnAddTask = document.querySelector('.addTask')
    this.btnEditBtn = document.querySelector('.editBtn')
    this.btnExitBtn = document.querySelector('.exitBtn')
    this.getTodos()
  }

  auth(){
    if(!localStorage.getItem('token')) {
      window.location = './signin.html'
    }
  }

  getTodos() {
    this.api.getTodos()
      .then(data => {
        data.forEach(todo => {
          daysWeek[todo.dayWeek - 1].todos.push(todo);
        });
        this.createTaskFromDay();
        this.addListeners();
      });
  }

  createTaskFromDay() {
    const taskFromDay = new TaskFromDay(daysWeek, this)
    this.taskForm = new Form(taskFromDay, '.modal', '.taskForm');
    this.taskEditForm = new EditForm(this, taskFromDay, '.modalEdit', '.taskFormEdit');
  }

  clearStorage () {
    localStorage.clear();
    window.location = './signin.html'
  }

  addListeners() {
    this.btnAddTask.addEventListener('click', () => this.taskForm.openForm());
    this.btnExitBtn.addEventListener('click', () => this.clearStorage());
  }
}

new App()