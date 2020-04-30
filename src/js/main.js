$(function () {

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $(".js-range-slider").ionRangeSlider({
    type: 'double',
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: '$'
  });
  //start развернуть items
  $('.icon-th-list').on('click', function () {
    $('.product__item').addClass('list');
    //end развернуть items

    //start добавить/убрать зеленый цвет при клике на кнопки
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
    //end добавить/убрать зеленый цвет при клике на кнопки
  });
  //start свернуть items
  $('.icon-th-large').on('click', function () {
    $('.product__item').removeClass('list');
    //end свернуть items

    //start добавить/убрать зеленый цвет при клике на кнопки
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
    //end добавить/убрать зеленый цвет при клике на кнопки
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');
  });

  $(window).on("load", function () {
    if ($('.products__inner-box').length) {
      var mixer = mixitup('.products__inner-box');
    }
  });

});