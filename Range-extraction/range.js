function solution(list) {
    if (list.length === 0) {
        return "";
    }

    let result = [];
    let start = list[0];
    let end = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] === list[i - 1] + 1) {
            end = list[i];
        } else {
            if (start === end) {
                result.push(start.toString());
            } else if (end === start + 1) {
                result.push(start + "," + end);
            } else {
                result.push(start + "-" + end);
            }
            start = end = list[i];
        }
    }

    if (start === end) {
        result.push(start.toString());
    } else if (end === start + 1) {
        result.push(start + "," + end);
    } else {
        result.push(start + "-" + end);
    }

    return result.join(",");
}
