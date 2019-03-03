function Solve(args) {
    let a = Number(args[0]);
    let b = Number(args[1]);
    let maxPasswords = Number(args[2]);

    let i = 35;
    let j = 64;
    let k = 0;
    let passwordList = '';

    for (let x = 1; x <= a; x += 1) {
        for (let y = 1; y <= b; y += 1) {
            while (k < maxPasswords) {
                passwordList += `${String.fromCharCode(i)}${String.fromCharCode(j)}${x}${y}${String.fromCharCode(j)}${String.fromCharCode(i)}|`;
                if (i < 55) {
                    i++;
                } else {
                    i = 35;
                }
                if (j < 96) {
                    j++;
                } else {
                    j = 64;
                }
                k++;
                break;
            }
        }
    }

console.log(passwordList);
}

// Solve([2, 3, 10]);
Solve([20, 50, 10]);
