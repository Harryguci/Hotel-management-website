$(document).ready(function () {
  let vh50 = $(window).height() / 2;
  $(this).scroll(function () {
    let heightScroll = $(this).scrollTop();

    if (heightScroll > vh50) {
      if ($(".navbar").attr("class").indexOf("nav-white") == -1) {
        $(".navbar").addClass("nav-white");
        $(":root").css({
            "--text-color-1": "black",
          });
      }
    } else if ($(".navbar").attr("class").indexOf("nav-white") !== -1) {
      $(".navbar").removeClass("nav-white");
      $(":root").css({
        "--text-color-1": "white",
      });
      $(".navbar").css({
        top: "0",
      });
    }
  });
});
