console.log('Loaded!');

var comments=document.getElementById("comments");
		console.log("comments: "+comments.value);

var img1=document.getElementById("mainImg");

var marginRight=100;
function moveLeft(){
	marginRight=marginRight-10;
	img1.style.marginRight=marginRight+'px';
}

img1.onclick=function(){
	alert("clicked");	
	var interval=setInterval(moveLeft(),10);
};

var counter=0;
var likeBtn=document.getElementById('like')
likeBtn.onclick=function(){
	counter=counter+1;
	document.getElementById('likey').innerHTML=counter.toString();
}

$(document).ready(function() {
 $("#readFile").click(function() {
    $.get('data.txt', function(data) {
      $("#container").html(data);
    }, 'text');
 });
});


