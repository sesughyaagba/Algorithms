function selectCleanPairs(arr, num) {
    let pairOfSock = [];
    let checkPairs = [];
    let declineCheck = [];

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (declineCheck.includes(val)) {
        } else {
            if (checkPairs.includes(val)) {
                let pair = [val, val];
                pairOfSock.push(pair);
                declineCheck.push(val);
                // checkPairs.splice(checkPairs.indexOf(val), 1);
            } else {
                checkPairs.push(val);
            }
        }

        if (pairOfSock.length === num) return pairOfSock;
    }

    return pairOfSock;
}

console.log(
    selectCleanPairs(
        [
            2, 4, 6, 7, 8, -2, 1, 4, 5, 6, 7, 8, 93, 4, 5, 6, 1, 3, 5, 7, 8, 9, 5, 4,
            6, 7, 9, 4,
        ],
        7
    )
);

// console.log(
//   selectCleanPairs(
//     [
//       2, 4, 6, 7, 8, 2, 1, 4, 5, 6, 7, 8, 93, 4, 2, 5, 6, 1, 2, 3, 5, 7, 8, 9,
//       2, 5, 4, 6, 7, 9, 4,
//     ],
//     7
//   )
// );

// [
//   [ 2, 2 ], [ 4, 4 ],
//   [ 6, 6 ], [ 7, 7 ],
//   [ 8, 8 ], [ 5, 5 ],
//   [ 1, 1 ], [ 9, 9 ]
// ]