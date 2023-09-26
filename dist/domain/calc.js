function calcArraySum(array) {
    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
        arraySum += array[i];
    }
    return arraySum;
}
console.log(calcArraySum([1, 3, 6]));
