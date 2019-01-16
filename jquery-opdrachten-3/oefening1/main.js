

$(document).ready(function() {
  x=0;
  $("#button").click(function(){
    x +=1 ;
    $("#uitkomst").attr("value",x);
  })
});
