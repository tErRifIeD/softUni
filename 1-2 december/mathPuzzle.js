function Solve(args) {
    let keyNumber = Number(args[0]);
    let count = 0;

    for(let i = 1; i <= 30; i += 1) {
        for(let j = 1; j <= 30; j += 1) {
            for(let k = 1; k <= 30; k += 1) {
                if (i < j && j < k) {
                    if((i + j + k) === keyNumber) {
                        console.log(`${i} + ${j} + ${k} = ${keyNumber}`);
                        count += 1;
                    }
                } else if (i > j && j > k) {
                    if ((i * j * k) === keyNumber) {
                        console.log(`${i} * ${j} * ${k} = ${keyNumber}`);
                        count += 1;
                    }
                }
            }
        }
    }
    if (count === 0) {
        console.log('No!');
    }
}

Solve([93]);
// Solve([5, 25, 41, 31, 250, 6]);