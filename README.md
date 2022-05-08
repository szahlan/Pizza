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
Code: const customPizza = new Pizza([], "Medium");
      customPizza.calculatePrice();
Expected Output: Price = "$10"

Test: "It should retur '$12' if the size is large"
Code: const customPizza = new Pizza([], "Large");
      customPizza.calculatePrice();
Expected Output: Price = "$12"

Test: "It should add $1 to the price for each topping."
Code: const customPizza = new Pizza(["Pepperoni", "Mushrooms"], "Large");
      customPizza.calculatePrice();
Expected Output: Price = "$14"