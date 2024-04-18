import { Click, EzComponent } from "@gsilber/webez";
import html from "./garden.component.html";
import css from "./garden.component.css";
import { PlantComponent } from "../plant/plant.component";

export class GardenComponent extends EzComponent {
    plants: PlantComponent[] = [];
    constructor() {
        super(html, css);
    }

    @Click("addPlant")
    addPlant() {
        const plant: PlantComponent = new PlantComponent();
        this.plants.push(plant);
        this.addComponent(plant, "plants");
        plant.event.subscribe((p: PlantComponent) => {
            this.removeComponent(p);
            this.plants = this.plants.filter((plant: PlantComponent) => {
                return plant !== p;
            });
        });
    }
}
