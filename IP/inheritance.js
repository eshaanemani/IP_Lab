// Animal constructor function
function Animal(name, species) {
  this.name = name;
  this.species = species;

  // Method to make the animal speak
  this.speak = function() {
    console.log(`${this.name} the ${this.species} speaks`);
  };
}

// Dog constructor function, inheriting from Animal
function Dog(name, breed) {
  Animal.call(this, name, "Dog");
  this.breed = breed;

  // Method to make the dog bark
  this.bark = function() {
    console.log(`${this.name} the ${this.breed} barks`);
  };
}

// Cat constructor function, inheriting from Animal
function Cat(name, breed) {
  Animal.call(this, name, "Cat");
  this.breed = breed;

  // Method to make the cat meow
  this.meow = function() {
    console.log(`${this.name} the ${this.breed} meows`);
  };
}

// Create instances of animals
const fluffy = new Dog("Fluffy", "Golden Retriever");
const whiskers = new Cat("Whiskers", "Siamese");

// Use methods
fluffy.speak();   // Output: Fluffy the Dog speaks
fluffy.bark();    // Output: Fluffy the Golden Retriever barks
whiskers.speak(); // Output: Whiskers the Cat speaks
whiskers.meow();  // Output: Whiskers the Siamese meows
