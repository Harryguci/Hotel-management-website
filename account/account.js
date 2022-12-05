import Box_change from "./box-change.js";
const autoScroll = function () {
  var position = $("#heading-page").position();
  var hd_top = position.top;
  setTimeout(() => $(window).scrollTop(hd_top - 50), 500);
};

$(document).ready(function () {
  autoScroll();
  $(".options__item__name").click(function () {
    $(this).next().toggle("slow");
  });

  // Hover avatar
  $(".thumbnail img").on("mouseover mouseleave", function (e) {
    if (e.type == "mouseover") {
      $(this).next().show("slow");
    } else {
      $(this).next().hide("slow");
    }
  });

  $(".box-change .close-btn").click(function () {
    console.log("close clicked");
    $(".box-change").hide();
    $(".mask-box-order").remove();
  });

  $('.room-order button[type="submit"]').click(function () {
    var order_item = $(this).parent().parent();
    var roomName = order_item.find(".room-name").text();
    var clientName = order_item.find(".client-name").attr("val");
    var checkin = order_item.find(".checkin").attr("val");
    var checkout = order_item.find(".checkout").attr("val");
    const currBox = new Box_change(roomName, clientName, checkin, checkout);

    $("main .box-change .box-change-content").html(currBox.htmlScope());
    $("main .box-change").show(300);
    $("body").append(`
        <div class="mask-box-order"></div>
    `);
    console.log("successfully");
  });
});
