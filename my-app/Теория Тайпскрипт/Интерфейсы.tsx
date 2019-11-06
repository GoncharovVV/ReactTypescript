interface IUser {
    id: number;
    name: string;
}

let employee: IUser = {
    id: 1, 
    name: "Tom"
}
function getEmployeeInfo(user: IUser): void {
    console.log("id: " + user.id);
    console.log("name: " + user.name)
}
 
/* function getEmployeeInfo({ id, name }: IUser): void {
    console.log("id: " + id);
    console.log("name: " + name)
}*/
getEmployeeInfo(employee);
/**/
const buildUser = (userId: number, userName: string): IUser => {
    return { id: userId, name: userName };
}
let newUser = buildUser(2, "Bill");
console.log("id: " + newUser.id);
console.log("name: " + newUser.name)

// Необязательные свойства и свойства только для чтения
interface IUser {
    id: number;
    name: string;
    age?: number;
}
interface Point {
    readonly x: number;
    readonly y: number;
}
let p: Point = { x: 10, y: 20 };
console.log(p);
/* p.x = 5; // Ошибка - свойство доступно только для чтения */

// Определение методов
interface IUser {
    id: number;
    name: string;
    getFullName(surname: string): string;
}
let employee1: IUser = {
    id: 1, 
    name: "Alice",
    getFullName : function (surname: string): string {
        return this.name + " " + surname;
    }
}
let fullName = employee1.getFullName("Tompson");
console.log(fullName); // Alice Tompson

// Интерфейсы классов
interface IUser {
    id: number;
    name: string;
    getFullName(surname: string): string;
}
 
class User2 implements IUser{
    id: number;
    name: string;
    age: number;
    constructor(userId: number, userName: string, userAge: number) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    getFullName(surname: string): string {
        return this.name + " " + surname;
    }
}
 
let tom1 = new User2(1, "Tom", 23);
console.log(tom1.getFullName("Simpson"));

// Наследование интерфейсов
interface IMovable {
    speed: number;
    move(): void;
}
interface ICar extends IMovable {
    fill(): void;
}
class Car implements ICar {
    speed: number;
    move(): void {
 
        console.log("Машина едет со скоростью " + this.speed + " км/ч");
    }
    fill(): void {
        console.log("Заправляем машину топливом");
    }
}
 
let auto = new Car();
auto.speed = 60;
auto.fill();

// Интерфейсы функций
interface FullNameBuilder {
    (name: string, surname: string): string;
}
let simpleBuilder: FullNameBuilder = (name, surname) =>  "Mr. " + name + " " + surname;
 
let fullNameBl = simpleBuilder("Bob", "Simpson");
console.log(fullNameBl); // Mr. Bob Simpson

// Интерфейсы массивов
interface StringArray {
    [index: number]: string;
}
let phones: StringArray;
phones = ["iPhone 7", "HTC 10", "HP Elite x3"];
 
let myPhone: string = phones[0];
console.log(myPhone);

// Гибридные интерфейсы
interface PersonInfo {
    (name: string, surname: string):void;
    fullName: string;
    password: string;
    authenticate(): void;
}
 
function personBuilder(): PersonInfo {
 
    let person = <PersonInfo>function (name: string, surname: string): void{
        person.fullName = name + " " + surname;
    };
    person.authenticate = function () {
        console.log(person.fullName + " входит в систему с паролем " + person.password);
    };
    return person;
}
 
let tom = personBuilder();
tom("Tom", "Simpson");
tom.password = "qwerty"; 
tom.authenticate();