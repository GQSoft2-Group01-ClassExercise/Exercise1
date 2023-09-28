import { sumOnly, sumWithDiscount } from "../domain/calc";

test("verifica resultado", () => {
  let result = sumOnly(1, 2, 3, 4, 5);
  expect(result).toBe(15);
});

test("Verifica desconto", () => {
  let result = sumWithDiscount(0.3, [1, 2, 3, 4]);
  expect(result).toBe(7);
});
