// 型推論の方が冗長でないので良い（型推論ができない時に型注釈をつけてあげる）
let hasValue = true;
let count = 10;
const float = 3.14;
const negative = -3.14;
let single = "";
let double = "wow";
let backtick = `Hello World`;

let h: string;
h = "Hello";

const person = {
  name: { first: "Jack", last: "Smith" },
  age: 20,
};
// console.log(person.age);

const fruits: string[] = ["apple", "banana", "orange"];
fruits.push("grape");

const book: [string, number, boolean] = ["business", 1500, false];

enum CoffeeSize2 {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}
const coffee = {
  hot: true,
  size: CoffeeSize2.TALL,
};
coffee.size = CoffeeSize2.SHORT;

// any type(Avoid as much as possible.)
let anything: any = true;
anything = "Hello";
anything = 3.14;
anything = [];
anything = {};
anything.salsa = "cool";

let banana = "banana";
banana = anything; // any型が絡むとゆるゆるになる

// union type
let unionType: string | number = "hello";
unionType.toUpperCase();
unionType = 3.14;
// unionType.toUpperCase();//x
let unionTypes: (number | string)[] = [1, "hello"];

const apple: "apple" = "apple";

// type arias (type that treat as variable)
type ClothSize = "S" | "M" | "L";

// literal type
let clothSize: ClothSize = "S";

const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: "red",
  size: clothSize,
};

// type for function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(1, 2);

// void type(no return value)
function sayHello(): void {
  // console.log("Hello");
}
// console.log(sayHello()); // undefined

let tmp: undefined;
let tmp2: null = null;

const anotherAdd: (n1: number, n2: number) => number = add;

const doubleNumber: (num: number) => number = (num) => num * 2;

// type for callback function
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(2, (doubleNum) => doubleNum);

// unknown type
let unknownInput: unknown; // more strictly than any type
let anyInout: any;
let text: string;
unknownInput = "hello";
unknownInput = 3.14;
unknownInput = [];
if (typeof unknownInput === "string") {
  text = unknownInput;
}

// never type
function error(message: string): never {
  throw new Error(message);
}
console.log(error("This is error")); // nothing return, only throw error
