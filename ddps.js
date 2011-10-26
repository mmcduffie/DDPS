$(document).ready(function() {
  $('.object_frame img').click(function () { 
    $(this).parent().parent().fadeOut('fast'); 
  });
});