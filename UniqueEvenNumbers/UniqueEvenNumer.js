function uniqueEvenNumber(num) {
    let evenNumbers = num.filter(a => a % 2 === 0);
    console.log(evenNumbers);
    let uniqueEvenNumbers = new Set(evenNumbers);
    return [...uniqueEvenNumbers];
}
console.log(uniqueEvenNumber([1, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 89, 22, 34, 56, 45, 23, 45, 67, 89, 22, 34, 56, 45, 23, 45, 67, 89]));