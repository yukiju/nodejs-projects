/* Does not declare what sleep does! However, it declares that
anything with this type will be able to sleep */
interface Sleepable {
    sleep: () => void;
    //sleep();
    //sleep(): void;
}

/*
    An abstract class is a special kind of class that is meant to sit at an
    abstract level of the class hierarchy. An abstract class is a class that
    cannot be instantiated. In order to leverage an abstract class it must be
    extended by another class.

    Abstract classes provide the ability to declare abstract functions - these
    are functions without implementations. This is similar to an interface.
*/
abstract class Pet {
    name: string;
    breed: string;
    gender: string;
    birthdate: Date;

    constructor(name: string, breed: string, gender: string,
            birthdate: Date) {
        this.name = name;
        this.breed = breed;
        this.gender = gender;
        this.birthdate = birthdate;
    }

    abstract eat(food?: string);
}

class Dog extends Pet implements Sleepable {
    constructor(name: string, breed: string, gender: string,
        birthdate: Date) {
    super(name, breed, gender, birthdate);
}
    sleep() {}
    eat() {}
}

class Cat extends Pet implements Sleepable{
    
    constructor(name: string, breed: string, gender: string,
            birthdate: Date) {
        super(name, breed, gender, birthdate);
    }

    // Question mark allows to call the function parameter to be optional
    purrs(thing?: string) {
        if (thing) {
            console.log(`${this.name} purrs at a ${thing}`);
        } else {
            console.log(`${this.name} purrs.`);
        }
    }

    eat(food: string) {}

    sleep() {}

    move() {}
}

const cosmo: Cat = new Cat('Cosmo', 'Almost Halloween Cat', 'male', new Date());
cosmo.purrs('Melissa');
cosmo.purrs();

const sirius: Dog = new Dog('Sirius', 'Doberman Pinsher', 'male', new Date());
sirius.sleep();

const pets: Pet[] = [cosmo, sirius];
console.log(pets.pop());
console.log(pets.pop());

