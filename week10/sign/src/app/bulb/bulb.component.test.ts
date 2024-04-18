import { describe, expect, test, beforeAll } from "@jest/globals";
import { BulbComponent } from "./bulb.component";
import { bootstrap } from "@gsilber/webez";

describe("BulbComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<BulbComponent>(BulbComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(BulbComponent);
        });
    });
});
