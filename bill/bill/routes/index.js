var express = require('express');
var router = express.Router();
food = ['chocolate', 'chocolates', 'chocolate bar', 'chocolate bars', 'box of chocolates', 'boxes of chocolates', 'boxes of chocolate'];
medicine = ['packet of headache pills', 'packets of headache pills', 'pills', 'headache pills', 'pill'];
book = ['book', 'books'];
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.post('/', function(req, res, next) {
  var items = req.body.items;
  if(IsJsonString(items)) {
    items = JSON.parse(items);
    var finalReply = items.name +':\n';
    for(var i = 0, tax = 0, total = 0; i < items.items.length; i++) {
      var item = items.items[i];
      var finalPrice = item.quantity * item.price;
      var salesTax = 0;
      var reply = item.quantity + ' ';
      if(item.imported == true) {
        salesTax = salesTax + (finalPrice * 0.05);
        reply = reply + 'imported '; 
      }
      if(!(item.category == 'food' || item.category == 'medical' || item.category == 'books')) {
        salesTax = salesTax + (finalPrice * 0.1);
      }
      finalPrice = (finalPrice + salesTax).toFixed(2);
      total = Number(total) + Number(finalPrice);
      tax = (Number(tax) + Number(salesTax)).toFixed(2);
      reply = reply + item.name + ': ' + finalPrice + '\n';
      finalReply = finalReply + reply;
    }
    finalReply = finalReply + 'Sales Taxes: ' + tax + '\n' + 'Total: ' + total + '\n';
    res.write(finalReply);
    res.end();
  } else {
    calcPrice(items, 0, 0, 0, res);
  }
});

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function calcPrice(items, index, tax, total, res) {
  if(items[index] != undefined) {
    var item = items[index];
    var price = Number(item.split(/ at /)[1]);
    var quantity = Number(item.split(" ")[0]);
    var product = item.slice(1, -8);
    var imported = product.includes("imported");
    product = product.replace(/imported /g, '');
    product = product.trim();
    var isFood = checkFood(product);
    var isMedicine = checkMedicine(product);
    var isBook = checkBook(product);
    var finalPrice = quantity * price;
    var salesTax = 0;
    if(imported) {
      salesTax = salesTax + (finalPrice * 0.05);
    }
    if(!(isBook || isMedicine || isFood)) {
      salesTax = salesTax + (finalPrice * 0.1);
    }
    finalPrice = (finalPrice + salesTax).toFixed(2);
    item = item.replace(/ at /,": ");
    item = item.replace(price,finalPrice);
    res.write(item+"\n");
    calcPrice(items, index + 1, tax + salesTax, total + Number(finalPrice), res);
  } else {
    tax = Number(tax).toFixed(2);
    res.write("Sales Taxes: " + tax + "\nTotal: " + total + "\n");
    res.end();
  }
}

function checkFood(item) {
  return food.includes(item);
}

function checkMedicine(item) {
  return medicine.includes(item);
}

function checkBook(item) {
  return book.includes(item);
}

module.exports = router;
