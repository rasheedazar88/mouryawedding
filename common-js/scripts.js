(function ($) {
  "use strict";

  // JQUERY LIGHT BOX

  if ($.isFunction($.fn.fluidbox)) {
    $("a").fluidbox();
  }

  $('a[href="#"]').on("click", function (event) {
    return;
  });

  // COUNTDOWN TIME

  countdownTime();

  $("[data-nav-menu]").on("click", function (event) {
    var $this = $(this),
      visibleHeadArea = $this.data("nav-menu");

    $(visibleHeadArea).toggleClass("visible");
  });

  var winWidth = $(window).width();
  dropdownMenu(winWidth);

  $(window).on("resize", function () {
    dropdownMenu(winWidth);
  });

  // Circular Progress Bar

  var isAnimated = false;
})(jQuery);

function countdownTime() {
  if (isExists("#clock")) {
    $("#clock").countdown("2022/05/14", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<div class="time-sec"><span class="title">%D</span> days </div>' +
            '<div class="time-sec"><span class="title">%H</span> hours </div>' +
            '<div class="time-sec"><span class="title">%M</span> minutes </div>' +
            '<div class="time-sec"><span class="title">%S</span> seconds </div>'
        )
      );
    });
  }

  if (isExists("#clock-engagement")) {
    $("#clock-engagement").countdown("2022/01/01", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<div class="time-sec"><span class="title">%D</span> days </div>' +
            '<div class="time-sec"><span class="title">%H</span> hours </div>' +
            '<div class="time-sec"><span class="title">%M</span> minutes </div>' +
            '<div class="time-sec"><span class="title">%S</span> seconds </div>'
        )
      );
    });
  }
}

function dropdownMenu(winWidth) {
  if (winWidth > 767) {
    $(".main-menu li.drop-down")
      .on("mouseover", function () {
        var $this = $(this),
          menuAnchor = $this.children("a");

        menuAnchor.addClass("mouseover");
      })
      .on("mouseleave", function () {
        var $this = $(this),
          menuAnchor = $this.children("a");

        menuAnchor.removeClass("mouseover");
      });
  } else {
    $(".main-menu li.drop-down > a").on("click", function () {
      if ($(this).attr("href") == "#") return false;
      if ($(this).hasClass("mouseover")) {
        $(this).removeClass("mouseover");
      } else {
        $(this).addClass("mouseover");
      }
      return false;
    });
  }
}

function isExists(elem) {
  if ($(elem).length > 0) {
    return true;
  }
  return false;
}

$(document).ready(function () {
  var number = "+919788053319";

  $(".rsvp-btn").click(function (event) {
    event.preventDefault();
    var message = {
      FullName: document.querySelector("#name").value,
      ContactNo: document.getElementById("phone").value,
      Email: document.getElementById("email").value,
      NoOfGuest: document.getElementById("noofgust").value + " members",
      Event: document.getElementById("eventname").value,
    };

    var url =
      "https://api.whatsapp.com/send?phone=" +
      number +
      "&text=" +
      encodeURIComponent(
        "Dear Friend,\n\nI will be attending " +
          message.Event +
          " function with " +
          message.NoOfGuest +
          "\n" +
          ".\nBest Regards,\n\n" +
          message.FullName +
          "\n" +
          message.ContactNo +
          "\n" +
          message.Email
      );

    var link =
      "mailto:rasheedazar88@gmail.com" +
      "&subject=" +
      encodeURIComponent("Inviting you to our Wedding Ceremony") +
      "&body" +
      encodeURIComponent(message.FullName);

    if (
      message.FullName === "" ||
      message.ContactNo === "" ||
      message.Email === ""
    ) {
      alert("Cannot bo Empty");
    } else {
      window.open(url, "_blank");
    }
    // $(location).attr('href', url)
  });
});

