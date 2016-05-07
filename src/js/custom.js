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



var keywords=["auto",
"break",
"case",
"char",
"const",
"continue",
"default",
"do",
"double",
"else",
"enum",
"extern",
"float",
"for",
"goto",
"if",
"int",
"long",
"register",
"return",
"short",
"signed",
"sizeof",
"static",
"struct",
"switch",
"typedef",
"union",
"unsigned",
"void",
"volatile"];



// User story 
// User logs in website 
// User grabs a screenshot via camera (haven on demand) 
// User speaks in chrome mobile
// User sees what he spoke in 


// Screen one 


// Khul ja sim sim ? (yes, hindi) 
// notepad says "hi sarabpreet, would you like to create a new thing?
// i say, "Create new"
//
 
