import { BindValue, Click, EventSubject, EzComponent } from "@gsilber/webez";
import html from "./plant.component.html";
import css from "./plant.component.css";

export class PlantComponent extends EzComponent {
    deleteEvent: EventSubject<PlantComponent> = new EventSubject();

    @BindValue("pic")
    picture: string = "flower";

    constructor() {
        super(html, css);
        this.picture = this.randomPlant();
    }

    randomPlant(): string {
        let plants = ["flower", "tree", "cactus"];
        return plants[Math.floor(Math.random() * plants.length)];
    }
    @Click("pic")
    onClick() {
        this.deleteEvent.next(this);
    }
}
