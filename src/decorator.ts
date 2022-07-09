function Logging(message: string) {
  // decorator factory
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}
function Component(template: string, selector: string) {
  console.log("Component factory");
  // decorator factory
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log("Component initialized");
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log("PropertyLogging");
  console.log(target);
  console.log(propertyKey);
}
function MethodLogging(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor // メソッドのプロパティを持っている
) {
  console.log("MethodLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}
function enumerable(isEnumerable: boolean) {
  return function (
    _target: any,
    _propertyKey: string,
    _descriptor: PropertyDescriptor
  ) {
    return {
      enumerable: isEnumerable,
    };
  };
}
function AccessorLogging(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor // メソッドのプロパティを持っている
) {
  console.log("AccessorLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}
function ParameterLogging(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log("ParameterLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

// デコレータは下から上に順番に実行される
@Logging("Logging User")
@Component("<h1>{{ name }}</h1>", "#app")
class User {
  @PropertyLogging
  name = "Wilson";
  constructor(private _age: number) {
    console.log("User was created");
  }
  @AccessorLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  @enumerable(false)
  @MethodLogging
  greeting(@ParameterLogging message: string) {
    // メソッドはprototype chainingに格納される
    console.log(message);
  }
}
const user1 = new User(48);
const user2 = new User(55);
const user3 = new User(21);
