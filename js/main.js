$(document).ready(function() {
  $(".hamburger").on("click", function(event) {
    $(".hide-menu").toggle();
    $(".dropdown").slideToggle();
  });
});
