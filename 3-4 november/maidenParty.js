function Solve(args) {
    let partyPr = Number(args[0]);
    let loveMessC = Number(args[1]);
    let waxRosesC = Number(args[2]);
    let keyHolderC = Number(args[3]);
    let caricatC = Number(args[4]);
    let luckyC = Number(args[5]);

    var count = loveMessC + waxRosesC + keyHolderC + caricatC + luckyC;
    var spentMoney = loveMessC * 0.6 + waxRosesC * 7.2 + keyHolderC * 3.6 + caricatC * 18.2 + luckyC * 22;

    if (count > 25) {
        spentMoney = spentMoney * 0.65;
    }
    let profit = spentMoney * 0.1;

    if (partyPr < spentMoney) {
        profit = (spentMoney - partyPr - profit).toFixed(2);
        console.log('Yes! ' + profit + ' lv left.');
    } else {
        let moneyNeeded = (profit + partyPr - spentMoney).toFixed(2);
        console.log('Not enough money! ' + moneyNeeded + ' lv needed.');
    }
}

Solve([40.8, 20, 25, 30, 50, 10]);