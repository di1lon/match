var count = 0;
var clickz = 0;
var pair = [];
var match = 0;



//need fucntion to dynamically create content array depending on desired number of blocks

var content = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var content = ["a", "a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h"];
var contentLength = content.length;



function createBoard() {

  for (i = 0; i < contentLength; i++) {

    var position = Math.floor(Math.random() * content.length);

    var letter = content.splice(position, 1);

    $("<div class=\"card " + letter + "\">" + letter + "</div>").appendTo(".board");

  }


};

createBoard();


$(".card").click(function() {
  $(this).addClass("flipped");
  clickz++;
  $(".counter").text(clickz);
  pair.push($(this).text());
  count++;


  if (count == 2) {

    $(".card").addClass("noClick");
	
    if (pair[0] == pair[1]) {
      //alert("match");
      $("." + pair[0]).addClass("matched");
      match++;
	  $(".matches").text(match);
      $(".card").removeClass("noClick");
      if (match == contentLength / 2) {
        $(".card").addClass("winner");
	
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

//$(".counter").click($(".card").css("fontFamily":"aliens"));


$(".change").click(function(){

  $(".card").css("fontFamily","aliens");
 }); 
