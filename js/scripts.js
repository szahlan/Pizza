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

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    customPizza.size = $("input:radio[name=size]:checked").val();

    customPizza.toppings.push($("input:checkbox[name=pepperoni]:checked").val())
    customPizza.toppings.push($("input:checkbox[name=italian-sausage]:checked").val())
    customPizza.toppings.push($("input:checkbox[name=bbq-chicken]:checked").val())
    customPizza.toppings.push($("input:checkbox[name=mushrooms]:checked").val())
    customPizza.toppings.push($("input:checkbox[name=green-peppers]:checked").val())
    customPizza.toppings.push($("input:checkbox[name=black-olives]:checked").val())
    customPizza.toppings.push($("input:checkbox[name=onions]:checked").val())
    customPizza.toppings.push($("input:checkbox[name=diced-tomatoes]:checked").val())
    
  })
})
