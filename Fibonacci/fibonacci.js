function productFib(prod) {
    //initializing the fibonacci series
    let a = 0;
    let b = 1;

    while (a * b < prod) {
        const nxt = a + b;
        a = b;
        nxt = a + b;
    }
    if (a * b === prod) {
        return [a, b, true]
    } else {
        return [a, b, false]
    }
}