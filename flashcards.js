$(document).ready(function(){
  $("p").hide();
  $(".flip").click(function(){
    $(this).closest(".card").find(".card-text").toggle();
  })
})

$(document).ready(function(){
  $(".delete").click(function(){
    $(this).closest(".col").remove();
  })
});

$(document).ready(function(){
  $('.modal').modal();
});

