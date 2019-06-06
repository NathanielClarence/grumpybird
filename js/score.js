var scr;

function Score(){
	this.scr = 0;
}

function Scoring(nilai){
	this.scr += nilai;
}

function getScore(){
	return this.scr;
}