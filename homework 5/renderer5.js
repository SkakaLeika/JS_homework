'use strict'

let renderer = {
	render(){
		let table = this.generateTable();
		document.body.insertAdjacentHTML('beforeEnd', table);
		this.renderUserPosition(player);
		obstacle.renderObstaclePosition();
	},

	generateTable() {
        let board = '';
        for(let y = 0; y < config.rowsCount; y++) {
            board += '<tr>';
            for(let x = 0; x < config.colsCount; x++) {
				board += '<td data-x="' + x + '" data-y="' + y + '"> </td>'
			}
			board +="</tr>"
		}
		return '<table><tbody>' + board + '</tbody></table>';
	},

	renderUserPosition(player) {
        let square = this.getSquare(player);
        square.classList.add('user');
	},

	getSquare(player) {
        return document.querySelector(`[data-x="${player.x}"][data-y="${player.y}"]`);
	},

	clearUserPosition(){
		document.querySelector('.user').classList.remove('user');
	}
};
