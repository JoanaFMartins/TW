/**
 * 
 */

function hide(){
	document.getElementById("autentication").style.display = "none";
	document.getElementById("left").style.display="block";
	document.getElementById("game").style.display="block";
	var username = document.getElementById("username").value;
	document.getElementById("user").innerHTML=username;
}

function errorMessage(){
	alert("Esta opção ainda não está disponível.");
}