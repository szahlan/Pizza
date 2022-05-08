//Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculatePrice = function() {
  let price;
  if (this.size === "Small") {
    price = 8;
  } else if (this.size === "Medium") {
      price = 10;
  } else if (this.size === "Large") {
      price = 12;
  }
  price += this.toppings.length;
  return "$" + price;
};

// User Interface Logic

let customPizza = new Pizza([], "");

function checkToppingValue(toppingName) {
  if ($('input[type=checkbox][name=toppingName]:checked').val() != undefined) {
    customPizza.toppings.push($("input[type=checkbox][name=toppingName]:checked").val());
  }
}

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    customPizza.size = $("input:radio[name=size]:checked").val();

    checkToppingValue("pepperoni");
    checkToppingValue("italian-sausage");
    checkToppingValue("bbq-chicken");
    checkToppingValue("mushroom");
    checkToppingValue("green-peppers");
    checkToppingValue("black-olives");
    checkToppingValue("onions");
    checkToppingValue("diced-tomatoes");
    const pizzaPrice = customPizza.calculatePrice();
    $("#pizzaPrice").text(pizzaPrice);
    $("#price").show();

  })
})
