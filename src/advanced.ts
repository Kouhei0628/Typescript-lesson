interface Engineer {
  name: string;
  role: string;
}
interface Blogger {
  name: string;
  follower: number;
}
// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}

const engineerBlogger: EngineerBlogger = {
  name: "Jack",
  role: "front-end developer",
  follower: 10000,
};

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  // type guard
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}

interface TmpFnc {
  (x: string): number;
  (x: number): number;
}
const upperHello: TmpFnc = function (x: string | number) {
  console.log(x);
  return 1;
};
// interface FuncA {
//   (a: number, b: string): number;
//   (a: string, b: number): number;
// }
// interface FuncB {
//   (a: string): number;
// }
// let intersectionFunction: FuncA & FuncB;
// intersectionFunction = function (a: number | string, b?: number | string) {
//   return 0;
// };
interface FuncA {
  (a: number): number;
}
interface FuncB {
  (a: string): string;
}
let unionFunction: FuncA | FuncB;

type NomadWorker = Engineer | Blogger;
function describeNomadWorkerProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name); // 共通事項is accessable
  if ("role" in nomadWorker) {
    // is "role" in nomadWorker?
    console.log(nomadWorker.role);
  }
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}
class Dog {
  king: "dog" = "dog";
  speak() {
    console.log("woof");
  }
  play() {
    console.log("play");
  }
}
class Bird {
  king: "bird" = "bird";
  speak() {
    console.log("tweet");
  }
  fly() {
    console.log("fly");
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  switch (pet.king) {
    case "dog":
      pet.play();
      break;
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
  pet.speak();
}
havePet(new Bird());

// type assertion
const input = <HTMLInputElement>document.getElementById("input");
// const input = document.getElementById("input")!; // non-null assertion
// const input = document.getElementById("input") as HTMLInputElement; // for jsx document
input.value = "hello";
(document.getElementById("input") as HTMLInputElement).value = "hello"; // 定数に格納しない

interface Designer {
  name: string;
  [index: string]: string; // ここにおいてはstring以外指定できない
}
const designer: Designer = {
  name: "Jack",
  role: "web-designer",
};

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}
const dowonloadedData: DownloadedData = {
  id: 1,
};
console.log(dowonloadedData.user?.name?.first); // undefined | string

const userData = dowonloadedData.user ?? "no-user"; // data ?? (if data is undefined, use this value)
type Id = DownloadedData["id" | "user"]; // LookUp type

enum Color {
  RED,
  BLUE,
}

class AdvancedPerson {
  name: string = "Petro";
  age: number = 201;
}
class AdvancedHouse {
  name: string = "Cottage";
  age: number = 20;
}
let target = new AdvancedPerson();
let source = new AdvancedHouse();
target = source;

// let targetF = function (a: string, b: string) {};
// let targetF2 = function (a: string) {};
// targetF = targetF2;
// targetF("a", "b");
// let target = 0;
// let source = (target = source); // enum と number の互換性

function advanceFn(...args: readonly [number, string, boolean?, ...number[]]) {
  return args;
}
advanceFn(1, "wow", true, 1, 1, 1, 1, 1);

const milk = "milk" as const;
let drink = milk;

const array = [1, 2, 3] as const;

const peter = {
  name: "peter",
  age: 28,
} as const; // 値を変えられない
type Peter = typeof peter;
