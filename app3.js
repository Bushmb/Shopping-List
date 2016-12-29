function addNewItem(item) {
		
		$('.js-shopping-list').append(
			'<li>' +
        		'<span class="shopping-item">' + item + '</span>' +
        		'<div class="shopping-item-controls">' +
          			'<button class="shopping-item-toggle js-shopping-item-toggle">' +
            		'<span class="button-label">check</span>' +
          			'</button>' +
          			'<button class="shopping-item-delete js-shopping-item-delete">' +
            		'<span class="button-label">delete</span>' +
          			'</button>' +
        		'</div>' +
     		'</li>');
};

function completeItem() {
	$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
}

function deleteItem() {
	$(this).closest('li').remove();
}

function handleAddItems(formElement) {
	formElement.submit(function(event){
	event.preventDefault();
    var newShoppingListItem = $('#js-shopping-list-entry').val();
    addNewItem(newShoppingListItem);
    this.reset();
    });
}

function handleDeleteItems(listElement, deleteIdentifier) {
	listElement.on('click', deleteIdentifier, deleteItem);
}


function handleCheckedItems(listElement, checkedIdentifier) {
	listElement.on('click', '.js-shopping-item-toggle', completeItem);
}


$(document).ready(function() {

	var formElement = $('#js-shopping-list-form');
	var listElement = $('.js-shopping-list');
	var deleteIdentifier = '.js-shopping-item-delete';
	var checkedIdentifier = '.js-shopping-item-toggle';

	handleAddItems(formElement);
	handleDeleteItems(listElement, deleteIdentifier);
	handleCheckedItems(listElement, checkedIdentifier);

});