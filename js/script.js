var userName;
		
storeusername = function() {
	userName = document.getElementById("myusername").value;
	document.getElementById('myusername').innerhtml = "Your username is " + userName;
}