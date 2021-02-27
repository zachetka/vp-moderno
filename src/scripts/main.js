$(function () {
  var containerEl = document.querySelector('.products__cards');

  var mixer = mixitup(containerEl, {
    animation: {
      effects: 'fade scale(0.5)',
    },
  });
});
