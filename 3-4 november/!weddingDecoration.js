function Solve(args) {
    var balloonPr = 0.10,
        flowerPr = 1.50,
        candlePr = 0.50,
        ribbonPr = 2.00;

    var budget = Number(args[0]);
    var balloons = 0,
        flowers = 0,
        candles = 0, 
        ribbon = 0,
        price = 0;

    for (let i = 1; i < args.length; i += 1) {
        if (args[i] != 'stop' && budget >= price) {
            switch (args[i]) {
                case 'balloons':
                    balloons += +args[i+1];
                    price += args[i+1] * balloonPr;
                    break;
                case 'flowers':
                    flowers += +args[i+1];
                    price += args[i+1] * flowerPr;
                    break;
                case 'candles':
                    candles += +args[i+1];
                    price += args[i+1] * candlePr;
                    break;
                case 'ribbon':
                    ribbon += +args[i+1];
                    price += args[i+1] * ribbonPr;
                    break;
            }
            if ((budget - price) < 0) {
                console.log('All money is spent!');
                console.log('Purchased decoration is ' + balloons + ' balloons, ' + ribbon + ' m ribbon, ' + flowers + ' flowers and ' + candles + ' candles.');
            }
        }
        if (args[i] == 'stop') {
            console.log('Spend money: ' + price.toFixed(2));
            console.log('Money left: ' + (budget - price).toFixed(2));
            console.log('Purchased decoration is ' + balloons + ' balloons, ' + ribbon + ' m ribbon, ' + flowers + ' flowers and ' + candles + ' candles.');
        }
    }
};

Solve([30, 'flowers', 10, 'balloons', 20, 'candles', 10, 'ribbon', 8]);
// Solve([500, 'balloons', 30, 'candles', 20, 'flowers', 100, 'ribbon', 20, 'stop']);
// Solve([365.5, 'flowers', 15, 'balloons', 10, 'candles', 5, 'ribbon', 6, 'ribbon', 4, 'balloons', 15, 'candles', 9, 'stop']);
