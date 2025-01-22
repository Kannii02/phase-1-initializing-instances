// Define Breakfast class
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Define Lunch class
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Define Dinner class (with private field #dessert)
  class Dinner {
    #dessert;
    
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert; 
    }
  
    // Method to access the private dessert property
    getDessert() {
      return this.#dessert;
    }
  }
  
  // Exporting the classes for testing
  module.exports = { Breakfast, Lunch, Dinner };
  
  // Test the classes
  if (require.main === module) {
    // Creating instances
    let myBreakfast = new Breakfast("Pancakes", "Coffee");
    let myLunch = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
    let myDinner = new Dinner("Greek Salad", "Minestrone", "Steak", "Cheesecake");
  
    // Logging results
    console.log("Breakfast:", myBreakfast);
    console.log("Lunch:", myLunch);
    console.log("Dinner:", myDinner);
    console.log("Dinner Dessert (Private):", myDinner.getDessert()); 
  }
  