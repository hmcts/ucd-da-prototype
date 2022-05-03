$(".childquestions1").hide();
  
$( ".addchild-button" ).on("click",function() {
  $(".childquestions1").show();
});  

$(".upload-addnew").on('click', function(){

  // Create clone of <div class='input-form'>
  var newel = $('.uploadcomponent:last').clone();
  // Add after last <div class='input-form'>
  $(newel).insertAfter(".uploadcomponent:last");


});