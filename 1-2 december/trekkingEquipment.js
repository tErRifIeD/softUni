function Solve(args) {
    var alpinists = Number(args[0]);
    var carabiners = Number(args[1]);
    var ropes = Number(args[2]);
    var pickels = Number(args[3]);

    var carabinerPr = 36.00,
        ropePr = 3.60,
        pickelPr = 19.80;
    var totalSum;

    totalSum = (carabiners * carabinerPr + ropes * ropePr + pickels * pickelPr) * alpinists * 1.20;

    console.log(totalSum.toFixed(2));
};

Solve([20, 14, 30, 6]);
Solve([131, 9, 33, 46]);