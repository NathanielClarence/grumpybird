function bigText(x){
	x.style.fontSize = "25px";
}

function normalText(x){
	x.style.fontSize = "16px";
}

function backToMenu(){
	var w = document.getElementById("game");
	var x = document.getElementById("how-to-play");
	var y = document.getElementById("credit-menu");
	var z = document.getElementById("main-menu");
	w.style.display = "none";
	x.style.display = "none";
	y.style.display = "none";
	z.style.display = "block";
}

function showHelp(){
	var x = document.getElementById("main-menu");
	var y = document.getElementById("how-to-play");
	x.style.display = "none";
	y.style.display = "block";
}

function showCredit(){
	var x = document.getElementById("main-menu");
	var y = document.getElementById("credit-menu");
	x.style.display = "none";
	y.style.display = "block";
}