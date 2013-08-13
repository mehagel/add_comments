$(document).ready(function(){
  $('#new_comment_button').on('click', function() {
     event.preventDefault();
    $('#form').toggle();
    $(this).hide();
  });
});



  