$(".childquestions1").hide();
  
$( ".addchild-button" ).on("click",function() {
  $(".childquestions1").show();
});  

$(".upload-addnew").on('click', function(){
  var newel = $('.uploadcomponent:last').clone();
  $(newel).insertAfter(".uploadcomponent:last");
});
