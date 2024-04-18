import { Click, EzComponent } from "@gsilber/webez";
import html from "./garden.component.html";
import css from "./garden.component.css";
import { PlantComponent } from "../plant/plant.component";

export class GardenComponent extends EzComponent {
    plants: PlantComponent[] = [];
    constructor() {
        super(html, css);
    }
    @Click("Add-plant")
    addPlant() {
        let plant = new PlantComponent();
        this.plants.push(plant);
        this.addComponent(plant, "plants");
        plant.deleteEvent.subscribe((plant: PlantComponent) => {
            this.removeComponent(plant);
            this.plants = this.plants.filter((p) => p !== plant);
        });
    }
}
