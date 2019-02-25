// 1.

function	numberToObj(a){
	if ( a > 999 ) {
		let b = {};
		alert("Число превышает 999");
		return (b);
	} else if ( isNaN(a) ){
		let b = {};
		alert("Необходимо ввести число");
		return (b);
	} else {
		unit = a%10;
		decade = Math.floor(a/10)%10;
		thousant = Math.floor(a/100)%10;
		alert("Загляни в консоль");
		return (a = {'единицы': unit, 'десятки': decade, 'сотни': thousant});
	}
}
		
let number = parseInt(prompt("Введите число не превышающее 999"));
console.log(numberToObj(number));

// 2. 

let basket = {
	goodList: [],
		
	countTotalPrice(){
		let totalPrice = 0;
		for (let i = 0; i < goodList.length; i++){
			totalPrice += goodList[i].price;
		}
		return totalPrice;
},
	
	countTotalNumber(){
		let totalNumber = 0;
		this.goodList.forEach( function(element, index) {
			totalNumber ++;
		});
		return totalNumber;
	}
}

let goodList = [
	{
		name: 'book',
		price: 250,
		putToBasket(){
			basket.goodList.push(this);
		}
	},
		{
		name: 'pen',
		price: 55,
		putToBasket(){
			basket.goodList.push(this);
		}
	},
		{
		name: 'pencil',
		price: 15,
		putToBasket(){
			basket.goodList.push(this);
		}
	},
		{
		name: 'copybook',
		price: 150,
		putToBasket(){
			basket.goodList.push(this);
		}
	}
]

goodList.forEach( function(item, index) {
	item.putToBasket()
	if(index % 2 == 1) {item.putToBasket()}
});

console.log('Стоимость товаров: ' + basket.countTotalPrice());
console.log('Всего товаров: ' + basket.countTotalNumber());

 