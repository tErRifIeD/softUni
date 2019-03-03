function Solve(args) {
    var contractTime = String(args[0]);
    var contractType = String(args[1]);
    var varDessert = String(args[2]);
    var monthsPaid = Number(args[3]);

    var arrOne = [9.98, 18.99, 25.98, 35.99];
    var arrTwo = [8.58, 17.09, 23.59, 31.79];

    if (contractTime == 'one') {
        switch(contractType) {
            case 'Small':
                price = arrOne[0];
                break;
            case 'Middle':
                price = arrOne[1];
                break;
            case 'Large':
                price = arrOne[2];
                break;
            case 'ExtraLarge':
                price = arrOne[3];
                break;
        }
        if (varDessert == 'yes') {
            if (price <= 10) {
                price += 5.50;
            } else if (price > 10 && price <= 30) {
                price += 4.35;
            } else if (price > 30) {
                price += 3.85;
            }
        }
        price *= monthsPaid;

    } else if (contractTime == 'two') {
        switch(contractType) {
            case 'Small':
                price = arrTwo[0];
                break;
            case 'Middle':
                price = arrTwo[1];
                break;
            case 'Large':
                price = arrTwo[2];
                break;
            case 'ExtraLarge':
                price = arrTwo[3];
                break;
        }
        if (varDessert == 'yes') {
            if (price <= 10) {
                price += 5.50;
            } else if (price > 10 && price <= 30) {
                price += 4.35;
            } else if (price > 30) {
                price += 3.85;
            }
        }
        price *= 0.9625;
        price *= monthsPaid;
    }
    console.log(price.toFixed(2) + ' lv.');
};

Solve(['two', 'ExtraLarge', 'yes', 20]);