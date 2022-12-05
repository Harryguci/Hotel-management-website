$(document).ready(function () {
  var pos_heading = $("#heading-page").position();
  var hd_top = pos_heading.top;

  setTimeout(() => $(window).scrollTop(hd_top - 100), 500);

  $("#search-bar").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".room-item-container").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $("#search-bar-room-history").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".room-history-table tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $("#search-bar-statistical").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    if (value.length <= 0) {
      $(".statistical-table tbody tr").toggle(true);
    } else {
      $(".statistical-table tbody tr").toggle(false);
      $(`.statistical-table tbody tr:nth-of-type(${value})`).toggle(true);
    }
  });
});
