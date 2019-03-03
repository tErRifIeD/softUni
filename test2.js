function solve() {
    var result = '';

    for (let i = 0; i < 3; i += 1) {
        result += '\n';
        for (let j = 1; j <= 3; j += 1) {
            result += (i + j);
        }
    }

    console.log(result);
}

solve ();