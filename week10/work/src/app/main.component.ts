import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent, Timer } from "@gsilber/webez";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    constructor() {
        super(html, css);
    }
    counter: number = 0;
    @Timer(1000)
    private onTimer(cancel: () => void) {
        this.counter++;
        if (this.counter === 1000) cancel();
        console.log("not again!!!");
    }
}
