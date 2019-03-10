// 1.
let converter = {
	digits: {
		'единицы': 0,
		'десятки': 0, 
		'сотни': 0
	},

	numberToObj(number){
		let num = parseInt(number);
		if ( num > 999 || isNaN(num)) {
			console.log('Число больше нужного или не число:)')
		} else {
			this.digits['единицы']= num%10;
			this.digits['десятки']= Math.floor(num/10)%10;
			this.digitst['сотни']= Math.floor(num/100);
		}
	}
}


		
let input = prompt('Введите число от 0 до 999', 999);
converter.numberToObj(input);
console.log(converter.digits);

// 2. 


let basket = {
	goodList: [],
		
	countTotalPrice(){
		let totalPrice = 0;
		for (let i = 0; i < this.goodList.length; i++){
			totalPrice += this.goodList[i].getPrice();
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
var processorPrice = {
  'i5': 5000,
  'i7': 10000
};

var displayPrice = {
  13: 5000,
  15: 10000
};

var memoryPrice = {
  8: 3000,
  16: 4000
};

var buildComputer = function (memory, display, processor) {
  var customComputer = {
    basicPrice: 5000,
    processor: processor,
    display: display,
    memory: memory,

    getDescription: function () {
      return 'компьютер с процессором ' + this.processor + ', диагональю ' + this.display + ', оперативной памятью ' + this.memory;
    },

    getPrice: function () {
      return this.basicPrice + processorPrice[this.processor] + displayPrice[this.display] + memoryPrice[this.memory];
    },
    
    putToBasket(){
			basket.goodList.push(this);
		}
  };

  return customComputer;
};

var firstComputer = buildComputer(8, 13, 'i7');
var secondComputer = buildComputer(8, 15, 'i5');
var thirdComputer = buildComputer(16, 13, 'i5');
var fourthComputer = buildComputer(16, 15, 'i7');

var computerShop = [firstComputer , secondComputer, thirdComputer, fourthComputer];

computerShop.forEach( function(item, index) {
	item.putToBasket()
	if(index % 2 == 1) {item.putToBasket()}
});

console.log('Стоимость товаров: ' + basket.countTotalPrice());
console.log('Всего товаров: ' + basket.countTotalNumber());
