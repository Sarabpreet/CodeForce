var int=setInterval(border,300);
var count=0;

function border(){
count=count+10;
// $('.border-status2').css("width":count+'%');
// console.log("hi "+count);

if(count<=100){

	$('.border-status2').css("width",count+"%");
}
	
else{
		$('.border-status2').css("width","0%");
		count=0;
}
	
}