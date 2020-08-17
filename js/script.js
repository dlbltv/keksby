$(document).ready(function () {
  $(".section-header-top_burger").click(function (event) {
    $(".section-header-top_burger,.section-header-top_menunav").toggleClass(
      "active"
    );
    $("body").toggleClass("lock");
  });
});

$(".section-header-top_burger").click(function (event) {
  $(".section-header-top_burger,.section-header-top_menunav").removeClass(
    "active"
  );
  $("body").removeClass("lock");
});
