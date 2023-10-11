import { daysWeek } from "../utils/constants.js";
import Form from "./Form.js";
import Api from "./Api.js";

export default class EditTask extends Form {
    constructor(App, taskFromDay, modal, taskform,) {
      super(taskFromDay, modal, taskform);
      this.App = App
    }

    setInputValues(day, todo, index, elem) {
      this.elem = elem
      todo.day = day + 1;
      this._id = todo._id;
      this.index = index;
      this.inputs.forEach((input) => input.value = todo[input.name]);
      this.todo = todo
    }  
    addListeners() {
      this.form.addEventListener('submit', e => {
        e.preventDefault();
        const values = this.getInputValues();
        const {title, time, day, completed, description} = values;
        Api.editTask(this._id, {title : title, time : time, dayWeek : day, completed : completed, description : description})
          .then(data => {
              daysWeek[day - 1].todos[this.index] = data;
              this.taskFromDay.actionBtn(day - 1);
              delete daysWeek[this.todo.day - 1].todos[this.index]
          })
      });
      this.closeBtn.addEventListener('click', this.closeForm.bind(this));
    }
}