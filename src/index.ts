import { sumOnly, sumWithDiscount } from "./domain/calc";

let printMessage = (msg: string): void => console.log(`Mensagem: ${msg}`);

let msg = "Olá Switch-QA";
printMessage(msg);

let list: number[] = [1, 2, 3, 4];
let total = sumOnly(...list);
let disc: number = 0.3;
let discountedTotal = sumWithDiscount(disc, list);
console.log(total.toString());
console.log(discountedTotal);

// student one: please replace by console.log
// student two: add to calc.ts a function sumWithDiscount(disc, valores)
