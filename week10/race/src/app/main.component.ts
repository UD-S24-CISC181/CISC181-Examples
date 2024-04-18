import html from "./main.component.html";
import css from "./main.component.css";
import {
    BindCSSClassToBoolean,
    BindStyleToNumber,
    BindStyleToNumberAppendPx,
    EzComponent,
    Timer,
} from "@gsilber/webez";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    private rightToLeftY: number = 185;
    private leftToRightY: number = 305;
    private rightToLeftStart: number = 100;
    private leftToRightStart: number = -20;
    @BindCSSClassToBoolean("car", "right-to-left")
    private leftToRight: boolean = false;
    private increment = 1;

    @BindStyleToNumberAppendPx("car", "top")
    ypos: number = this.rightToLeftY;

    @BindStyleToNumber("car", "left", "%")
    xpos: number = this.rightToLeftStart;

    constructor() {
        super(html, css);
    }
    @Timer(10)
    onCarMove() {
        if (this.leftToRight) {
            if (this.xpos >= this.rightToLeftStart) {
                this.leftToRight = false;
                this.ypos = this.rightToLeftY;
            } else {
                this.xpos += this.increment;
            }
        } else {
            if (this.xpos <= this.leftToRightStart) {
                this.leftToRight = true;
                this.ypos = this.leftToRightY;
            } else {
                this.xpos -= this.increment;
            }
        }
    }
}
