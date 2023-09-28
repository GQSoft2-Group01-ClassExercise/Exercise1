"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./domain/calc");
let printMessage = (msg) => console.log(`Mensagem: ${msg}`);
let msg = "Olá Switch-QA";
printMessage(msg);
let list = [1, 2, 3, 4];
let total = (0, calc_1.sumOnly)(...list);
let disc = 0.3;
let discountedTotal = (0, calc_1.sumWithDiscount)(disc, list);
console.log(total.toString());
console.log(discountedTotal);
// student one: please replace by console.log
// student two: add to calc.ts a function sumWithDiscount(disc, valores)
