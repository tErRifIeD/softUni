function Solve(args) {
    let country = args[0];
    let souvenirType = args[1];
    let souvenirCount = Number(args[2]);

    let flags = [3.25, 4.20, 2.75, 3.10];
    let caps = [7.20, 8.50, 6.90, 6.50];
    let posters = [5.10, 5.35, 4.95, 4.80];
    let stickers = [1.25, 1.20, 1.10, 0.90];
    let totalPrice = 0;

    if (country === 'Argentina') {
        if (souvenirType === 'flags') {
            totalPrice = +flags[0] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else if (souvenirType === 'caps') {
            totalPrice = +caps[0] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else if (souvenirType === 'posters') {
            totalPrice = +posters[0] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else if (souvenirType === 'stickers') {
            totalPrice = +stickers[0] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else {
            console.log('Invalid stock!');
        }
    } else if (country === 'Brazil') {
        if (souvenirType === 'flags') {
            totalPrice = +flags[1] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else if (souvenirType === 'caps') {
            totalPrice = +caps[1] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else if (souvenirType === 'posters') {
            totalPrice = +posters[1] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else if (souvenirType === 'stickers') {
            totalPrice = +stickers[1] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else {
            console.log('Invalid stock!');
        }
    } else if (country === 'Croatia') {
        if (souvenirType === 'flags') {
            totalPrice = +flags[2] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else if (souvenirType === 'caps') {
            totalPrice = +caps[2] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else if (souvenirType === 'posters') {
            totalPrice = +posters[2] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else if (souvenirType === 'stickers') {
            totalPrice = +stickers[2] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else {
            console.log('Invalid stock!');
        }
    } else if (country === 'Denmark') {
        if (souvenirType === 'flags') {
            totalPrice = +flags[3] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else if (souvenirType === 'caps') {
            totalPrice = +caps[3] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else if (souvenirType === 'posters') {
            totalPrice = +posters[3] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else if (souvenirType === 'stickers') {
            totalPrice = +stickers[3] * souvenirCount;
            console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${country} for ${totalPrice.toFixed(2)} lv.`);
        } else {
            console.log('Invalid stock!');
        }
    } else {
        console.log('Invalid country!');
    }
}

// Solve(['Brazil', 'stickers', 5]);
// Solve(['Denmark', 'caps', 8]);
Solve(['Denmark', 'capsa', 18]);