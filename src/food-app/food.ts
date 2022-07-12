import { Foodable } from "./interface";
import { Score } from "./score.js";
export class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener("click", this.clickEventHandler.bind(this));
  }
  clickEventHandler(): void {
    this.element.classList.toggle("food--active");
    const score = Score.getInstance();
    score.render();
  }
}
