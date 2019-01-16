// Write your solution here

$(document).ready(function() {
  $("#name, #first_name").css({border:"1px solid red"})
  $("#name").focus(function(){
    $("#name, #first_name").css({border:"1px solid green"})
  })
})
