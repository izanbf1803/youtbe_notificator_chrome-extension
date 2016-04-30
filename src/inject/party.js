function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

repeat = 0;

interval = setTimeout(function(){
	if (repeat == 20){
		clearTimeout(interval);
	}
	repeat += 1;
	$("html").css({"transition":"-webkit-filter 1s","-webkit-filter":"hue-rotate("+String(randomRange(0,360))+"deg)"});
},20);