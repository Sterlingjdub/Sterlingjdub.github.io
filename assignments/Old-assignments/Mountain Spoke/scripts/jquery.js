$(function(){
   $('.hide > li').click( function(){
        $(this).children("ul").slideToggle(200);
   });
});