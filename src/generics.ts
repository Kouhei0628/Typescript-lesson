function copy(value: any) {
  return value;
}
console.log(copy({ name: "wilson" }) as { name: string }); // めんどくさい！

function copy2<T>(value: T): T {
  // type as an argument.
  return value;
}
console.log(copy2({ name: "wilson" }));
console.log(copy2<string>("Kolbe"));

function copy3<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  // クラスのそれとは違い、ここのextendsは制約するという意味に近い
  value[key];
  return value;
}
console.log(copy3({ name: "sam" }, "name"));

type K = keyof { name: string; age: number };

class LightDataBase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}

const stringLightDataBase = new LightDataBase<string>();
stringLightDataBase.add("Orange");
stringLightDataBase.add("Banana");
stringLightDataBase.add("Apple");
stringLightDataBase.add("Banana");
stringLightDataBase.add("Apple");
console.log(stringLightDataBase.get());

interface TmpDataBase<T> {
  id: T;
  data: T[];
}
const tmpDataBase: TmpDataBase<number> = {
  id: 3,
  data: [65, 78, 87, 90, 100],
};

type TmpDataBase2<T> = {
  id: number;
  data: T[];
};
const tmpDataBase2: TmpDataBase2<number> = {
  id: 3,
  data: [65, 78, 87, 90, 100],
};

// utility type
interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo>; // has optional properties
type ReadTodo = Readonly<Todo>; // has readonly properties

const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("done");
  }, 3000);
});
fetchData.then((data) => {
  data.toUpperCase();
});

const vegetables: Array<string> = ["carrot", "tomato", "cucumber"]; // generic array

// create crypto numbers
class CryptoNumber {
  private organizeDigits(str: string): string[] {
    const strArray: string[] = str.split(",").map((s) => {
      return ("00000" + s).slice(-5);
    });
    return strArray;
  }
  private myCryptos: string = window.crypto
    .getRandomValues(new Uint16Array(4))
    .toString();
  private myRandoms: string[] = this.organizeDigits(this.myCryptos);

  public getCryptoNumber(): string {
    return this.myRandoms.toString().replace(/,/g, " ");
  }
  public displayCryptoNumber(): void {
    const cn = document.querySelector<HTMLElement>(".crypto-number")!;
    cn.textContent = this.getCryptoNumber();
  }
}
const cryptoNumber = new CryptoNumber();
cryptoNumber.displayCryptoNumber();

interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let temporary: ResponseData;

interface Vegetables {
  readonly tomato?: string;
  pumpkin?: string;
}
let tmp3: keyof Vegetables;
type MappedTypes = {
  -readonly [K in keyof Vegetables]-?: string;
};

// conditional types(type if)
type ConditionalTypes = "tomato" extends string ? number : boolean; // number
type ConditionalTypes2 = { tomato: "tomato" } extends {
  tomato: infer R /* like any type inferは型推論という意味 */;
}
  ? R
  : boolean; // tomato

type DistributiveConditionalTypes =
  | "tomato"
  | "pumpkin" /* union型が推論する */ extends "tomato"
  ? number
  : boolean; // boolean

type DistributiveConditionalTypes2<T> = T extends "tomato" ? number : boolean; // boolean
let tmp4: DistributiveConditionalTypes2<"tomato" | "pumpkin">;
let tmp5: NonNullable<string | null>;
