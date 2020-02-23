/*-------form -------------*/

$('.close-link-form').click(function(event) {
  $('.form-popup').fadeOut('slow');
});

$('.form-button-popup').click(function() {
  // $('a.close').on('click', true);

  $('.form-popup').fadeIn('slow');
});

$(document).ready(function() {
  // $(selector).inputmask("99-9999999");
  $('#phone').inputmask({ mask: '+(380) 99-999-99-99' }); //specifying options
});

/*----------accordion-------------*/

$('.section5_passcar .faq_item').click(function() {
  $(this)
    .next()
    .fadeToggle();
  $(this)
    .next()
    .toggleClass('span_open');
  if (
    $(this)
      .next()
      .hasClass('span_open')
  ) {
    $(this)
      .find('img')
      .css('transform', 'rotate(180deg)');
  } else {
    $(this)
      .find('img')
      .css('transform', 'rotate(0)');
  }
});
