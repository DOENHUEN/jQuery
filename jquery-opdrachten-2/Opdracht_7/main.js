$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("#content").dblclick(function(){
      $("#content").css({"font-size":"120%"})
    })

    /* On click: Decrease the font size (80%) */
    $("#content").click(function(){
      $("#content").css({"font-size":"80%"})
    })

    /* On click: Bold or normalize the green words */
    var type = "normal"
    $(".green").click(function(){
      if (type == "normal"){
        type = "bold";
      } else {
        type = "normal";
      }
      $(".green").css({"font-weight":type})

    })

    /* On click: Bold or normalize the green words */


    /* On click: Replace the logo with another image */
    $("img").click(function(){
      $("img").attr("src","images/koala.jpg")
    })

    /* On hover: Display the URL of links in a tooltip when hovering over links */

    // TODO: in orde brengen
    /*dit werkt niet
    $("a").hover(function(){
      $( "a" ).tooltip({
        content:"hallo"
      })
    })
    */
    $("a").hover(function(){
      alert($("a").attr("href"));
    });

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    var start = 0;
    $("h2").click(function(){
      if (start == 0){
        $("h2").first().prepend("Chapter 1: ");
        $("h2").eq(1).prepend("Chapter 2: ")
      };
      start ++;
    });
});
