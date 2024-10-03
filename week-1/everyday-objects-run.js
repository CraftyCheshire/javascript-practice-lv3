import { Car } from "./everyday-objects.js";
import { Phone } from "./everyday-objects.js";
import { Book } from "./everyday-objects.js";
import { Laptop } from "./everyday-objects.js";
import { Backpack } from "./everyday-objects.js";

// use node everyday-objects.js to try this out.
// Create instances
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); // Output: "2020 Toyota Corolla"
myCar.startEngine(); // Output: "The engine of Toyota Corolla is now running."

const myPhone = new Phone("Nokia", "3310", 100);
console.log(myPhone.makeCall(9856626702));
myPhone.batteryStatus();

const myBook = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 815);
console.log(myBook.getSummary());
myBook.readPages();

const myLaptop = new Laptop("Lenovo", "Yoga 730-15IKB", 16);
console.log(myLaptop.bootUp());
myLaptop.shutDown();

const myBackpack = new Backpack("SwissGear", "Black", 31);
console.log(myBackpack.open);
myBackpack.checkCapacity();