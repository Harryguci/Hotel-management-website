// import autoScroll from "../javascript/autoScroll";

$(document).ready(function () {
  $(".frame-signup").fadeOut();

  var position = $("#heading-page").position();
  var hd_top = position.top;
  setTimeout(() => $(window).scrollTop(hd_top - 50), 500);

  $(".frame .button-change-1").click(function () {
    if ($(this).text().toLowerCase() == "login") {
      $(".frame-signup").fadeOut("swing", function () {
        $(".frame-login").fadeIn();
      });
    } else {
      $(".frame-login").fadeOut("swing", function () {
        $(".frame-signup").fadeIn();
      });
    }
  });

  // check if validate Email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePasswords = function validatePassword(pw) {
    return (
      // /[A-Z]/.test(pw) &&
      // /[a-z]/.test(pw) &&
      // /[0-9]/.test(pw) &&
      // /[^A-Za-z0-9]/.test(pw) &&
      pw.length > 4
    );
  };

  const FrameCurr = () => {
    console.log($(".frame-login").css("display"));
    if ($(".frame-login").css("display") == "none") {
      return ".frame-signup";
    } else return ".frame-login";
  };

  $(`input[type="email"]`).bind("keyup", function (e) {

    const value = $(this).val();
    const curr = FrameCurr();

    console.log(curr);

    if (validateEmail(value)) {
      $(curr + " input[type='email']+.help-message").html(
        '<small class="mx-3 help-message text-primary">Email is validate</small>'
      );
    } else {
      $(curr + " input[type='email']+.help-message").html(
        '<small class="mx-3 help-message text-danger">Email is wrong format</small>'
      );
    }
  });
  $(`input[type="password"]`).bind('keyup', function(e) {
    const value = $(this).val();
    const curr = FrameCurr();

    if(validatePasswords(value)) {
      $(curr + ' input[type="password"]+.help-message').html(
        '<small class="mx-3 help-message text-primary">Password is validate</small>'
      );
    } else {
      $(curr + ' input[type="password"]+.help-message').html(
        '<small class="mx-3 help-message text-danger">Password is wrong format</small>'
      );
    }
    
  });
  // ADMIN
  var CheckConfirmAdmin = function () {
    var is = false;
    $("input:checked").each(function () {
      if ($(this).attr("id").indexOf("confirm-admin") > -1) is = true;
    });
    return is;
  };

  $('input[type="checkbox"]').on("click", function () {
    console.log("checked");

    if (CheckConfirmAdmin()) {
      $(".frame-login .submit-btn").attr("href", "../admin/admin.html");
    } else {
      console.log("Not found");
    }
  });
});
