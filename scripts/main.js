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
var $buttonBox = $('#total-button-box');

$(document).ready(function() {
	var Tax = 5.5;
	var subtotal, total = 0;



	$('form').on('submit', function(e) {
		e.preventDefault();

		var price = parseFloat($price.val());

	})




});


