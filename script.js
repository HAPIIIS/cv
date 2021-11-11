const nama = document.getElementById("nama");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

window.onload = function(){
    document.getElementById("nama").focus()
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const namaValue = nama.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password1.value.trim();
	const password2Value = password2.value.trim();
	
	if(namaValue === '') {
		setErrorFor(nama, 'nama cannot be blank');
	} else {
		setSuccessFor(nama);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password1, 'Password cannot be blank');
	} else {
		setSuccessFor(password1);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control1 error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control1 success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}