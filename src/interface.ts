// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number; // 関数の型を定義したが上のtypeの方がわかりやすい
}

let addFunc: addFunc;
addFunc = (num1: number, num2: number) => num1 + num2;

type Nameable = {
  name?: string;
  nickName?: string; // unnecessary type
};
const nameable: Nameable = {
  name: "Jack",
};

interface Human extends Nameable {
  // object interface
  name?: string; // 重複
  readonly age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(
    public age: number,
    public experience: number,
    public name?: string
  ) {}
  greeting(message: string = "hello"): void {
    if (message) {
      message.toUpperCase();
    }
    console.log(message);
  }
}

const tmpDeveloper = {
  name: "Sam",
  age: 20,
  experience: 1,
  greeting: (message: string) => {
    console.log(message);
  },
};
const user: Human = new Developer(20, 1);
