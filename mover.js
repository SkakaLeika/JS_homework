'use strict'
	
let mover = {
	getNextPoint(direction){
		let nextPoint = {
			x: player.x,
			y: player.y
		};

		switch (direction) {
			case '2':
				nextPoint.y--;
				break;
			case '6':
				nextPoint.x++;
				break;
			case '8':
				nextPoint.y++;
				break;
			case '4':
				nextPoint.x--;
				break;
			case '7':
				nextPoint.y--;
				nextPoint.x--;
				break;
			case '9':
				nextPoint.y--;
				nextPoint.x++;
				break;
			case '3':
				nextPoint.y++;
				nextPoint.x++;
				break;
			case '1':
				nextPoint.y++;
				nextPoint.x--;
				break;
			default:
				break;
		}
		return nextPoint;
	},

	canMove(point){
		return point.x < config.nCols && point.x >=0 && point.y < config.nRows && point.y >=0;
	}
}