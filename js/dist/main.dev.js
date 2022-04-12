"use strict";

$(function () {
  $(".our-work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");

    if ($(this).data('class') === "all") {
      $(".our-work img").css("opacity", 1);
    } else {
      $(".our-work img").css("opacity", ".2");
      $($(this).data('class')).css("opacity", 1);
    }
  });
});