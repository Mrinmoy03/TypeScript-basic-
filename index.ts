// ---- Variables & Type Annotations ----
let myName: string = "mrinmoy";
myName = "why should i tell you ?";

let anyValue: any = "hula";
anyValue = 5;

// ---- Functions & Type Annotations ----
function addOne(num: number) {
  return num + 1;
}
const mulTwo = (x: number, y: number): number => {
  return x * y;
};
const res = addOne(3);
const res2 = mulTwo(2, 6);

// ---- Arrays with Type Annotations ----
const items: number[][] = [[], []];
const item: Array<number>[] = [[], []];

// ---- Object Type Annotation ----
const obj: { fName: string; lname: string } = {
  fName: "mrinmoy",
  lname: "bhattacharje",
};

// ---- Function Returning an Object ----
function obj2(): { fName: string; lname: string } {
  return {
    fName: "mrinmoy",
    lname: "bhattacharje",
  };
}

const { fName } = obj2();
console.log(fName);

// ---- Type Aliases ----
type Person = {
  Name: string;
  readonly age: number;
  address?: string;
};
type Employee = {
  id: number;
  title: string;
};
type combineEmployee = Person & Employee;

// ---- Function Using Type Aliases ----
function printPerson(person: Person) {
  console.log(`name: ${person.Name}, age: ${person.age} address :${person.address}`);
}
function EmployMent(person: combineEmployee) {
  console.log(`name: ${person.Name}, age: ${person.age} address :${person.address}, id: ${person.id}, title:${person.title}`);
}

// ---- Object with Type Aliases ----
const myPerson: Person = { Name: "Alice", age: 13 };
const myPerson2: combineEmployee = { Name: "Alicia", age: 24, address: "sodepur", id: 12312312121, title: "manager" };
printPerson(myPerson);
EmployMent(myPerson2);

// ---- Object Destructuring ----
const { Name, age } = myPerson;
console.log(age);
console.log(Name);
console.log(obj);
console.log(myName);
console.log(res2);
console.log(res);
console.log(anyValue);

// ---- Union Types ----
let password: string | number = 20;

// ---- Union Type for Objects ----
type Userinfo = {
  Fname: string;
  Lname: string;
  age: number;
};
type AccountDetails = {
  email: string;
  password: string;
};
let user: Userinfo | AccountDetails = {
  Fname: "Lana",
  Lname: "rodes",
  age: 32,
  email: "dfafjfsf",
};
console.log(user);

// ---- Array with Mixed Types ----
const items: (number | string)[] = [1, 5, 4, "hi"];

// ---- Literal Types ----
let color: "red" | "black" | "blue";
color = "red";
// color = "yellow"; // Error
console.log(color);

// ---- Tuples ----
let myTuple: [string, number] = ["hello", 43];
console.log(myTuple[0]);
console.log(myTuple[1]);
let [hula, bula] = myTuple;
console.log(hula);

// ---- Enums ----
enum myConditions {
  good = "ahahahahahaha",
  veryGood = "hahahahahah",
  sad = "oooh",
  verySad = "oooooooooooh",
}
const myHeallth = myConditions.sad;
console.log(myHeallth);

// ---- Classes ----
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("raja", 25);
console.log(person.name);

// ---- Interfaces ----
interface Person {
  fName: string;
  lName: string;
  age: number;
}

const myPerson: Person = {
  fName: "mrinmoy",
  lName: "bhatta",
  age: 12,
};
console.log(myPerson);

// ---- Function Type Interface ----
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
const substract: MathOperation = (a, b) => a - b;

console.log(add(4, 6));
console.log(substract(8, 7));

// ---- Interface with Methods ----
interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
  songName: "shape",
  singerName: "abc",
  printSongInfo: (songName, singerName) => {
    return `song: ${songName} , Singer name: ${singerName}`;
  },
};
console.log(song1.printSongInfo("shape", "abc"));

// ---- Interface Merging ----
interface car {
  brand: string;
  start(): void;
}
interface car {
  model: string;
  stop(): void;
}
const myCar: car = {
  brand: "BMW",
  model: "HIHI",
  start() {
    console.log("it is started");
  },
  stop() {
    console.log("stoped");
  },
};
myCar.start();

// ---- Generics ----
function printInfo<T>(x: T): T {
  return x;
}

const str = printInfo<string>("hello");
const num = printInfo<number>(2);
console.log(str);
console.log(num);

// ---- Function to Get Random Key-Value Pair ----
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): { key: string; value: T } {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];

  return { key: randKey, value: obj[randKey] };
}

const data = {
  name: "Alice",
  age: 25,
  country: "India",
};

const randomPair = getRandomKeyValuePair(data);
console.log(randomPair);

const strObj = { a: "apple", b: "banana", c: "cherry" };
const numObj = { a: 1, b: 2, c: 3 };
const res = getRandomKeyValuePair<string>(strObj);
const res3 = getRandomKeyValuePair<number>(numObj);
console.log(res3);


// ----- generic function that can filter array based on condition ----

function filterArray<T>(array:T[], condition : (item:T)=>boolean):T[] {
    return array.filter((item)=>condition(item))
}

const numberArray = [1,2,3,4,5,6,7,8,9,10]
const evenNumber = filterArray<number>(numberArray, (num)=> num%2 ===0)
console.log(evenNumber)

interface Fruit {
    name: string;
    color: string
}
const FruitArray : Fruit[] =[
   {name :"apple", color:"red"},
   {name :"banana", color:"yellow"},
   {name :"bedana", color:"red"},
]
const PrintFriut = filterArray<Fruit>(FruitArray, (fruit)=>fruit.color ==="red")

console.log(PrintFriut)

 // -----generic function which take multiple type----

function reversePair<T,U>(value1:T, value2:U):[U,T] {
    return[value2, value1]
    
}

const reversep = reversePair("hello", 2)
console.log(reversep)

class BOx<t>{
    private content :t;
    constructor (initialContent : t){
        this.content = initialContent
    }
    getContent():t {
        return this.content
    }
    setContent(newContent:t) : void{
        this.content = newContent
    }

}

const strBox =new BOx<string> ("hello")
console.log(strBox.getContent())
strBox.setContent("new Content Added")
console.log(strBox.getContent())

 // ---- type Narrowing---
 // ---- type guards---

type Mytypye = string | number;

function exampleFunction (value:Mytypye): void{
    if(typeof value === "string"){
        console.log(value.toUpperCase())
    }else{
        console.log((value.toFixed(2)))
    }
}
exampleFunction(9)
exampleFunction("hi function")

  // ---instanceof operator

class dog {
    bark():void{
        console.log("woffff")
    }
}
class cat{
    mew():void{
        console.log("mew")
    }
}


function animalSound(animal:dog| cat): void{
    if(animal instanceof dog){
        animal.bark()
    }else{
        animal.mew()
    }
}

const myDOg = new dog()
const myCat = new cat()
animalSound(myDOg)



 // intersection types

type Employee = {
    id: number;
    name: string;
}
type Manager = {
    department : string;
    role : string;
}

type worker = Employee & Manager;
 
const newJoinee : worker ={
    id:1212121,
    name: "mrinmoy",
    department:"webdev",
    role:"senior"
}
// console.log(newJoinee)
console.log(newJoinee.name)
console.log(newJoinee.id)
console.log(newJoinee.department)
console.log(newJoinee.role)


const add = (x: number, y:number): number=> x+y;
console.log(add(4,5))

