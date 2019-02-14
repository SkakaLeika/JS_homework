"use strict"

// 1.
let a = [
 [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
 [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
 [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

let b = a.slice();
a.pop();

console.log(b);
console.log(a);

// 2.

/* Так и не смогла посчитать .. буду сегодня смотреть и впитывать*/

// 3. 
 for (let r = 0, t = 0; r < 10; t = console.log(r), r++){ }
 

// 4.
 for (let i = 0; i < 5; i++){
 let s = " ";
	for (let k = 0; k <= i; k++){
	s += " *";
}
console.log(s)
}