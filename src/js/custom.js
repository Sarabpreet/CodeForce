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

  var ref;
  var userX;
function createRefUpdate(userX,code){
ref= new Firebase("https://angelhack2016.firebaseio.com/"+userX);
ref.set({
	code:code
  }
);

}

ref= new Firebase("https://angelhack2016.firebaseio.com/");
ref.child("Sarabpreet").on("value", function(snapshot) {
  $('.main-r textarea').val(snapshot.val().code);  // Alerts "San Francisco"
});





// Annyang thing would go here. 

annyang.setLanguage('en-IN');

// annyang.addCallback('error',function(){

// console.log("some error bro");

// });

var commands = {
'fine :x': door,
'automatic': function() {
      $('.main textarea').append(" automatic");
    },
 'case': function() {
      $('.main textarea').append(" case ");
    },
'constant': function() {
      $('.main textarea').append(" const");
    },
'character': function() {
      $('.main textarea').append(" char");
    },
'default': function() {
      $('.main textarea').append(" default");
    },
'do': function() {
      $('.main textarea').append(" do");
    },
'double': function() {
      $('.main textarea').append(" double");
    },
 'else': function() {
      $('.main textarea').append(" double");
    },
  'enum': function() {
      $('.main textarea').append(" enum");
    },
  'external': function() {
      $('.main textarea').append(" external");
    },

    'float': function() {
      $('.main textarea').append(" float");
    },

    'for': function() {
      $('.main textarea').append(" for");
    },

    'go to': function() {
      $('.main textarea').append(" goto");
    },

    'if': function() {
      $('.main textarea').append(" if");
    },

    'integer': function() {
      $('.main textarea').append(" int");
    },

    'long': function() {
      $('.main textarea').append(" long");
    },
    'register': function() {
      $('.main textarea').append(" register");
    },
    'return': function() {
      $('.main textarea').append(" return");
    },
    'short': function() {
      $('.main textarea').append(" short");
    },
    'signed': function() {
      $('.main textarea').append(" signed");
    },
    'size of': function() {
      $('.main textarea').append(" sizeof");
    },
    'static': function() {
      $('.main textarea').append(" static");
    },
        'struct': function() {
      $('.main textarea').append(" static");
    },
        'switch': function() {
      $('.main textarea').append(" switch");
    },
        'size of': function() {
      $('.main textarea').append(" sizeof");
    },
    'defination': function() {
      $('.main textarea').append(" typedef");
    },
        'union': function() {
      $('.main textarea').append(" union");
    },
        'void': function() {
      $('.main textarea').append(" void");
    },
        'volatile': function() {
      $('.main textarea').append(" volatile");
    },
     'login': function() {
      			door('login');
    },
        'logout': function() {
      			door('logout');
    },
    'include default': function() {
      			 $('.main textarea').append(" #include <stdio.h> #include <conio.h>  #include <math.h>");
    },
    'hash': function() {
      			 $('.main textarea').append(" #");
    },
    'open sea': function() {
      			 $('.main textarea').append(" ( ");
    },
    'close sea': function() {
      			 $('.main textarea').append(" )");
    },
     'open ball': function() {
      			 $('.main textarea').append(" [");
    },
    
    'close ball': function() {
      			 $('.main textarea').append(" ]");
    },
    
   'open pan': function() {
      			 $('.main textarea').append(" {");
    },
    
    'close pan': function() {
      			 $('.main textarea').append(" }");
    },
    'divide': function() {
      			 $('.main textarea').append(" /");
    },
       'multiply': function() {
      			 $('.main textarea').append(" *");
    },
       'addition': function() {
      			 $('.main textarea').append(" +");
    },
    'minus': function() {
      			 $('.main textarea').append(" -");
    },
       'equal': function() {
      			 $('.main textarea').append("=");
    },
       'space': function() {
      			 $('.main textarea').append(" ");
    },
     'clear': function() {
      			 $('.main textarea').val(" ");
    },
    'string :x': makeString,

   	'backup': function() {
      			 // $('.main textarea').append(" -");
      			 createRefUpdate("Sarabpreet",$('.main textarea').val());
      			 speak("Data has been stored sucessfully!!");
      			 vibe(50);
    }

};



annyang.addCommands(commands);

annyang.addCallback('resultMatch',function(){


speak("Done!");
vibe(50);

});


annyang.addCallback('resultNoMatch',function(){

speak(" no match found");
vibe(100);

});

annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
  console.log(userSaid); // sample output: 'hello'
  console.log(commandText); // sample output: 'hello (there)'
  console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
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
	speak("You are logged In");
	vibe(50);

	}
	if(x=='logout'){

	$('.hide-home').show();
	$('.node').css("display","none");
	$('.main textarea').css("display","none");
	speak("You are logged out");
	vibe(50);

	}
}

function makeString(x){

	$('.main textarea').append(x);

}