


// //this will mak Employee objects ( that have access to the mthods)
// class Employee {
//     constructor(name, salary, experienceYears){
//         this.name = name;
//         this.salary = salary;
//         this.experienceYears = experienceYears;

//     }
//     CheckSalary(){
//         //show us the salary of the employee
//         //"this" inside a method refers to the object that CALLS THE METHOD
//         console.log (this.salary);
//     }
//     getEmployeeInformationString(){
//         // tell us important info about employee as a string
//     }
// }

// let James = new Employee ('James', 70000, 2);
// let Brit = new Employee('Brit', 71000, 3):

// console.log(James);
// console.log(Brit);

// Brit.CheckSalary()

// Submit a JS file.

// (use each class to make at least 3 objects EACH)

// Create a class called "Person" that has properties for name, age, and occupation. Add a method called "introduce" that logs a message to the console introducing the person and their occupation.

class Person  {
    constructor(name, age, occupation) {

    this.name = name;
    this.age = age;
    this.occupation = occupation;
    }
    Introduce(){
        console.log(`Hi I am ${this.name} and my job is ${this.occupation}`)
    }
}

let Badr = new Person ('Badr', 70000, 'JrSE')
let Tesfaye = new Person ('Tesfaye', 71000, 'SE')

Tesfaye.Introduce()
Badr.Introduce()


// Create a class called "Animal" that has properties for name, species, and sound. Add a method called "makeSound" that logs the animal's sound to the console.
class Animal  {
    constructor(name, species, sound) {

    this.name = name;
    this.species = species;
    this.sound = sound;
    }
    makeSound(){
        console.log(`${this.sound} `)
    }
}

let Chicken = new Animal ('Chicken', 'Mammal', 'Bacawk')
let Cow = new Animal ('Cow', 'Bird', 'Moo')

Chicken.makeSound()
Cow.makeSound()

// Create a class called "Book" that has properties for title, author, and number of pages. Add a method called "read" that logs a message to the console indicating that the book has been read.
class Book  {
    constructor(title, author,  numberOfPages) {

    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    }
    read(){
        console.log(`The title ${this.title} by ${this.author} has been read`)
    }
}

let SongOfIceAndFire = new Book ('Song of Ice and Fire', 'George R Martin', '1200')
let FortyEightLawsofPower = new Book ('48 Laws of Power', 'Robert Greene', '1300')

SongOfIceAndFire.read()
FortyEightLawsofPower.read()
// Create a class called "Car" that has properties for make, model, and year. Add a method called "start" that logs a message to the console indicating that the car has been started.
class Car  {
    constructor(make, model, year) {

    this.make = make;
    this.model = model;
    this.year = year;
    }
    start(){
        console.log(`The ${this.make} ${this.model} ${this.year} has been started`)
    }
}

let BrandNewToyotaTacomaTwoThousandAndThree = new Car ('Brand New Toyota', 'Tacoma', 'Two Thousand and Tree')
let ToyotaCorolla = new Car ('Toyota', 'Corolla', 1994)

BrandNewToyotaTacomaTwoThousandAndThree.start()
ToyotaCorolla.start()
// Create a class called "Shape" that has properties for width and height. Add methods called "getArea" and "getPerimeter" that calculate and return the shape's area and perimeter.
class Shape  {
    constructor(width, height) {

    this.width = width;
    this.height = height;
    }
    getArea(){
        console.log(`The area is ${this.width * this.height}`)
    }
    getPerimeter(){
        console.log(`The perimeter is ${(this.width * 2) + (this.height * 2)} `)
    }
}

let Square = new Shape (50, 20)
let Rectangle = new Shape (75, 10)

Square.getArea()
Square.getPerimeter()
Rectangle.getArea()
Rectangle.getPerimeter()

// Create a class called "Movie" that has properties for title, director, and rating. Add a method called "play" that logs a message to the console indicating that the movie is playing.
class Movie  {
    constructor(title, director, rating) {

    this.title = title;
    this.director = director;
    this.rating = rating;
    }
    play(){
        console.log(`The movie ${this.title} by ${this.director} is playing`)
    }
    
}
let EverythingEveryWhereAllAtOnce = new Movie ("Everything Everywhere All At Once", 'Daniel Kwan', 'R')
let StarWars = new Movie ('Star Wars', "George Lucas", 'PG-13')

EverythingEveryWhereAllAtOnce.play()
StarWars.play()

// Create a class called "Product" that has properties for name, price, and description. Add a method called "display" that logs a message to the console displaying the product's name, price, and description.
class Product  {
    constructor(name, price, description) {

    this.name = name;
    this.price = price;
    this.description = description;
    }
    display(){
        console.log(`The ${this.name} value is at ${this.price} dollars and it is ${this.description}`)
    }
    
}
let BrandNewToyotaTacomaTooThousandAndThree = new Product ("Brand New 2003 Toyota Tacoma", 12000, 'So Cherry Bruh')
let NewBlender = new Product ('Vitamix', 500, 'so nice and has multiple modes you can blend with')

BrandNewToyotaTacomaTooThousandAndThree.display()
NewBlender.display()
// (Optional) Create a class called "BankAccount" that has properties for account number and balance. Add methods called "deposit" and "withdraw" that allow users to deposit or withdraw money from the account.

// (Optional) Create a class called "Recipe" that has properties for name, ingredients, and instructions. Add a method called "cook" that logs a message to the console indicating that the recipe is being cooked.

// (Optional) Create a class called "Employee" that has properties for name, job title, and salary. Add a method called "calculateBonus" that calculates and returns the employee's bonus based on their salary.

 