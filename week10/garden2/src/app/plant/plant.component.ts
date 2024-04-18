import { BindValue, Click, EventSubject, EzComponent } from "@gsilber/webez";
import html from "./plant.component.html";
import css from "./plant.component.css";

export class PlantComponent extends EzComponent {
    event: EventSubject<PlantComponent> = new EventSubject<PlantComponent>();

    getRandomPlant(): string {
        const plantTypes = ["flower", "tree", "shrub", "grass", "cactus"];
        return plantTypes[Math.floor(Math.random() * plantTypes.length)];
    }

    @BindValue("plant")
    plant: string = "flower";
    constructor() {
        super(html, css);
        this.plant = this.getRandomPlant();
    }

    @Click("plant")
    onPlantClick() {
        this.event.next(this);
    }
}
