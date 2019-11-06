// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let age: number = 37;

// String
let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hello, my name is ${ fullName }.`

// Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'
x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.
console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

// Any
let someVar: any = "hello";
console.log(someVar);   // сейчас someVar - это string
someVar = 20; 
console.log(someVar);   // сейчас someVar - это number
var someArray: any[] = [ 24, "Tom", false]; // ok
let list: any[] = [1, true, "free"];
list[1] = 100;

// Void -> good in functions when returns nothing
function warnUser(): void {
    console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Object
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
let person = {name:"Tom", age:23};
console.log(person.name); // ok
person = { name: "Alice" }; // error
person = { name: 12 }; // error

// Type assertions
    /* let someValue: any = "this is a string";
        let strLength1: number = (<string>someValue).length; */ //should work but gives an error
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;