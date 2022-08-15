$(function () {
  var firstmenu = $(".bottom_menu>li"),
    header_bottom = $("#header_bottom"),
    header_bottom_Height = header_bottom.height();

  firstmenu.mouseenter(function () {
    firstmenu.find("ul").hide();
    $(this).find("ul").show();
    var submenuHeight = $(this).find("ul").height();
    header_bottom
      .stop()
      .animate({ height: submenuHeight + header_bottom_Height }, 500);
  });
  firstmenu.mouseleave(function () {
    header_bottom.stop().animate({ height: header_bottom_Height });
    $(this).find("ul").hide();
  });
});
