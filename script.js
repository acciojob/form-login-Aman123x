function getFormvalue() {
    //Write your code here
	let form=document.getElementById("form1");
	let firstInput=form.elements["fname"];
	let lastInput=form.elements["lname"];

	let firstname=firstInput.value;
	let lastname=lastInput.value;
	alert(firstname+" "+lastname);
}
