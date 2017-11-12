$(document).ready(function() {
  $('.round').click(function() {
    console.log('clicked');
    $('html,body').animate({
        scrollTop: $('.services').offset().top
      },
      'slow');
  });

  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
});
