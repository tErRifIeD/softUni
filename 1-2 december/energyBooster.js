function Solve(args) {
    let fruit = args[0];
    let setSize = args[1];
    let setCount = Number(args[2]);

    let smallGels = [56, 36.66, 42.10, 20];
    let bigGels = [28.70, 19.60, 24.80, 15.20];
    let price = 0;

    if (setSize === 'small') {
        if (fruit === 'Watermelon') {
            price += (smallGels[0] * setCount * 2);
        } else if (fruit === 'Mango'){
            price += (smallGels[1] * setCount * 2);
        } else if (fruit === 'Pineapple') {
            price += (smallGels[2] * setCount * 2);
        } else if (fruit === 'Raspberry') {
            price += (smallGels[3] * setCount * 2);
        }
    } else if (setSize === 'big') {
        if (fruit === 'Watermelon') {
            price += (bigGels[0] * setCount * 5);
        } else if (fruit === 'Mango'){
            price += (bigGels[1] * setCount * 5);
        } else if (fruit === 'Pineapple') {
            price += (bigGels[2] * setCount * 5);
        } else if (fruit === 'Raspberry') {
            price += (bigGels[3] * setCount * 5);
        }
    }

    if (400 <= price && price <= 1000) {
        price *= 0.85;
    } else if (price > 1000) {
        price *= 0.50;
    }
    console.log(`${price.toFixed(2)} lv.`);
};

Solve(['Watermellon', 'big', 4]);
Solve(['Pineapple', 'small', 1]);
Solve(['Raspberry', 'small', 50]);
Solve(['Mango', 'big', 8]);
