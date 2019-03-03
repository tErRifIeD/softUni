function Solve(args) {
    let n = Number(args.shift());

    let firstNum = Math.floor((n / 100) % 10);
    let secondNum = Math.floor((n / 10) % 10);
    let thirdNum = n % 10;

    let N = firstNum + secondNum;
    let M = firstNum + thirdNum;

    for (let i = 0; i < N; i++) {
        let result = "";
        for (let j = 0; j < M; j++) {
            if (n % 5 === 0) {
                n -= firstNum;
            } else if (n % 3 === 0) {
                n -= secondNum;
            } else if (n % 5 != 0 && n % 3 != 0) {
                n += thirdNum;
            }

            result += n + " ";
        }
        console.log(result);
    }
}

Solve([376]);