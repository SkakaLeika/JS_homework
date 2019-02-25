'use strict'

function basket() {
    let newElem = document.createElement( 'div' ),
    	contentEmpty = document.createTextNode( 'Корзина пуста' ),
    	basketEl = document.body,
    	newButton = document.createElement( 'button' ),
    	contentButton = document.createTextNode( 'Заполнить корзину' ),
    	contentFull = document.createTextNode( 'В корзине: ' + 0 + ' товаров, на сумму ' + 0 + ' рублей.' );
    newElem.appendChild(contentEmpty);
    newElem.appendChild(newButton);
    newButton.appendChild(contentButton);
    basketEl.parentNode.appendChild(newElem);
};
basket();
