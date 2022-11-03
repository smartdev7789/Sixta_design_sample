$(document).ready(function () {
  $("#dropdown-button").click(function () {
    let dropState = $("#dropdown-menu").css("display");
    if (dropState == "block") {
      $("#dropdown-menu").css("display", "none");
      $(this).attr("src", "images/menu.png");
    } else {
      $("#dropdown-menu").css("display", "block");
      $(this).attr("src", "images/close.png");
    }
  });
});
