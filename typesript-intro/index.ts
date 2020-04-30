/* .ts files are TypeScript files */
/* All JavaScript files are valid TypeScript */
/* TypeScript can be described as a superset of JavaScript */
/* We cannot run TypeScript files themselves */
/* TypeScript enforces typing at compile time
the output JS files will have no typing information */


let username = 'Abby';

console.log(person.firstName);

//let x: any = 10;
let x: number = 10;
x = 15;
x = x * 2;
//x = x + 'hello'; // Causes error because of type

let y: string = '10';
y = y + 'hello';

function printString(str: string) {
    console.log(str);
}

/*
 * sum is a function which adds two numbers together and returns the sum
 * @param a
 * @param b
 */
function sum(a: number, b:number): number {
    return a + b;
}

let z: number = sum(1, 2);

/*
    Any object is considered to be of an interface type if it meets the interfaces
    type requirements
*/
interface Person {
    firstName: string;
    lastName: string;
    birthdate: Date;
}

let person: Person = {
    firstName: 'Abby',
    lastName: 'Adams',
    birthdate: new Date()
};

console.log(person.firstName);