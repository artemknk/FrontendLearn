import Task from './Task.js'
import Api from './Api.js'
export default class TaskFromDay {
  elem = document.createElement('div')
  dir = document.querySelector('.section')
  constructor (daysWeek, app) {
    this.app = app
    this.btns = document.querySelectorAll('.week_day')
    this.daysWeek = daysWeek
    this.renderElement()
    this.addListeners()
  }

  renderElement(){
    this.elem.classList.add('task-from-day')
    this.appendElement(this.dir, this.elem)
  }

  removeTable(){
    this.elem.innerHTML = ''
  }

  appendElement(dir, elem){
    dir.append(elem)
  }

  actionBtn(index){  
    this.btns.forEach(btn => btn.classList.remove('choose_btn'))
    this.btns[index].classList.add('choose_btn')
    this.removeTable()
    this.todos = this.daysWeek[index].todos 
    this.todos.forEach((todo, i) => {
      const task = new Task(todo, this, i, index)
    })
  }

  addListeners(){
    this.btns.forEach((btn, index)=> {
      btn.addEventListener('click', ()  =>  {
        this.actionBtn(index)
    })
    })
  }
}