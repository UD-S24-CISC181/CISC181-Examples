import {
    BindCSSClassToBoolean,
    BindStyleToNumberAppendPx,
    EzComponent,
} from "@gsilber/webez";
import html from "./bulb.component.html";
import css from "./bulb.component.css";

export class BulbComponent extends EzComponent {
    @BindStyleToNumberAppendPx("bulb", "width")
    private width: number = 0;
    @BindStyleToNumberAppendPx("bulb", "height")
    private height: number = 0;
    @BindStyleToNumberAppendPx("bulb", "top")
    private top: number = 0;
    @BindStyleToNumberAppendPx("bulb", "left")
    private left: number = 0;
    @BindCSSClassToBoolean("bulb", "on")
    private on: boolean = false;
    constructor(bulbSize: number, x: number, y: number) {
        super(html, css);
        this.width = bulbSize;
        this.height = bulbSize;
        this.top = y;
        this.left = x;
    }
    toggle() {
        this.on = !this.on;
    }
}
