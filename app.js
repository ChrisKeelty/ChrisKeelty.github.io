$(document).ready(function() {
  $('.round').click(function() {
    console.log('clicked');
    $('html,body').animate({
        scrollTop: $('.services').offset().top
      },
      'slow');
  });
});
