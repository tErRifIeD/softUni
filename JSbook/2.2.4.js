function solve(args) {
    let bitcoinCount = Number(args[0]);
    let iuansCount = Number(args[1]);
    let commision = Number(args[2]) / 100;

    let bitcoin = 1168;
    let dollar = 1.76;
    let iuan = 0.15 * dollar;
    let euro = 1.95;

    let totalEuros = ((bitcoinCount * bitcoin + iuansCount * iuan) *  (1 - commision) / euro);

    console.log(totalEuros.toFixed(2));
}

solve([1, 5, 5]);
solve([20, 5678, 2.4]);
