function Solve(args) {
    var guests = Number(args[0]);
    var gifts = Number(args[1]);
    var giftsArr = [];

    var money = 0,
        electric = 0,
        vouchers = 0,
        others = 0,
        percentage;

    for (let i = 0; i < gifts; i += 1) {
        giftsArr.push(args[i+2]);
        switch(giftsArr[i]) {
            case 'A':
                money += 1;
                break;
            case 'B':
                electric += 1;
                break;
            case 'V':
                vouchers += 1;
                break;
            case 'G':
                others += 1;
                break;
        }
    }
    console.log((money / gifts * 100).toFixed(2) + '%');
    console.log((electric / gifts * 100).toFixed(2) + '%');
    console.log((vouchers / gifts * 100).toFixed(2) + '%');
    console.log((others / gifts * 100).toFixed(2) + '%');
    console.log((gifts / guests * 100).toFixed(2) + '%');
};

Solve([76, 10, 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);
Solve([93, 16, 'A', 'V', 'G', 'G', 'B', 'B', 'G', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'B', 'A']);