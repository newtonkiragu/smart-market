<<<<<<< HEAD
// $("button#btnkales").submit(function() {
//   event.preventDefault();
//
//   var qtykales =
//     $("input#kales").val();
//   $("ul.output").append("<li>" + qtykales + "</li>")
// });
$(document).ready(function() {
  $("form#newton").submit(function(event) {
    event.preventDefault();
      
    var qtykales =
      $("input#kales").val();
//      alert (qtykales);
      console.log(qtykales);
    $("ul.output").append("<li>" + qtykales + "</li>")

  });
});
=======

>>>>>>> origin/dailyspecials
