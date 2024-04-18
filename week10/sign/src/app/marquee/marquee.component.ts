import {
    EzComponent,
    BindStyleToNumberAppendPx,
    BindValue,
    Timer,
    BindStyle,
} from "@gsilber/webez";
import html from "./marquee.component.html";
import css from "./marquee.component.css";
import { BulbComponent } from "../bulb/bulb.component";

export class MarqueeComponent extends EzComponent {
    @BindStyleToNumberAppendPx("outer", "width")
    private width: number = 600;
    @BindStyleToNumberAppendPx("outer", "height")
    private height: number = 300;
    @BindValue("text")
    private text: string = "Hello";
    @BindStyle("text", "fontWeight")
    private fontWeight: string = "";

    private bulbSize: number = 0;
    private bulbSpacingX: number = 0;
    private bulbSpacingY: number = 0;
    private bulbs: BulbComponent[] = [];
    private currentBulbNumber: number = 0;

    constructor(text: string, width: number = 600) {
        super(html, css);
        this.text = text;
        this.height = Math.floor(width / 2);
        this.bulbSize = Math.floor(width * 0.07);
        this.bulbSpacingX = Math.floor(this.width / 30);
        this.bulbSpacingY = Math.floor((this.height * 11) / 150);
        for (let i = 0; i < 10; i++) {
            const component = new BulbComponent(
                this.bulbSize,
                (this.bulbSize + this.bulbSpacingX) * i,
                0,
            );
            this.bulbs.push(component);
            this.addComponent(component, "outer");
        }
        for (let i = 1; i < 5; i++) {
            const component = new BulbComponent(
                this.bulbSize,
                (this.bulbSize + this.bulbSpacingX) * 9,
                (this.bulbSize + this.bulbSpacingY) * i,
            );
            this.bulbs.push(component);
            this.addComponent(component, "outer");
        }
        for (let i = 8; i >= 0; i--) {
            const component = new BulbComponent(
                this.bulbSize,
                (this.bulbSize + this.bulbSpacingX) * i,
                (this.bulbSize + this.bulbSpacingY) * 4,
            );
            this.bulbs.push(component);
            this.addComponent(component, "outer");
        }
        for (let i = 3; i > 0; i--) {
            const component = new BulbComponent(
                this.bulbSize,
                0,
                (this.bulbSize + this.bulbSpacingY) * i,
            );
            this.bulbs.push(component);
            this.addComponent(component, "outer");
        }
    }
    @Timer(100)
    private update() {
        this.bulbs[this.currentBulbNumber].toggle();
        this.currentBulbNumber++;
        if (this.currentBulbNumber >= this.bulbs.length) {
            this.currentBulbNumber = 0;
        }
        if (this.fontWeight === "bold") this.fontWeight = "normal";
        else this.fontWeight = "bold";
    }
}
