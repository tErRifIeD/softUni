function Solve(args) {
    let rowNumber = Number(args[0]);
    let occurance = 0;

    for (let i = 66; i <= 76; i += 2) {
        for (let j = 102; j >= 97; j -= 1) {
            for (let k = 65; k <= 67; k += 1) {
                for (let l = 1; l <= 10; l += 1) {
                    for (let m = 10; m >= 1; m -= 1) {
                        occurance += 1;
                        if (occurance === rowNumber) {
                            console.log(`Ticket combination: ${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}${l}${m}`);
                            console.log(`Prize: ${i + j + k + l + m} lv.`);
                        }
                    }
                }
            }
        }
    }
}

Solve([17]);

