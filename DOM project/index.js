// const btn = document.createElement('button');
// btn.classList.add('create_btn');
// btn.textContent = 'Жми сюда';
// document.body.append(btn);

// Функция для создания нового DOM-элемента
// function createElement (tag, className, dir, content = null) {
//   const elem = document.createElement(tag); // - Создаем новый элемент с указанным тегом
//   elem.classList.add(className); // - Добавляем элементу класс с указанным именем
//   elem.textContent = content; // - Устанавливаем текстовое содержимое элемента
//   dir.append(elem); // - Добавляем элемент в указанный контейнер на страницу
//   return elem; // - Возыращаем созданный элемент
// }
// const btn = createElement ('button', 'create_btn', document.body, 'Жми сюда'); // - Создаем кнопку

// function delElem (event) {  // - Функция добавления нового класса к элементу 
//   event.target.classList.add('scale'); // - Добавлениe класса 'scale'
// }

// function createBlock () { // - Функция создания нового элемента/блока
//   const elem = createElement ('div', 'circle', document.body); // - Вызываем функцию для создания круга
//   elem.addEventListener('click', delElem); // - Добавляем событие при клике
// }
// btn.addEventListener('click', createBlock); // - событие при клике на кнопку

// function createElement (tag, className, dir, content = null) {
//   const elem = document.createElement(tag);
//   elem.classList.add(className);
//   elem.textContent = content;
//   dir.append(elem);
//   return elem;
// }

// const placeHolders = ['Your name', 'Your surmane', 'Your age', 'Your E-mail'] // - Создаем массив ключей и строковое заполнение форм
// const formInp = document.forms['form']; // - Форма
// const inputs = [] // - Пустой массив куда будем записывать пользовательский ввод

// for (let i = 0; i <= 3; i++) { // - Цикл для создания форм
//   inputs.push(createElement('input', 'inputForm', formInp)); // - Добавляем формы в пустой массив inputs
//   inputs[i].placeholder = placeHolders[i] // - Присваиваем каждому вводу соответсвующее значение placeholder по номеру индекса
// }

// const btn = createElement('button', 'button', formInp, 'Создать') // - Создаем кнопку

// function getUser (event) { // - Функция для получения данных ввода от пользователя
//   event.preventDefault(); // - Метод отмены стандартного поведения браузера при отправке форм (чтобы не перезагружалась страница)
//   const user = {} // - Пустой объект куда будем записывать пару ключ-значение
//   inputs.forEach(item  => user[item.placeholder.split(' ')[1]] = item.value) // - Перебираем массив методом forEach, [item.placeholder.split(' ')[1]] - делим строку чтобы в ключ записать нужные значение placeholder используя пробел в качестве разделителя. И присваиваем соответствуюший пользовательский ввод
//   console.log(user) // - возвращаем в консоль полученный объект
// }

// formInp.addEventListener('submit', getUser); // - добавляем обработчик событий
