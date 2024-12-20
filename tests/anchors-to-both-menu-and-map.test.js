import { beforeEach, describe, expect, test } from "@jest/globals";
import { maps } from "./mocks/maps.js";
import { initDom } from "./utils/init-dom.js";
import { isMapLoaded } from "./utils/is-map-loaded.js";
import { isMenuLoaded } from "./utils/is-menu-loaded.js";
import { mockFetch } from "./utils/mock-fetch.js";

mockFetch();

describe("anchors to both menu and map", () => {
    beforeEach(async () => {
        const test = document.createElement("a");
        test.setAttribute("tomenu", "articles-index");
        test.setAttribute("tomap", "map2");
        await initDom([test]);
        test.click();
    });

    test("should update search params and load map and menu", () => {
        expect(isMenuLoaded("articles-index")).toBe(true);
        expect(isMapLoaded("map2", maps["map2"])).toBe(true);
    });
});
