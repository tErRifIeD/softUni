function Solve(args) {
    let month = args[0];
    let hoursSpent = Number(args[1]);
    let groupNumber = Number(args[2]);
    let timeOfDay = args[3];

    if (month === 'march' || month === 'april' || month === 'may') {
        if (timeOfDay === 'day') {
            price = 10.50;
        } else {
            price = 8.40;
        }
    } else if (month === 'june' || month === 'july' || month === 'august') {
        if (timeOfDay === 'day') {
            price = 12.60;
        } else {
            price = 10.20;
        }
    }

    if (groupNumber >= 4) {
        price *= 0.9;
    }

    if (hoursSpent >= 5) {
        price *= 0.5;
    }

    console.log(`Price per person for one hour: ${price.toFixed(2)}`);
    console.log(`Total cost of the visit: ${(price * groupNumber * hoursSpent).toFixed(2)}`)
}

Solve(['march', 3, 3, 'day']);
Solve(['july', 5, 5, 'night']);
