function borderThing(){

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

var keywordsHuman=["automatic",
"break",
"case",
"character",
"constant",
"continue",
"default",
"do",
"double",
"else",
"enum",
"external",
"float",
"for",
"goto",
"if",
"integer",
"long",
"register",
"return",
"short",
"signed",
"size of",
"static",
"struct",
"switch",
"type defination",
"union",
"unsigned",
"void",
"volatile"];



function speak(st){


var utterance = new SpeechSynthesisUtterance(st);
window.speechSynthesis.speak(utterance);


}


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
  var ref;
  var userX;
function createRefUpdate(userX,code){

ref= new Firebase("https://angelhack2016.firebaseio.com/"+userX);
ref.set({
	code:code
  }
);

}



// Annyang thing would go here. 

annyang.setLanguage('en-IN');

// annyang.addCallback('error',function(){

// console.log("some error bro");

// });

var commands = {
'fine :x': door
// 'automatic': add('auto'),
// "break":add('break'),
// "case":add('case'),
// "character":add('char'),
// "constant":add('cons'),
// "continue":add('continue'),
// "default":add('default'),
// "do":add('do'),
// "double":add('double'),
// "else":add('else'),
// "enum":add('enum'),
// "external":add('external'),
// "float":add('float'),
// "for":add('for'),
// "goto":add('goto'),
// "if":add('if'),
// "integer":add('int'),
// "long":add('long'),
// "register":add('register'),
// "return":add('return'),
// "short": add('short'),
// "signed":add('signed'),
// "size of":add('sizeof'),
// "static":add('static'),
// "struct":add('struct'),
// "switch":add('switch'),
// "type defination":add('typedef'),
// "union":add('union'),
// "unsigned":add('unsigned'),
// "void":add('void'),
// "volatile":add('volatile')


};



annyang.addCommands(commands);



annyang.addCallback('resultMatch',function(){

speak("Cool");
vibe(50);

});


annyang.addCallback('resultNoMatch',function(){

speak(" Not Cool");
vibe(100);

});


function helloFunction(){


	console.log("lol");
}

function add(x){

speak(x);
}

function door(x){

	if(x=='login'){
	$('.hide-home').hide();
	$('.node').css("display","inline");
	$('.main textarea').css("display","block");
	speak("Logged In");
	vibe(50);

	}
	if(x=='logout'){

	$('.hide-home').show();
	$('.node').css("display","none");
	$('.main textarea').css("display","none");
	speak("LOGGED OUT");
	vibe(50);

	}
}