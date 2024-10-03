import { createCircle, Circle, createDog, Dog } from './00-start-here-example-objects.js';

// Instances created using the factory functions
const circle1 = createCircle(5);
const dog1 = createDog("Buddy", "Golden Retriever");

console.log(circle1.getArea()); // Output: 78.53981633974483
console.log(circle1.getCircumference()); // Output: 31.41592653589793
console.log(dog1.bark()); // Output: "Buddy says woof!"

// Instances created using the classes
const circle2 = new Circle(7);
const circle3 = new Circle(13);
const circle4 = new Circle(23);
const circle5 = new Circle(69);
const dog2 = new Dog("Max", "German Shepherd");
const dog3 = new Dog("Rex", "Bull-Jack");
const dog4 = new Dog("Duke", "Mountain Cur");
const dog5 = new Dog("Daisy", "American Pit Bull Terrier");

console.log(circle2.getArea()); // Output: 153.93804002589985
console.log(circle2.getCircumference()); // Output: 43.982297150257104
console.log(circle3.getArea());
console.log(circle3.getCircumference());
console.log(circle4.getArea());
console.log(circle4.getCircumference());
console.log(circle5.getArea());
console.log(circle5.getCircumference());
console.log(dog2.bark()); // Output: "Max says woof!"
console.log(dog3.bark()); // Output: "Rex says woof!"
console.log(dog4.bark()); // Output: "Duke says woof!"
console.log(dog5.bark()); // Output: "Daisy says woof!"
