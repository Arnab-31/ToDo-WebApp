$("ul").on("click", "li", function(){
  $(this).toggleClass("selected");
});

$("ul").on("click", "span", function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(1000,function(){
    $(this).remove();
  });

});

$("input").keypress(function(event){
  if(event.which===13)
  {
    var todoText=$(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText +"</li>");
  }
});

$(".plus").on("click",function(){
  $("input").slideToggle();
})
