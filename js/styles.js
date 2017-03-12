$(document).ready(function() {
  $("form#tohideform").submit(function(event) {
    var input = $("#userinfo").val();
    var greeting = function() {
      alert("Thank you " + input + " for logging in. Hope you enjoy.")
    };
    var hide = function() {
      ("#tohideform").hide();
    };
    var show = function() {
      ("#userinfo").show();
    };
    (".btn").click(greeting());
  });
});
