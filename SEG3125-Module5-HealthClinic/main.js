function validate(event) {
	let form = document.getElementById("bookingForm")
	console.log(event)
	event.preventDefault();
	event.stopPropagation();
	console.log(form.reportValidity());
	if(validatePhone("phone") && form.checkValidity() && validateCredit("credit")){
		alert("Successfully booked");
	}
}


function validateContact(event) {
	let form = document.getElementById("contactForm")
	console.log(event)
	event.preventDefault();
	event.stopPropagation();
	console.log(form.reportValidity());
	console.log(form.checkValidity())
}