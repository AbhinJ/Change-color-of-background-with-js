var btn = document.getElementById("btn-12");

function random(number){
	return Math.floor(Math.random()*(number+1));
}

function changeColor (){
	var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	document.body.style.backgroundColor = randomColor;
	console.log("button clicked");
	console.log(randomColor);
 }
 btn.onclick = changeColor;