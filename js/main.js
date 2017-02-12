var count = 0;
var clickz = 0;
var pair = [];
var match = 0;
var vault = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//var content = ["a", "a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h"];
var audio = new Audio('snd/prox.wav');
var audio2 = new Audio('snd/beverly_computer.wav');


function createBoard() {

  var pairs = 8;
  var content = [];

  //this function creates the content for the cards
  function createCards() {
    console.log("creating cards");
    for (i = 0; i < pairs; i++) {
    var position = Math.floor(Math.random() * vault.length);
    var vaultLetter = vault.splice(position, 1);
    content.push(vaultLetter);
    content.push(vaultLetter);
    console.log(content.toString());
    }


  }

  createCards();


  //this function adds the cards to the board
  function addCards() {

     for (i = 0; i < pairs*2; i++) {

      var position = Math.floor(Math.random() * content.length);

      var letter = content.splice(position, 1);

      $("<div class=\"card " + letter + "\">" + letter + "</div>").appendTo(".board");

    }

  }

  addCards();


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
      if (match == pairs) {
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
  count = 0;
  clickz = 0;
  match = 0;
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

 
 
 
 
 
 
 
 