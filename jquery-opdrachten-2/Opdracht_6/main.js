// Write your solution here

$(document).ready(function() {
  $("#green").hover(function(){
    $("#text").css({color:"green"})
  });
  $("#red").hover(function(){
    $("#text").css({color:"red"})
  });
  $("#blue").hover(function(){
    $("#text").css({color:"blue"})
  });
  $("#blue, #green, #red").mouseout(function(){
    $("#text").css({color:"black"})
  });
})
