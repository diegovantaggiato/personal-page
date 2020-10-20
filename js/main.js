$("#soft").on('click', function(){
    $("#main").css("display", "none")
    $("#first").css('animation', '1s fadeIn')
    setTimeout(function(){
    $("#bio").css("display", "flex")
    $("#bio").css('animation', '3s fadeIn')
  },800);
})

$("#exit").on('click', function(){
  $("#bio").css("display", "none")
  setTimeout(function(){
  $("#main").css("display", "flex")
   $("#main").css('animation', '3s fadeIn')
 },800);
})

/* link header */
var a
var b
$(".text-white").on('click', function(){
 $("section").css("display", "none")
  $("section").css('animation', '1s fadeIn')
  a= $(this).text().toLowerCase();
  b= a.replace(" ", "")
  setTimeout(function(){
  $("#"+b+"").css("display", "flex")
  $("#bio").css('animation', '3s fadeIn')
},800);
  
})

/* button */
var c
var d
$(".button").on('click', function(){
  $("section").css("display", "none")
   $("section").css('animation', '1s fadeIn')
   c= $(this).text().toLowerCase();
   d= c.replace(" ", "")
   setTimeout(function(){
   $("#"+d+"").css("display", "flex")
   $("#bio").css('animation', '3s fadeIn')
 },800)

})
