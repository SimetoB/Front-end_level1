var myForm = document.getElementById('my-form');
var formInfo = document.getElementById('form-info');
var response = document.getElementById('response');
var checkbox = document.getElementById('checkbox');


function sendForm () {
	var confimation = confirm('Данните коректни ли са? Да изпратя ли формата?');

	if (confimation) {
		formInfo.style.display = 'none';
		response.style.display = 'block';
		myForm.submit();
	} else {
		alert('Изпращането беше отказано.')
	}
}

function returnBack() {
	response.style.display = 'none';
	formInfo.style.display = 'block';
}

function addNew() {
	var newLang = prompt('Въведете нов език', 'Език');
	var newCheckbox = document.createElement('input');
	newCheckbox.setAttribute('type', 'checkbox');
	newCheckbox.setAttribute('name', 'languages[]');
	newCheckbox.setAttribute('value', newLang);
	newCheckbox.setAttribute('id', newLang);
	checkbox.appendChild(newCheckbox);
	var newLabel = document.createElement('label');
	newLabel.setAttribute('for', newLang);
	newLabel.innerHTML = newLang;
	checkbox.appendChild(newLabel);
}