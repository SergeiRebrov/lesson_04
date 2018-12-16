 let r = Math.round(Math.random() * 10);// получаем случайное число от 0 до 10 , округленное
console.log (r); 

let userNum = document.querySelector("#user-num"); //получаем поле ввода
document.querySelector("#btn").onclick = checkNum; // получаем кнопку проверки + событие по клику

function checkNum() {     //функция проверки числа
	let num = parseInt(userNum.value);
	
if (!isNaN(num) && num >= 0 && num <= 10 ) { 
	  if (num == r) {
			alert('Угадал!');
			location.reload();
	  } else {
		  alert ('Попробуй еще!');
	    }
    } else {
		 alert('Введите корректное число!');
			} 
			
		userNum.value = " "; //очистить input
}
	
