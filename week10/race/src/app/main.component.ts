import html from "./main.component.html";
import css from "./main.component.css";
import {
    BindStyle,
    BindStyleToNumber,
    EzComponent,
    EzDialog,
    Timer,
    WindowEvent,
} from "@gsilber/webez";
import { ObstacleComponent } from "./obstacle/obstacle.component";
declare const window: Window;
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
    speed: number = 1;
    @BindStyle("car", "top", (val: boolean) => (val ? "165px" : "290px"))
    topLane: boolean = true;
    @BindStyleToNumber("car", "left", "%")
    left: number = 100;

    obstracles: ObstacleComponent[] = [];
    constructor() {
        super(html, css);
        this.addObstacle();
    }
    addObstacle() {
        let row = Math.random() > 0.5 ? 185 : 310;
        let col = Math.random() * 90;
        let obs = new ObstacleComponent(row, col);
        this.obstracles.push(obs);
        this.addComponent(obs, "road");
    }
    hitTest(): boolean {
        for (let obs of this.obstracles) {
            if (
                (this.topLane && obs.y === 310) ||
                (!this.topLane && obs.y === 185)
            ) {
                return false;
            }
            if (Math.abs(this.left - obs.x) < 1) {
                return true;
            }
        }
        return false;
    }
    @Timer(50)
    onTimerTick(cancel: () => void) {
        this.left -= this.speed;
        if (this.left < -20) {
            this.left = 100;
        }
        if (this.hitTest()) {
            cancel();
            EzDialog.popup(this, "You Crashed!", "Game Over").subscribe(() => {
                window.location.reload();
            });
        }
    }
    @WindowEvent("keydown")
    onKeydown(event: KeyboardEvent) {
        if (event.key === "ArrowUp") {
            this.topLane = true;
        } else if (event.key === "ArrowDown") {
            this.topLane = false;
        } else if (event.key === "ArrowLeft") {
            if (this.speed < 10) this.speed += 1;
        } else if (event.key === "ArrowRight") {
            if (this.speed > 1) this.speed -= 1;
        }
    }
}
