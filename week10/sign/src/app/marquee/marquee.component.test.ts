import { describe, expect, test, beforeAll } from "@jest/globals";
import { MarqueeComponent } from "./marquee.component";
import { bootstrap } from "@gsilber/webez";

describe("MarqueeComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<MarqueeComponent>(MarqueeComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(MarqueeComponent);
        });
    });
});
