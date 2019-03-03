let obstacle = {
	number: 6,
	barX: 4,
	barY: 5,
	
	renderObstaclePosition() {
		let barrier = this.getObstacle();
		barrier.classList.add('obstacle');
	},

	getObstacle() {
		return document.querySelector(`[data-x="${this.barX}"][data-y="${this.barY}"]`)
	}

	/*randomCoordinates(min, max) {
	    let rand = 1 + Math.random() * (max + 1 - min);
	    rand = Math.floor(rand);
	    return rand;
  	},

  	getCoordinatesX(){
  		for (let i = 0; i < this.number; i++){
	  		let barX = this.randomCoordinates(1,10);
	  		return barX;
  		}

  	},
  	getCoordinatesY(){
  		for (let j = 0; j < this.number; j++){
	  		let barY = this.randomCoordinates(1,10);
	  		return barY;
  		}

  	},

	renderObstaclePosition() {
		for (let k = 0; k < this.number; k++){
	        let barrier = document.querySelector(`[data-x="${this.getCoordinatesX()[k]}"][data-y="${this.getCoordinatesY()[k]}"]`);
	        barrier.classList.add('obstacle');
	    }
	}*/
};