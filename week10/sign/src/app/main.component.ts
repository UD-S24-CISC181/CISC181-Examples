import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from "@gsilber/webez";
import { MarqueeComponent } from "./marquee/marquee.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    marqee: MarqueeComponent = new MarqueeComponent("Hello, World!");
    constructor() {
        super(html, css);
        this.addComponent(this.marqee, "marquee");
    }
}
