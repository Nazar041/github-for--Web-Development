"use strict"
const form      = $('#form');

const page_munb = $('#page_munb');
const words     = $('#words');
const btn_more = $('.more'); 
const btn_less = $('.less');

const input_pages = $('input[name="pages"]');

//Це означає що 1 сторінка це 225 слів!
let page = 1;
let words_page = 225;


$( "#datepicker" ).datepicker();


btn_more.click(function(){

	page = page + 1;

	page_munb.text(page);
	words.text(page * words_page);

	input_pages.val(page);

});


btn_less.click(function(){

	page = page - 1;

	page_munb.text(page);
	words.text(page * words_page);

	input_pages.val(page);

});

form.submit(function(event){
	event.preventDefault(); // Це потрібно для того, щоб сторнка не перезавантажувалась!




	console.table(form.serializeArray());
});