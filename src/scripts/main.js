$(function () {
  var containerEl = document.querySelector('.products__cards');
  var mixer = mixitup(containerEl, {
    animation: {
      effects: 'fade scale(0.5)',
    },
  });

  $('.card__rating-stars').rateYo({
    rating: 4.5,
    starWidth: '12px',
    spacing: '2px',
    normalFill: "#546e7a",
    ratedFill: "#ffa726",
    readOnly: true
  });

  $('.trends__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
  });
});
