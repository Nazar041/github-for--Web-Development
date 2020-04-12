
const form      = $('#form');

const page_munb = $('#page_munb');
const words     = $('#words');

const btn_more = $('.more');
const btn_less = $('.less');

const input_pages = $('input[name="pages"]');


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
	event.preventDefault();



	console.table(form.serializeArray());
});