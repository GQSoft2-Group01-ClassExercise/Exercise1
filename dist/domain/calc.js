"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumWithDiscount = exports.sumOnly = void 0;
function sumOnly(...parcelas) {
    return parcelas.reduce((total, parcela) => total + parcela);
}
exports.sumOnly = sumOnly;
// student two: add to calc.ts a function sumWithDiscount(disc, valores)
function sumWithDiscount(disc, valores) {
    let result = 0;
    result = sumOnly(...valores) * (1 - disc);
    return result;
}
exports.sumWithDiscount = sumWithDiscount;
