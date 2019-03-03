function Solve(args) {
    let computerCount = Number(args[0]);
    
    let rating = [],
    possibleSell = [],
    sells = [],
    ratingNum = [],
    totalSells = 0,
    sumRating = 0,
    averageRating = 0;

    for (let i = 0; i < computerCount; i += 1) {
        ratingNum[i] = Number(args[i+1]);
        rating[i] = ratingNum[i] % 10;
        possibleSell[i] = parseInt(ratingNum[i]/10);

        if (rating[i] === 2) {
            sells[i] = possibleSell[i] * 0;
        } else if (rating[i] === 3) {
            sells[i] = possibleSell[i] * 0.5;
        } else if (rating[i] === 4) {
            sells[i] = possibleSell[i] * 0.7;
        } else if (rating[i] === 5) {
            sells[i] = possibleSell[i] * 0.85;
        } else {
            sells[i] = possibleSell[i];
        }

    }

    for(let i = 0; i < computerCount; i += 1) {
        totalSells += +sells[i];
        sumRating += +rating[i]; 
    }

    averageRating = sumRating / computerCount;

    console.log(`${totalSells.toFixed(2)}`);
    console.log(`${averageRating.toFixed(2)}`);
}

Solve([3, 103, 103, 103]);
Solve([5, 122, 156, 202, 214, 185]);
Solve([2, 204, 206]);
