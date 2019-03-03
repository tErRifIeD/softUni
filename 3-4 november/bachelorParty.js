function Solve(args) {
    var singerPrice= String(args[0]);
    var guestNumber = [];
    var totalGuests = 0;
    var totalPrice = 0;

    for (let i = 1; i < args.length; i += 1) {
        if (args[i] != 'The restaurant is full') {
            guestNumber.push(Number(args[i]));
        }
    }

    for (let i = 0; i < guestNumber.length; i += 1) {
        if (guestNumber[i] < 5) {
            totalPrice += guestNumber[i] * 100;
        } else if (guestNumber[i] >= 5) {
            totalPrice += guestNumber[i] * 70;
        }
        totalGuests += guestNumber[i];
    }

    if (totalPrice >= singerPrice) {
        console.log('You have ' + totalGuests + ' guests and ' + (totalPrice - singerPrice) + ' leva left.');
    } else {
        console.log('You have ' + totalGuests + ' guests and ' + totalPrice + ' leva income, but no singer.');
    }
    
};

Solve([3200, 5, 12, 6, 6, 12, 'The restaurant is full']);