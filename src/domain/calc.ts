export function sumOnly(...parcelas: number[]): number {
  return parcelas.reduce((total, parcela) => total + parcela);
}

// student two: add to calc.ts a function sumWithDiscount(disc, valores)
export function sumWithDiscount(disc: number, valores: number[]): number {
  let result: number = 0;

  result = sumOnly(...valores) * (1 - disc);

  return result;
}
