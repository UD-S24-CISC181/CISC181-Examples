import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from "@gsilber/webez";
/**
 * 1. Let's start by adding the road to the main component
 * 2. Size the road reasonably
 * 3. Add the car to the road
 * 4. Position and size the car (absolute, 0,0)
 * 5. Find the correct y position for each lane
 * 6. Bind the lane number to one of the two lanes
 * 7. Bind the left position to 100%.  This will be the right side of the road
 * 8. Add a timer method to move the car from 100 to -20 then change lanes and do it again.
 * 9. Add a keydown event to change lanes
 * 10. Add a keydown event to change speed
 * 11. Remove the automatic changing of lanes
 * 12. Randomly put some stuff in the road
 * 13. Add a hit test to see if the car hit something
 * 14. Add a dialog to show when the car hits something
 */
/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    constructor() {
        super(html, css);
    }
}
