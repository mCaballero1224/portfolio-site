const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
	e.preventDefault();

	let fname, lname, email, message, improvements;
	let fnameVal, lnameVal, messageVal, emailVal, navigationVal, improvementsVal, reccomendationVal;

	/* Message Fieldset Elements */
	fname = document.getElementById('fname');
	lname = document.getElementById('lname');
	email = document.getElementById('email');
	message = document.getElementById('message');

	/* Review Fieldset Elements*/
	let navigation = document.querySelector('input[name="ease-of-navigation"]:checked');
	interest = document.getElementById('areas-of-interest');
	improvements = document.getElementById('improvements');
	let reccomendation = document.querySelector('input[name="reccomendation"]:checked');

	/* Fieldset Values */
	fnameVal = fname.value;
	lnameVal = lname.value;
	emailVal = email.value;
	messageVal = message.value;
	navigationVal = navigation.value;
	interestVal = interest.value;
	improvementsVal = improvements.value;
	reccomendationVal = reccomendation.value;

	if (improvementsVal === "") {
		improvementsVal = 'n/a';
	}

	if (interestVal === "") {
		interestVal = 'n/a';
	}

	const data = {
		fname: fnameVal,
		lname: lnameVal,
		email: emailVal,
		message: messageVal,
		navigation: navigationVal,
		interest: interestVal,
		improvements: improvementsVal,
		reccomendation: reccomendationVal
	}
	console.log(data);

	// prep AJAX request
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "/mailer", true);
	xhttp.setRequestHeader("Content-type", "application/json");

	// tell AJAX request how to resolve
	xhttp.onreadystatechange = () => {
		if (xhttp.readyState == 4 && xhttp.status != 200) {
			console.log("There was an error with the input.");
		} 
	};

	xhttp.send(JSON.stringify(data));
	alert('Thank you for your submission. Your message was sent!');
});
