import { Score } from "./score.js";
export class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener("click", this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle("food--active");
        const score = Score.getInstance();
        score.render();
    }
}
