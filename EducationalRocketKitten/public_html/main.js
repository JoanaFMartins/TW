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

function validateGameMode(){
	var type = document.getElementById("gType");
	var mode = document.getElementById("gMode");
	if(!type.selected || !mode.selected){
		alert("Apenas o modo individual e o tipo de jogo aritmética estão disponíveis.");
	}
}