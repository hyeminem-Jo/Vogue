$(document).ready(function () {
  $(".enb .ham").click(function () {
    $("#popup").remove();
    $("header").before('<div id="popup"></div>');
    $("#popup")
      .hide()
      .slideDown(600, "linear", function () {
        $(this).fadeOut(500, 0.9);
      });

    $("header .logo").clone().appendTo("#popup");
    $("#popup .logo").addClass("changebg").css({
      position: "relative",
      index: "25",
    });
    $("header .enb .ham")
      .clone()
      .appendTo("#popup")
      .wrap('<ul class="ham-wrap"></ul>');
    $("#popup .ham").click(function () {
      $("#popup").animate(
        {
          opacity: "0",
        },
        1000,
        function () {}
      );
    });
  });
});
