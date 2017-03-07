$("button#btnkales").submit(function() {
  event.preventDefault();

  var qtykales =
    $("input#kales").val();
  $("ul.output").append("<li>" + qtykales + "</li>")
});
