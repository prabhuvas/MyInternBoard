function validation() {
	// body...
	var mail = document.login.email.value;
	var code = document.login.password.value;

	if(mail==null || mail==""){
		alert("Email is Empty");
		return false;
	}
	else if(code==null || code==""){
		alert("Password is Empty");
		return false;
	}
}
