var kale = $("#kale").val();
$(document).ready(function() {
  $("button#buyonion").click(function(event) {
    event.preventDefault();

    $(".quantity").text(kale);
  });
});

// IDEA: code from index and contacts
$(document).ready(function() {
  $("form").submit(function(event) {
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
