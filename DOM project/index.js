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

// let arr = ['21', '32', '34', '43', '45', '54', '55'];
// let sum = 0;

// for (let elem of arr) {
// 	console.log(elem[0], elem[1] + 1); // '2' и '11', '3' и '21' ...
	
// 	if (elem[0] === elem[1] + 1) {
// 		sum += elem;
// 	}
// }

// console.log(sum);

// let arr = [[1, 2], [3, 4], [5, 6]];
// let sum = 0;
// for (let elem of arr) {
// 	for (let el of elem) {
// 		sum += el;
// 	}
// }
// console.log(sum);

// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];
// let sum = 0;
// for (let elem of arr) {
// 	for (let el of elem) {
// 		for (let elem of el) {
// 			sum += elem;
// 		}
// 	}
// }
// console.log(sum);

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; // создаем подмассив
	
// 	for (let j = 0; j < 5; j++) {
// 		arr[i].push(j + 1); // заполняем подмассив числами
// 	}
// }

// console.log(arr);

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// };
// let sum = 0;
// for (let key in obj) {
// 	for (let key2 in obj[key]) {
// 		sum += obj[key][key2];
// 	}
// }
// console.log(sum);
// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// };
// let sum = 0;
// for (let key in obj) {
// 	for (let key2 in obj[key]) {
// 		for (let key3 in obj[key][key2]) {
// 			sum += obj[key][key2][key3];
// 		}
// 	}
// }
// console.log(sum);

// let students = {
// 	'group1': ['name11', 'name12', 'name13'],
// 	'group2': ['name21', 'name22', 'name23'],
// 	'group3': ['name31', 'name32', 'name33'],
// };
// console.log(students['group3'][0]);
// let employeesSalary = 0
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];
// for ( let employee of employees) {
// 	if (employee.age >= 30) {
// 		employeesSalary += employee.salary;
// 	}
// }
// console.log(employeesSalary);

// let students = {
// 	'group1': {
// 		'subgroup11': ['student111', 'student112', 'student113'],
// 		'subgroup12': ['student121', 'student122', 'student123'],
// 	},
// 	'group2': {
// 		'subgroup21': ['student211', 'student212', 'student213'],
// 		'subgroup22': ['student221', 'student222', 'student223'],
// 	},
// 	'group3': {
// 		'subgroup31': ['student311', 'student312', 'student313'],
// 		'subgroup32': ['student321', 'student322', 'student323'],
// 	},
// };
// students.group1.subgroup11.push('student114');
// students.group1.subgroup13 = [];
// students.group4 = [];
// students.group4.subgroup41 = [];
// students.group4.subgroup41.push('student411');
// students.group4.subgroup41.push('student412');
// console.log(students);

// let arr = [4, -2, 5, 19, -130, 0, 10];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// let str ='я учу javascript!';
// console.log(str.substring(2,5) + ' ' + str.substring(6, str.length - 1));
// let str1 = '123456';
// console.log(str1.replace(/-/g,'|'));
// console.log(str1.split(''));

// let arr = [1, 2, 3, 4];

// let res = arr.find(function(e) {
// 	return e === 2;
// });

// console.log(res);

// let num = 12345;
// let arr = String(num).split('');

// let prod = 1;
// for (let digit of arr) {
// 	prod *= digit;
// }

// console.log(prod);

// 	function whatSign (number) {
// 		return console.log(number > 0 ? '+++' : number < 0 ? '---' : 'zero');
// }
// whatSign(0);
// whatSign(-1);
// whatSign(1);

// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// func(2, 3);
// func(3);
// func();

// function divideByTwo(number){
//   let count = 0;
//   while (number >= 10) {
//     number /= 2;
//     count++;
//   }
//   return count;
// }
// console.log(divideByTwo(1000));

// function func() {
// 	let num = 5;
// 	return num;
// }

// console.log(func());

// function func() {
// 	return '!!!!!!';
// }

// console.log(func());
// // console.log(func);
// func = 123;
// console.log(func);
// function func1 () {
//   return 3;
// }
// let func2 = func1;
// console.log(func1() + func2());

// let func1 = function () {
//   return 1;
// }
// let func2 = function () {
//   return 2;
// }
// console.log(func1() + func2());

// let arr = [
//   function () {
//     return 1;
//   },
//   function () {
//     return 2;
//   },
//   function () {
//     return 3;
//   },
// ];
// console.log(arr[2]());
// console.log(arr[0]()+arr[1]()+arr[2]());
// for (let func of arr) {
//   console.log(func());
// }

// function func(num1, num2) {
//   function square(number) {
//     return number * number;
//   }
//   function cube(number) {
//     return number * number * number;
//   }
//   return square(num1) + cube(num2);
// }
// console.log(func(2, 3));
// console.log(func(5, 3));

// class Employee {
//   showName() {
//     return this.name;
//   }
//   showSalary() {
//     return this.salary;
//   }
// };
// let employee1 = new Employee;
// let employee2 = new Employee;
// let employee3 = new Employee;

// employee1.name = 'John';
// employee1.age = 20;
// employee1.salary = 1000;

// employee2.name = 'Tom';
// employee2.age = 25;
// employee2.salary = 1500;

// employee3.name = 'Sam';
// employee3.age = 30;
// employee3.salary = 2000;

// console.log(employee1.showName());
// console.log(employee1.showSalary());

// class Student {
//   name;
//   surname;
//   getInitials() {
//     const firstNameInitial = this.name[0].toUpperCase();
//     const lastNameInitial = this.surname[0].toUpperCase();
//     return `${firstNameInitial}.${lastNameInitial}.`;
//   }
// }
// let student1 = new Student;
// student1.name = 'john';
// student1.surname = 'doe';

// let student2 = new Student;
// student2.name = 'jane';
// student2.surname = 'doe';

// let student3 = new Student;
// student3.name = 'Kate';
// student3.surname = 'Oloe';

// console.log(student1.getInitials());
// console.log(student2.getInitials());
// console.log(student3.getInitials());

// class Person {
//   constructor (firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// let firstFriend = new Person ('Dima', 'Sidorov');
// let secondFriend = new Person ('Artem', 'Konovalenko');

// console.log(`Hello ${firstFriend.firstName + ' ' + firstFriend.lastName} and ${secondFriend.firstName + ' ' + secondFriend.lastName}`);
// console.log(firstFriend.fullName());
// console.log(secondFriend.fullName());

// function func (num1, num2) {
//   function square (num) {
//     return num * num;
//   }
//   function cube (num) {
//     return num * num * num;
//   }
//   return square(num1) + cube(num2);
// }

// console.log(func(2, 3));

// function func(obj) {
//   let sum = 0;

// 	for (let key in obj) {
// 		if (typeof obj[key] == 'object') {
// 			sum += func(obj[key]);
// 		} else {
// 			sum += obj[key];
// 		}
// 	}
//   return sum
// }

// console.log(func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}));

// function func(arr) {
// 	let str = '';
	
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			str += func(elem);
// 		} else {
// 			str += elem;
// 		}
// 	}
	
// 	return str;
// }

// console.log(func(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]));
