/*
 *  Exercise 10 from "Exercises for Programmers"
 *		by Brian Hogan
 *
 *	Create a self-checkout that returns subtotal, total tax, and total price
 *
 */

'use strict';
var $ = require('jquery');

var $item = $('#item');
var $price = $('#price');
var $totalButton = $('#total-button');
var $itemList = $('#item-list');

$(document).ready(function() {
	var Tax = 5.5;
	var subtotal, total = 0;



	$('form').on('submit', function(e) {
		e.preventDefault();

		var price = parseFloat($price.val()).toFixed(2);
		var item = $item.val();

		$('#item-headers').append('<tr><th class="row-item">Item</th><th class="row-price">Price</th></tr>');

		$itemList.append('<tr><td class="row">'+ item +'</td><td>'+ price +'</td></tr>');

	})


	$totalButton.on('click', function() {


	})


});


