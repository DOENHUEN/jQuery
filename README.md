# jQuery

###methods: content
.html()
.text()
.val()
.append() hangt het er vanachter aan
.prepend() hangt het er vanvoor aan vast
.after() plaatst het er achter
.before() plaatst het er voor
.remove()
.empty() element laat hij staan en inhoud verwijderd hij


###methods: manipuleren CSS
.addClass()
.removeClass()
.toggleClass()
.css()
.width()
.height()
.innerWidth()
.innerHeight()
.outerWidth()
.outerHeight()


###DOM traversen
.parent()
.parents()
.children()
.find()
.siblings()
.next()
.prev()
.first()
.last()
.eq()  de hoeveelste
.filter()
.not()


###evenementen
.click()
.dblclick()
.focus()
.hover()
.keypress()
.mouseover()
.scroll()
.resize()
.event.pageX   geeft je de positie van de muis weer op je scherm


###effets
.animate()
.slideIn()
.slideOut()
.delay()
.fadeIn()/fadeOut()
.hide()/.show()
.toggle()


tijd in JS altijd in miliseconde


Opzoeken op w3c schools en sololearn jQuery
Plugins zoeken zoals van lightbox


####belangrijk!!
https://www.sitepoint.com/types-document-ready/

$(document).ready(function() {
  // hier alle jQuery dingen
  je mag functies hierbuiten bepalen, maar moet ze wel hierin aanroepen!
});

korter:
$(function(){

  });

of methode zodat het geen conflict geeft met andere libraries
jQuery(document).ready(function($){
  // hier jQuery
});
