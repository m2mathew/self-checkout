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
var $resetButton = $('#reset-button');
var $itemList = $('#item-list');
var $subtotal = $('#subtotal-update');
var $total = $('#total-update');
var subtotal = 0;
var total = 0;
var tax = 0;
var taxRate = 5.5;

$(document).ready(function() {


	$('form').on('submit', function(e) {
		e.preventDefault();
		tax = 0;
		$('#error').empty();

		// covert price to a number and then only have two decimal places
		var price = parseFloat($price.val()) * 100;
		price = Math.trunc(price)/100;

		if(price < 0 || isNaN(price) === true) {
			$('#error').text('Please enter a valid price.');
			return;
		}

		var item = $item.val();

		// print a running list of what is being purchased
		$('.shopping-cart').html('Your cart');
		$('#item-headers').html('<tr><th class="row-item">Item</th><th class="row-price">Price</th></tr>');
		$itemList.append('<tr><td class="row">'+ item +'</td><td>'+ price.toFixed(2) +'</td></tr>');

		// clear input values after form submitted
		$item.val('');
		$price.val('');

		// keeping track of running totals
		subtotal = subtotal + price;
		$subtotal.text(' - ' + subtotal.toFixed(2));
		tax = subtotal * taxRate/100;
		total = subtotal + tax;
		$total.text(' - ' + total.toFixed(2));
		$item.focus();
	})

	$resetButton.on('click', function() {
		// reset values and empty the html elements
		total = 0;
		subtotal = 0;
		$('.shopping-cart').empty();
		$('#item-headers').empty();
		$itemList.empty();
		$subtotal.empty();
		$total.empty();
		$('#error').empty();
	});
});


