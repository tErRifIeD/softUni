function solve(args) {
    let workDays = Number(args[0]);
    let dailyMoney = Number(args[1]);
    let dollarPr = Number(args[2]);

    let totalMoney = (workDays * dailyMoney) * dollarPr * 14.5;
    let taxes = totalMoney * 0.25;

    console.log(`${((totalMoney - taxes) / 365).toFixed(2)}`);
}

solve([21, 75.00, 1.59]);
solve([15, 105, 1.71]);
