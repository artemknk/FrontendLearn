import Api from "./Api.js";

export default class Task {
  constructor(todo, taskFromDay, index, day) {
    this.taskFromDay = taskFromDay
    this.day = day
    this.todo = todo
    this.title = todo.title;
    this.time = todo.time;
    this.index = index
    this.description = todo.description
    this.dir = document.querySelector('.task-from-day');
    this.complite = todo.isComplited;
    this.createTask()
  }
  createTask() {
    this.elem = document.createElement('div');
    this.elem.classList.add('task');
    this.elem.innerHTML = `
      <div class="container_task">
        <input type="checkbox" class="checkbox">
        <div class="day">${this.title}</div>
        <div class="time">${this.time}</div>
      </div>
      <div class="description">${this.description}</div>
      <div class="buttonsTask">
        <button class="editBtn"></button>
        <button class="deleteBtn"></button>
      </div>
    `;
    this.dir.append(this.elem);
    this.editBtn = this.elem.querySelector('.editBtn')
    this.deleteBtn = this.elem.querySelector('.deleteBtn')
    this.check = this.elem.querySelector('.checkbox')
    this.elemChecked(this.todo.completed)
    this.check.addEventListener('change', (e) => this.checkTask(e))
    this.elem.addEventListener('click', (e) => this.openDescription(e))
    this.editBtn.addEventListener('click', (e) => this.editTask(e))
    this.deleteBtn.addEventListener('click', (e) => this.deleteTask(e))

  }

  openDescription(e) {
  if(e.target.classList.contains('checkbox') || e.target.classList.contains('description') || e.target.classList.contains('editBtn') || e.target.classList.contains('deleteBtn')) return
    this.elem.querySelector('.description').classList.toggle('description_active')
  }
  
  elemChecked(bool) {
    bool ? this.elem.classList.add('checked') : this.elem.classList.remove('checked')
    this.check.checked = bool
  }
  
  checkTask(e) {
    const bool = e.target.checked
    this.todo.completed = bool
    Api.editTask(this.todo._id, this.todo)
    .then(data => {
      this.elemChecked(this.todo.completed)
      })
  }

  editTask (e) {
    if(e.target.classList.contains('editBtn')){
      document.querySelectorAll('.modalWindow').forEach(i => i.classList.remove('active'));
      this.taskFromDay.app.taskEditForm.openForm()
      this.taskFromDay.app.taskEditForm.setInputValues(this.day, this.todo, this.index, this.elem)
    }
  }

  deleteTask (e) {
    Api.deleteTask(this.todo._id)
    .then(responce => {
      responce.ok && this.elem.remove();
    });
  }
}
