// public
class User {
    name: string;
    year: number;
}
    /* равноценно */
class User {
    public name: string;
    public year: number;
}

// private
class User {
     
    private _name: string;
    private _year: number;
 
    constructor(name: string, age: number) {
 
        this._name = name;
        this._year = this.setYear(age);
    }
    public displayYear(): void {
        console.log("Год рождения: " + this._year);
    }
 
    public displayName(): void {
        console.log("name: " + this._name);
    }
 
    private setYear(age: number): number {
 
        return new Date().getFullYear() - age;
    }
}
 
let tom = new User("Tom", 24);
tom.displayName();
tom.displayYear();
    /* console.log(tom._name); // нельзя обратиться, так как _name - private
    tom.setYear(45); // нельзя обратиться, так как функция - private */

// protected
class User {
    private name: string;
    protected age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public displayInfo(): void {
 
        console.log("name: " + this.name + "; age: " + this.age);
    }
}
class Employee extends User {
 
    private company: string;
    constructor(name: string, age: number, company: string) {
        super(name, age);
        this.company = company;
    }
    public showData(): void {
        console.log("Age: " + this.age);
        //console.log("Name: " + this.name); // не работает, так как name - private
    }
}
// readonly 

class User {
    readonly id: number;
    name: string;
    constructor(userId: number, userName: string) {
        this.id = userId;
        this.name = userName;
    }
}
 
let tom: User = new User(2, "Tom");
console.log(tom.id, tom.name);
//tom.id=34;    // Ошибка - так как id - только для чтения
class User {
 
    name: string;
    constructor(readonly id: number, userName: string) {
        this.name = userName;
    }
}