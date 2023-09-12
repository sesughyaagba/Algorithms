function solution(string) {
    let splitString = string.split("");
    let capString = string.toUpperCase().split("");
    for (i = splitString.length - 1; i >= 0; i--) {
        if (splitString[i] === capString[i]) {
            splitString.splice(i, 0, ' ');
        }
    }
    return splitString.join("");
}
