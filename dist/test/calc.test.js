"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("../domain/calc");
test("verifica resultado", () => {
    let result = (0, calc_1.sumOnly)(1, 2, 3, 4, 5);
    expect(result).toBe(15);
});
