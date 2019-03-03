function Solve(args) {
    let limitNum1 = Number(args[0]);
    let limitNum2 = Number(args[1]);
    let limitNum3 = Number(args[2]);

    for (let i = 2; i <= limitNum1; i += 2) {
        for (let j = 2; j <= limitNum2; j += 1) {
            for (let k = 2; k <= limitNum3; k += 2) {
                if ((j % 2 != 0 && j <= 7) || j === 2 ) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}

// Solve([3, 5, 5]);
Solve([8, 2, 8]);
// Solve([9,9,9]);

