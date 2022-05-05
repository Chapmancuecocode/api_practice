//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name, colour){
        this.name = name
        this.colour = colour
    }
    speak() {
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, this.colour)
        this.breed = breed
    }
}

class Cat extends Animal {
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
    speak() {
        console.log('Meow')
    }
}
