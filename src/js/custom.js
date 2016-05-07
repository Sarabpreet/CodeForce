var int=setInterval(border,16);
var count=0;

function border(){
count=count+1;
// $('.border-status2').css("width":count+'%');
// console.log("hi "+count);

if(count<=100){

	$('.border-status2').css("width",count+"%");
	if(count>=60){
		$('.border-status2').css("background","#77b847");
		vibe(400);
	}
}
	
else{
		$('.border-status2').css("width","0%");
		count=0;
		$('.border-status2').css("background","#cd3636");

}
	
}




function vibe(x){

	navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

if (navigator.vibrate) {
	navigator.vibrate(x);
}
}



// User story 
// User logs in website 
// User grabs a screenshot via camera (haven on demand) 
// User speaks in chrome mobile



