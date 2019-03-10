// 1. Почему код дает именно такой результат?
	
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // сначала сработает префиксный инкремент, 1+1=2.
				//Затем по приоритету сработает присваивание, 
				//что вернёт в переменную "c" значение 2. При этом переменная "a" 
				//уже содержит значение 2, так как сработал инкремент.

d = b++;
alert(d); // Правило постфиксного инкремента - он возвращает значение  
				//переменной  до инкремента. 
				//Поэтому присваивание вернёт в переменную "d" значение 1. 
				//После в переменную "b" вернётся значение 2, так как 1+1=2.

с = (2+ ++a);
alert(c); // сначала сработает префиксный инкремент и увеличит переменную "a", 
				//2 + 1 = 3 и вернёт в переменную "a" значение 3. Затем по приоритету  
				//выполняется операция сложения 2 + 3 = 5.
				//Присваивание вернёт в переменную "с" значение 5.

d = (2+ b++);
alert(d); // Правило постфиксного инкремента - он возвращает значение  
				//переменной  до инкремента. Поэтому при операции сложения
				//переменная "b" равна 2. 2 + 2 = 4. 
				//Присваивание вернёт в переменную "в" значение 4.

alert(a); // Вернёт последнее значение переменной равное 3.
alert(b); // Вернёт значение переменной после инкремента равное 3.

//2. Чему будет равен r?

let p = 2;
let  r = 1 +  (p *= 2); 

console.log(r);

// Выражение p *= 2 это сокращение операции p = p * 2.
// Поэтому r = 1 + (2 * 2) = 5;

//3. 

let n = 5, m = 1;
let result;
	if (n>=0&&m>=0){
		result = n - m;
	} else if (n<0&&m<0) {
		result = n * m;
	} else {
		result = n + m;
	}

console.log(result);
	
//4.
	let e = 10;
	let f = 5;
	
	function subtraction(x , y) {
		let result1 = 0;
		result1 = x - y;
		return result1;
	}
	
	console.log(subtraction(e , f));
	
	 function division(x , y) {
		let result2 = 0;
		 result2 = x / y;
		 return result2;
	}
	 
	 console.log(division(e , f));
	 
	 function multiplication(x , y) {
	 	let result3 = 0;
		 result3 = x * y;
		 return result3;
	 }
	 
	 console.log(multiplication(e , f));
	 
	 function exponentiation(x,y){
	 	let result4 = 0;
		 result4 = x ** y;
		 return result4;
	 }
	
	 console.log(exponentiation(e , f));
	
// 5.
	 
	 
	 function mathOperation(arg1, arg2, operation){
	 	let result5 = 0;
		 switch (operation){
			 case ("-"):
				result5 = subtraction(arg1, arg2);
				break;
			 case ("/"):
				 result5 = division(arg1, arg2);
				 break;
			 case("*"):
				 result5 = multiplication(arg1, arg2);
				 break;
			 case("**"):
				 result5 = exponentiation(arg1, arg2);
				 break;
			 default:
		}
		 return result5;
	 }
	 
	 console.log(mathOperation(25,2,"**"));
	 