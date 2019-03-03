function Solve(args) {
    var reservedDays = Number(args[0]);
    var roomType = String(args[1]);
    var assessment = String(args[2]);

    var singleRoomPr = 18.00,
        apartmentPr = 25.00,
        presidentsPr = 35.00;

    var apartmDisc = [30, 35, 50];
    var presidDisc = [10, 15, 20];
    var price = 0;

    if (roomType == 'room for one person') {
        price = singleRoomPr * (reservedDays - 1);
    } else if ( roomType == 'apartment') {
        price = apartmentPr * (reservedDays - 1);
        if (reservedDays < 10) {
            price *= 0.70;
        } else if (reservedDays >= 10 && reservedDays <= 15) {
            price *= 0.65;
        } else if ( reservedDays > 15) {
            price *= 0.50;
        }
    } else if ( roomType == 'president apartment') {
        price = presidentsPr * (reservedDays - 1);
        if (reservedDays < 10) {
            price *= 0.90;
        } else if (reservedDays >= 10 && reservedDays <= 15) {
            price *= 0.85;
        } else if ( reservedDays > 15) {
            price *= 0.80;
        }
    }
    
    if (assessment == 'positive') {
        price *= 1.25;
    } else if (assessment == 'negative') {
        price *= 0.90;
    }

    console.log(price.toFixed(2));
};

Solve([14, 'apartment', 'positive']);
Solve([30, 'president apartment', 'negative']);
Solve([12, 'room for one person', 'positive']);
Solve([2, 'apartment', 'positive']);