'use strict'
	
let renderer = {
	map: '',

	render(){
		for( let i = 0; i < config.nRows; i++){
			for( let j = 0; j < config.nCols; j++){
				if ( j == player.x && i == player.y ){
					this.map += 'o';
				} else {
					this.map += 'x';
				}
			}
			this.map += '\n';
		}
		console.log(this.map);
	},

	clear(){
		console.clear();
		this.map = '';
	}
}