function Solve(args) {
    let K = Number(args[0]);
    let L = Number(args[1]);
    let M = Number(args[2]);
    let N = Number(args[3]);
    let validNums = 0;

    for (let i = K; i <= 8; i += 1) {
        for (let j = 9; j >= L; j -= 1) {
            for (let x = M; x <= 8; x += 1) {
                for (let y = 9; y >= N; y -= 1) {
                    if ((i % 2 === 0 && x % 2 === 0) && (j % 2 != 0 && y % 2 != 0)) {
                        if (validNums < 6) {
                            if (`${i}${j}` === `${x}${y}`) {
                                console.log(`Cannot change the same player.`);
                            } else {
                                validNums += 1;
                                console.log(`${i}${j} - ${x}${y}`);
                            }
                        }
                    }
                }
            }
        }
    }
}

Solve([6, 7, 5, 6]);

