/*
    Generics allow us to have a reusable piece of code which accepts some typing
    information upon invocation or instatiation.

    Generic are indicated with the angle bracket syntax: <>

*/

const myArr: Array<number> = [];
myArr.push(1);
myArr.push(25);
//myArr.push('13'); //error

class Box {
    private object: any;

    getObject() {
        return this.object;
    }

    setObject(obj: any) {
        this.object = obj;
    }
}

const boxA = new Box();
boxA.setObject('car');
boxA.setObject(1);
const myString: string = boxA.getObject();
console.log(myString);

class GenericBox <T> {
    private object: T;

    getObject(): T {
        return this.object;
    }

    setObject(obj: T) {
        this.object = obj;
    }
}

const boxB = new GenericBox<string>();
//boxB.setObject(2); // now we can't set a number
boxB.setObject('hello');

const boxC = new GenericBox<number>();
const boxD = new GenericBox<boolean[]>();

const myStr: string = boxB.getObject();