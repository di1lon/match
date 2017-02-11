var count = 0;
var clickz = 0;
var pair = [];
var match = 0;

var audio = new Audio('snd/prox.wav');
var audio2 = new Audio('snd/beverly_computer.wav');







function createBoard() {

  //need fucntion to dynamically create content array depending on desired number of blocks

var content = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var content = ["a", "a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h"];
var contentLength = content.length;


  for (i = 0; i < contentLength; i++) {

    var position = Math.floor(Math.random() * content.length);

    var letter = content.splice(position, 1);

    $("<div class=\"card " + letter + "\">" + letter + "</div>").appendTo(".board");

  }

  $(".card").click(function() {
  $(this).addClass("flipped");
  clickz++;
  $(".counter").text("clicks:" +clickz);
  pair.push($(this).text());
  count++;


  if (count == 2) {

    $(".card").addClass("noClick");
  
    if (pair[0] == pair[1]) {
      //alert("match");
      $("." + pair[0]).addClass("matched");
      audio.play();
      match++;
    $(".matches").text("matches:" + match);
      $(".card").removeClass("noClick");
      if (match == contentLength / 2) {
        $(".card").addClass("winner");
        audio2.play();

  
      }

    } else {
      //alert("no match");
      setTimeout(function() {
        $(".card").removeClass("flipped");
        $(".card").removeClass("noClick");

      }, 1000);



    }

    pair = [];
    count = 0;
  
  

  }


});



};

createBoard();

function reset() {
  $(".board").empty();
  //count = 0;
  //clickz = 0;
  //match = 0;
  createBoard();

}

$(document).ready(function(){
    $(".reset").click(function(){
        reset();
    });
});



//$(".counter").click($(".card").css("fontFamily":"aliens"));


$(".aliens").click(function(){

  $(".card").css("fontFamily","aliens");
 }); 

 $(".monsters").click(function(){

  $(".card").css("fontFamily","monsters");
 }); 

 
 $(".space").click(function(){

  $(".card").css({"fontFamily":"space"});
 }); 

 
 
 
 
 
 
 
 