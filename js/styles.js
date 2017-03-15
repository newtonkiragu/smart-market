$(document).ready(function() {
  $("form#tohideform").submit(function(event) {
    var input = $("#userinfo").val();
    var greeting = function() {
      alert("Thank you " + input.toUpperCase() + " for logging in. Hope you enjoy.");
      $(".tryal").append('<li>' + input + '</li>');
      ("#tohideform").hide();
      ("#tryal").show();
    };
    (".btn").click(greeting());
  });
});
