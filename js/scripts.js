var grandTotal = 0;
var grossTotal = 0;



$(document).ready(function() {


  // IDEA: Kales
  $("form#kaleForm").submit(function(event) {
    event.preventDefault();

    var kaleQuantity = parseInt($("input#kale").val());
    var kalePrice = 700;
    var kaleTotal = kaleQuantity * kalePrice;
    grossTotal += kaleTotal;

    $("ul.output").append('<li><h4>ITEM: Kales</h4><ul><li><h4>QUANTITY: ' +
      kaleQuantity + ' Kg</h4></li><li><h4>PRICE: Ksh' + kalePrice +
      '</h4></li><li><h4>TOTAL: Ksh' + kaleTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);

  });

  // IDEA: onions
  $("form#onionForm").submit(function(event) {
    event.preventDefault();
    var onionQuantity = parseInt($("input#onion").val());
    var onionPrice = 700;
    var onionTotal = onionQuantity * onionPrice;
    grossTotal += onionTotal;
    $("ul.output").append('<li><h4>ITEM: Onions</h4><ul><li><h4>QUANTITY: ' +
      onionQuantity + ' Kg</h4></li><li><h4>PRICE: Ksh' + onionPrice +
      '</h4></li><li><h4>TOTAL: Ksh' + onionTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });
  // IDEA: tomatoes
  $("form#tomatoeForm").submit(function(event) {
    event.preventDefault();
    var tomatoeQuantity = parseInt($("input#tomatoe").val());
    var tomatoePrice = 900;
    var tomatoeTotal = tomatoeQuantity * tomatoePrice;
    grossTotal += tomatoeTotal;
    $("ul.output").append('<li><h4>ITEM: Tomatoe</h4><ul><li><h4>QUANTITY: ' +
      tomatoeQuantity + ' Kg</h4></li><li><h4>PRICE: Ksh' + tomatoePrice +
      '</h4></li><li><h4>TOTAL: Ksh' + tomatoeTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: potatoes
  $("form#potatoeForm").submit(function(event) {
    event.preventDefault();
    var potatoeQuantity = parseInt($("input#potatoe").val());
    var potatoePrice = 600;
    var potatoeTotal = potatoeQuantity * potatoePrice;
    grossTotal += potatoeTotal;
    $("ul.output").append('<li><h4>ITEM: Potatoe</h4><ul><li><h4>QUANTITY: ' +
      potatoeQuantity + ' Kg</h4></li><li><h4>PRICE: Ksh' + potatoePrice +
      '</h4></li><li><h4>TOTAL: Ksh' + potatoeTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: bananas
  $("form#bananaForm").submit(function(event) {
    event.preventDefault();
    var bananaQuantity = parseInt($("input#banana").val());
    var bananaPrice = 850;
    var bananaTotal = bananaQuantity * bananaPrice;
    grossTotal += bananaTotal;
    $("ul.output").append('<li><h4>ITEM: Banana</h4><ul><li><h4>QUANTITY: ' +
      bananaQuantity + ' Kg</h4></li><li><h4>PRICE: Ksh' + bananaPrice +
      '</h4></li><li><h4>TOTAL: Ksh' + bananaTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: mangoes
  $("form#mangoeForm").submit(function(event) {
    event.preventDefault();
    var mangoeQuantity = parseInt($("input#mangoe").val());
    var mangoePrice = 690;
    var mangoeTotal = mangoeQuantity * mangoePrice;
    grossTotal += mangoeTotal;
    $("ul.output").append('<li><h4>ITEM: Mangoe</h4><ul><li><h4>QUANTITY: ' +
      mangoeQuantity + ' Kg</h4></li><li><h4>PRICE: Ksh' + mangoePrice +
      '</h4></li><li><h4>TOTAL: Ksh' + mangoeTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: apples
  $("form#appleForm").submit(function(event) {
    event.preventDefault();
    var appleQuantity = parseInt($("input#apple").val());
    var applePrice = 1300;
    var appleTotal = appleQuantity * applePrice;
    grossTotal += appleTotal;
    $("ul.output").append('<li><h4>ITEM: Apple</h4><ul><li><h4>QUANTITY: ' +
      appleQuantity + ' Kg</h4></li><li><h4>PRICE: Ksh' + applePrice +
      '</h4></li><li><h4>TOTAL: Ksh' + appleTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: oranges
  $("form#orangeForm").submit(function(event) {
    event.preventDefault();
    var orangeQuantity = parseInt($("input#orange").val());
    var orangePrice = 750;
    var orangeTotal = orangeQuantity * orangePrice;
    grossTotal += orangeTotal;
    $("ul.output").append('<li><h4>ITEM: Orange</h4><ul><li><h4>QUANTITY: ' +
      orangeQuantity + ' Kg</h4></li><li><h4>PRICE: Ksh' + orangePrice +
      '</h4></li><li><h4>TOTAL: Ksh' + orangeTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: beef
  $("form#beefForm").submit(function(event) {
    event.preventDefault();
    var beefQuantity = parseInt($("input#beef").val());
    var beefPrice = 400;
    var beefTotal = beefQuantity * beefPrice;
    grossTotal += beefTotal;
    $("ul.output").append('<li><h4>ITEM: Beef</h4><ul><li><h4>QUANTITY: ' +
      beefQuantity + ' Kg</h4></li><li><h4>PRICE: Ksh' + beefPrice +
      '</h4></li><li><h4>TOTAL: Ksh' + beefTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: chicken
  $("form#chickenForm").submit(function(event) {
    event.preventDefault();
    var chickenQuantity = parseInt($("input#chicken").val());
    var chickenPrice = 600;
    var chickenTotal = chickenQuantity * chickenPrice;
    grossTotal += chickenTotal;
    $("ul.output").append('<li><h4>ITEM: Chicken</h4><ul><li><h4>QUANTITY: ' +
      chickenQuantity + ' Kg</h4></li><li><h4>PRICE: Ksh' + chickenPrice +
      '</h4></li><li><h4>TOTAL: Ksh' + chickenTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: fish
  $("form#fishForm").submit(function(event) {
    event.preventDefault();
    var fishQuantity = parseInt($("input#fish").val());
    var fishPrice = 600;
    var fishTotal = fishQuantity * fishPrice;
    grossTotal += fishTotal;
    $("ul.output").append('<li><h4>ITEM: Fish</h4><ul><li><h4>QUANTITY: ' +
      fishQuantity + ' Kg</h4></li><li><h4>PRICE: Ksh' + fishPrice +
      '</h4></li><li><h4>TOTAL: Ksh' + fishTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: minced meat
  $("form#minceForm").submit(function(event) {
    event.preventDefault();
    var minceQuantity = parseInt($("input#mince").val());
    var mincePrice = 600;
    var minceTotal = minceQuantity * mincePrice;
    grossTotal += minceTotal;
    $("ul.output").append('<li><h4>ITEM: Minced Meat</h4><ul><li><h4>QUANTITY: ' +
      minceQuantity + ' Kg</h4></li><li><h4>PRICE: Ksh' + mincePrice +
      '</h4></li><li><h4>TOTAL: Ksh' + minceTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: passion
  $("form#passionjuiceForm").submit(function(event) {
    event.preventDefault();
    var passionjuiceQuantity = parseInt($("input#passionjuice").val());
    var passionjuicePrice = 600;
    var passionJuiceTotal = passionjuiceQuantity * passionjuicePrice;
    grossTotal += passionJuiceTotal;
    $("ul.output").append('<li><h4>ITEM: Passion Juice</h4><ul><li><h4>QUANTITY: ' +
      passionjuiceQuantity + ' Ltr(s)</h4></li><li><h4>PRICE: Ksh' + passionjuicePrice +
      '</h4></li><li><h4>TOTAL: Ksh' + passionJuiceTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: mango
  $("form#mangojuiceForm").submit(function(event) {
    event.preventDefault();
    var mangojuiceQuantity = parseInt($("input#mangojuice").val());
    var mangojuice = 600;
    var mangoJuiceTotal = mangojuiceQuantity * mangojuice;
    grossTotal += mangoJuiceTotal;
    $("ul.output").append('<li><h4>ITEM: Mango Juice</h4><ul><li><h4>QUANTITY: ' +
      mangojuiceQuantity + ' Ltr(s)</h4></li><li><h4>PRICE: Ksh' + mangojuice +
      '</h4></li><li><h4>TOTAL: Ksh' + mangoJuiceTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: orange
  $("form#orangejuiceForm").submit(function(event) {
    event.preventDefault();
    var orangejuiceQuantity = parseInt($("input#orangejuice").val());
    var orangejuicePrice = 600;
    var orangeJuiceTotal = orangejuiceQuantity * orangejuicePrice;
    grossTotal += orangeJuiceTotal;
    $("ul.output").append('<li><h4>ITEM: Orange Juice</h4><ul><li><h4>QUANTITY: ' +
      orangejuiceQuantity + ' Ltr(s)</h4></li><li><h4>PRICE: Ksh' + orangejuicePrice +
      '</h4></li><li><h4>TOTAL: Ksh' + orangeJuiceTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  // IDEA: smoothie
  $("form#smoothieForm").submit(function(event) {
    event.preventDefault();
    var smoothieQuantity = parseInt($("input#smoothie").val());
    var smoothiePrice = 600;
    var smoothieTotal = smoothieQuantity * smoothiePrice;
    grossTotal += smoothieTotal;
    $("ul.output").append('<li><h4>ITEM: Smoothie</h4><ul><li><h4>QUANTITY: ' +
      smoothieQuantity + ' Ltr(s)</h4></li><li><h4>PRICE: Ksh' + smoothiePrice +
      '</h4></li><li><h4>TOTAL: Ksh' + smoothieTotal + '</h4></li></ul></li>');
    $('.gross').text(grossTotal);
  });

  $("ul.gross").append('<li><h4>GRAND TOTAL: Ksh ' + grandTotal + '</h4></li></ul></li>');

});
