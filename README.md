# Pizza
By **Sana Zahlan** 

## Technologies Used 
* HTML 
* CSS
* Bootstrap 
* JavaScript 
* jQuery

## Description 
This application asks the user to choose the size of their pizza and add their favorite toppings, then calculates the price based on the selections and displays it to the user.

## Setup & installation
You can clone this repository, access the project folder on your computer and finally open the index.html file in your browser.

## Known Bugs
The toppings selected aren't successfully added to the toppings array, and therefore aren't included in the price.

## License 
MIT 

Copyright (c) 2022 Sana Zahlan

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
