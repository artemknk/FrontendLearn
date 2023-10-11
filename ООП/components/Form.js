import { daysWeek } from "../utils/constants.js";
import Api from "./Api.js";

export default class Form {
  constructor (taskFromDay, modal, taskform) {
    this.modal = document.querySelector(modal);
    this.form = document.querySelector(taskform);
    this.inputs = Array.from(this.form.querySelectorAll('.formInput'));
    this.closeBtn = this.modal.querySelector('.closeBtn');
    this.taskFromDay = taskFromDay;
    this.addListeners();
  }
  getInputValues() {
    const task = {};

    this.inputs.forEach(input => task[input.name] = input.value);
    console.log(task)
    this.result = {title : task.title, time: task.time,  day : task.day, completed: false, description : task.description};
    return this.result
  }
  addListeners() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      const values = this.getInputValues();
      const { title, time, day, completed, description } = values;
      Api.addTask({ title, dayWeek : day, completed, time, description })
        .then(data => {
          daysWeek[day - 1].todos.push(data);
          this.taskFromDay.actionBtn(day - 1);
        });
    });
    this.closeBtn.addEventListener('click', this.closeForm.bind(this));
  }
  openForm() {
    document.querySelectorAll('.modalWindow').forEach(item => item.classList.remove('active'));
    this.modal.classList.add('active');
  }
  closeForm () {
    this.modal.classList.remove('active');
  }
}

