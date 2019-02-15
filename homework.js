// -------------------------- Home work --------------------------
// -------------------------- Кириченко Игорь --------------------------

//1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов
// и возвращает объект, содержащий первый аргумент и массив из остатка


/**
 * @description get arguments, return object first arguments and array other
 * @returns {firstArg, otherArray}
 */
function getArguments() {
	const [first, ...other] = arguments;
	return {first: first, other: other};
}



//2. Организовать функцию getInfo, которая принимает объект вида
//{ name: ...,  info: { employees: [...], partners: [ … ]  } }
//и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {  
    name: 'Google',   
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
  };

/**
 * @description выводить в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
 * @param {object} { name: ...,  info: { employees: [...], partners: [ … ]  } }
 * @returns {name, info.partners[0], info.partners[1]}
 */


function getInfo(myObj) {
	let { name = 'Unknown',  info: { partners: [first, second] } } = myObj;
	console.log(`Name: ${name}`);
	console.log(`Partners: ${ [first, second] }`);
}


// 3. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):


/**
 * @description Переделать функцию с использованием функции-стрелки 
 * @param {Array or null}
 * @returns {Number} 
 */

const sum = (...params) => {
	if (!params.length) return 0;
  	return params.reduce((prev, next) => prev + next);
}

