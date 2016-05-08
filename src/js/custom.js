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





function speak(st){


var utterance = new SpeechSynthesisUtterance(st);
window.speechSynthesis.speak(utterance);


}

//   var ref;
//   var userX;
// function createRefUpdate(userX,code){
// ref= new Firebase("https://angelhack2016.firebaseio.com/"+userX);
// ref.set({
// 	code:code
//   }
// );

// }



// Annyang thing would go here. 

annyang.setLanguage('en-IN');

// annyang.addCallback('error',function(){

// console.log("some error bro");

// });

var commands = {
'fine :x': door,
'automatic': function() {
      $('.main text').append(" automatic");
    },
 'case': function() {
      $('.main text').append(" case ");
    },
'constant': function() {
      $('.main text').append(" const");
    },
'character': function() {
      $('.main text').append(" char");
    },
'default': function() {
      $('.main text').append(" default");
    },
'do': function() {
      $('.main text').append(" do");
    },
'double': function() {
      $('.main text').append(" double");
    },
 'else': function() {
      $('.main text').append(" double");
    },
  'enum': function() {
      $('.main text').append(" enum");
    },
  'external': function() {
      $('.main text').append(" external");
    },

    'float': function() {
      $('.main text').append(" float");
    },

    'for': function() {
      $('.main text').append(" for");
    },

    'goto': function() {
      $('.main text').append(" goto");
    },

    'if': function() {
      $('.main text').append(" if");
    },

    'integer': function() {
      $('.main text').append(" int");
    },

    'long': function() {
      $('.main text').append(" long");
    },
    'register': function() {
      $('.main text').append(" register");
    },
    'return': function() {
      $('.main text').append(" return");
    },
    'short': function() {
      $('.main text').append(" short");
    },
    'signed': function() {
      $('.main text').append(" signed");
    },
    'size of': function() {
      $('.main text').append(" sizeof");
    },
    'static': function() {
      $('.main text').append(" static");
    },
        'struct': function() {
      $('.main text').append(" static");
    },
        'switch': function() {
      $('.main text').append(" switch");
    },
        'size of': function() {
      $('.main text').append(" sizeof");
    },
    'defination': function() {
      $('.main text').append(" typedef");
    },
        'union': function() {
      $('.main text').append(" union");
    },
        'void': function() {
      $('.main text').append(" void");
    },
        'volatile': function() {
      $('.main text').append(" volatile");
    },
     'login': function() {
      			door('login');
    },
        'logout': function() {
      			door('logout');
    }







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

annyang.start();

function Magic(text){

	$('.main textarea').append(text);
}

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