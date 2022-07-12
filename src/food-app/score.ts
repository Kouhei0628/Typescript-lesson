import { Scoreable } from "./interface.js";
import { Foods } from "./foods.js";
export class Score implements Scoreable {
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
