console.log('script start');

const form = document.getElementById('form');

// це означає що коли форма буде віджправлена ми запустим функцію valid
form.addEventListener('submit', valid);

function valid (event) {
    event.preventDefault(); // це треба щоб сторінка не перезагружалась

    console.log('valid start');

	var fail = false;
	var name = form.name.value;
	var email = form.email.value;

    console.log('name = ' + name);
    console.log('email = ' + email);
    console.log('fail = ' + fail);

	var adr_pattern = '^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$';

	if(name == "" || name == " ")
		fail = "You have not selected a topic!"
	else if(adr_pattern.text(email) == false)
		fail = "You did not email!"
	if(fail)
        alert(fail);
        

    console.log('valid end');

}

console.log('script end');

