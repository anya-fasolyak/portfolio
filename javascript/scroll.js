

$(window).scroll(function(){
    $(".scroll").css("opacity", 1 - $(window).scrollTop() / 250); 
  //250 is fade pixels
  });