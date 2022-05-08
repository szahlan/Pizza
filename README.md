Describe: Pizza()

Test: "It should return a pizza object with topping and size properties."
Code: const customPizza = new Pizza(["Pepperoni", "Mushrooms", "Onions"], "Medium");
Expected Output: Pizza {toppings: ["Pepperoni", "Musshrooms", "Onions"], size: "Medium"}

Describe: calculatePrice()

Test: "It should return '$8' if the size is small"
Code: const customPizza = new Pizza([], "Small");
customPizza.calculatePrice();
Expected Output: Price = "$8"

Test: "It should retur '$10' if the size is medium"
code: const customPizza = new Pizza([], "Medium");
customPizza.calculatePrice();
Expected Output: Price = "$10"


