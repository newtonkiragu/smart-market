var kale = $("#kale").val();
$(document).ready(function() {
  $("button#buyonion").click(function(event) {
    event.preventDefault();

    $(".quantity").text(kale);
  });
});
