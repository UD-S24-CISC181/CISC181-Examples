import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from "@gsilber/webez";
import { GardenComponent } from "./garden/garden.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    garden: GardenComponent = new GardenComponent();
    constructor() {
        super(html, css);
        this.addComponent(this.garden, "garden");
    }
}
