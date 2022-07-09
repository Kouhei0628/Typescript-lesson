interface Scoreable {
  readonly totalScore: number;
  render(): void;
}
interface Foodable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}
interface Foodsable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}

class Score implements Scoreable {
  private static instance: Score;
  get totalScore() {
    const foods = Foods.getInstance();
    return foods.activeElementsScore.reduce((total, score) => total + score, 0);
  }
  render() {
    document.querySelector<HTMLDivElement>(".score__number")!.textContent =
      String(this.totalScore);
  }
  private constructor() {}
  static getInstance(): Score {
    // 一回のみインスタンスを生成する
    if (!Score.instance) {
      Score.instance = new Score();
    }
    return Score.instance;
  }
}

class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener("click", this.clickEventHandler.bind(this));
  }
  clickEventHandler(): void {
    this.element.classList.toggle("food--active");
    const score = Score.getInstance();
    score.render();
  }
}

class Foods implements Foodsable {
  private static instance: Foods;
  elements = document.querySelectorAll<HTMLDivElement>(".food");
  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore: number[] = [];
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach((e) => {
      if (e.classList.contains("food--active")) {
        this._activeElements.push(e);
      }
    });
    return this._activeElements;
  }
  get activeElementsScore() {
    this._activeElementsScore = [];
    this.activeElements.forEach((e) => {
      const foodScore = e.querySelector(".food__score");
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent));
      }
    });
    return this._activeElementsScore;
  }

  private constructor() {
    this.elements.forEach((element) => {
      new Food(element);
    });
  }
  static getInstance(): Foods {
    // 一回のみインスタンスを生成する
    if (!Foods.instance) {
      Foods.instance = new Foods();
    }
    return Foods.instance;
  }
}
const foods = Foods.getInstance();
