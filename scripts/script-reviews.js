/* BLOCK 7 - REVIEWS */
$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
    autoplay: true,
    autoplaySpeed: 5000,
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
  });
});
