/* Exercise 1: Wish list */
function addToList(item) {
	$('#items').append('<li>' + item + '</li>')
}

// addToList($('#item').val());  This takes the value in the input box and then adds it to my list.

$(document).on('click', '#add-to-list', function() {
	addToList($('#item').val());
	$('#item').val('');
}

	);