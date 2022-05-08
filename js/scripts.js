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