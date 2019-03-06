const food = [`chocolate`, `chocolates`, `chocolate bar`, `chocolate bars`, `box of chocolates`, `boxes of chocolates`, `boxes of chocolate`];
const medicine = [`packet of headache pills`, `packets of headache pills`, `pills`, `headache pills`, `pill`];
const book = [`book`, `books`];
const express = require(`express`);
const controller =  function (items,res) {
  if (items[0].length == 0) {
    res.render(`index.html`);
  } else if((items) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }) {
    items = JSON.parse(items);
    let finalReply = `${items.name} :\n`;
    let tax = 0;
    let total = 0;
    for(let i = 0; i < items.items.length; i++) {
      let item = items.items[i];
      let finalPrice = item.quantity * item.price;
      let salesTax = 0;
      let reply = `${item.quantity}`;
      if(item.imported == true) {
        salesTax = salesTax + (finalPrice * 0.05);
        reply = `${reply}  imported `; 
      }
      if(!(item.category == `food` || item.category == `medical` || item.category == `books`)) {
        salesTax = salesTax + (finalPrice * 0.1);
      }
      finalPrice = (finalPrice + salesTax).toFixed(2);
      total = Number(total) + Number(finalPrice);
      tax = (Number(tax) + Number(salesTax)).toFixed(2);
      reply = `${reply} ${item.name}: ${finalPrice} \n`;
      finalReply = finalReply + reply;
    }
    finalReply = `${finalReply}Sales Taxes: ${tax} \nTotal: ${total}\n`;
    res.write(finalReply);
    res.end();
  } else {
    calcPrice(items, 0, 0, 0, res);
  }
}

function calcPrice(items, index, tax, total, res) {
  if(items[index] != undefined) {
    let item = items[index];
    let price = Number(item.split(/ at /)[1]);
    let quantity = Number(item.split(` `)[0]);
    let product = item.slice(1, -8);
    let imported = product.includes(`imported`);
    product = product.replace(/imported /g, ``);
    product = product.trim();
    let isFood = (product) => {return food.includes(product);};
    let isMedicine = (product) => {return medicine.includes(product);};
    let isBook = (product) => {return book.includes(product);};
    let finalPrice = quantity * price;
    let salesTax = 0;
    if(imported) {
      salesTax = salesTax + (finalPrice * 0.05);
    }
    if(!(isBook || isMedicine || isFood)) {
      salesTax = salesTax + (finalPrice * 0.1);
    }
    finalPrice = (finalPrice + salesTax).toFixed(2);
    item = item.replace(/ at /,`: `);
    item = item.replace(price,finalPrice);
    res.write(`${item}\n`);
    calcPrice(items, index + 1, tax + salesTax, total + Number(finalPrice), res);
  } else {
    tax = Number(tax).toFixed(2);
    res.write(`Sales Taxes: ${tax}\nTotal: ${total.toFixed(2)}\n`);
    res.end();
  }
}

module.exports = controller;
