class Api {
  constructor () {
    this.url = ''
  }

  getTodos () {
    return fetch('https://testapiservisefortesting.onrender.com/todo/todos', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token')},
      })
      .then(responce => responce.json())
  }

  addTask(body){
    return fetch('https://testapiservisefortesting.onrender.com/todo/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(body)
    })
      .then(responce => responce.json())
  }

  editTask(id, body){
    return fetch('https://testapiservisefortesting.onrender.com/todo/patch?id=' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(body)
    })
      .then(responce => responce.json())
  }

  deleteTask(id){
    return fetch('https://testapiservisefortesting.onrender.com/todo/delete?id=' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
  }
}

export default new Api()