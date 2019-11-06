// определение функции
function add(a: number, b: number): number {
    return a + b;
}
// вызов функции
let result1 = add(1, 2);
console.log(result1);

// Не обязательные параметры через "?"
function getName(firstName: string, lastName?: string) {
    if (lastName) return `${firstName} ${lastName}`;
    return firstName;
}
// Параметры по умолчанию
function getName1(firstName: string, lastName: string="Иванов"): string {
    return `${firstName} ${lastName}`;
}
// Неопределенный набор параметров
function addNumbers(firstNumber: number, ...numberArray: number[]): number {
    let result = firstNumber;
    for (let i = 0; i < numberArray.length; i++) {
        result+= numberArray[i];
    }
    return result;
}
// Функции обратного вызова
function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number{
 
    let result = operation(x, y);
    return result;
}
let operationFunc: (x: number, y: number) => number;
operationFunc = function (a: number, b: number): number {
    return a + b;
}
console.log(mathOp(10, 20, operationFunc)); // 30 
operationFunc = function (a: number, b: number): number {
    return a * b;
}
console.log(mathOp(10, 20, operationFunc)); // 200

// Стрелочные функции
let sum = (x: number, y: number) => x + y;
let result = sum(15, 35); // 50
console.log(result);

// Статические свойства и функции
class Operation {
 
    static PI: number = 3.14;
 
    static getSquare(radius: number): number {
 
        return Operation.PI * radius * radius;
    }
}
let resultSt = Operation.getSquare(30);
console.log("Площадь круга с радиусом 30 равна " + resultSt);
let result2 = Operation.PI * 30 * 30;
console.log(result2);   // 2826