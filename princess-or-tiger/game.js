window.score = 0;
$('.tiger').each(function(x, elem) {

  $(elem).click(function() {
    if($(elem).hasClass("clicked")) {
      return;
    }
     $(elem).addClass("clicked");
     window.score--;
     $('#score').text(window.score);
     $('.feedback').text("נמר");
  });
});

$('.princess').each(function(x, elem) {

  $(elem).click(function(){
    if($(elem).hasClass("clicked")) {
      return;
    }
     $(elem).addClass("clicked");
     window.score++;
     $('#score').text(window.score);
     $('.feedback').text("נסיכה");
   })
});
