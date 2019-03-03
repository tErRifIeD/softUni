function Solve(args) {
    let sectorCount = Number(args[0]);
    let stadiumCapacity = Number(args[1]);
    let ticketPrice = Number(args[2]);

    let income = stadiumCapacity * ticketPrice;
    console.log(`Total income - ${income.toFixed(2)} BGN`);
    console.log(`Money for charity - ${((income - (income / sectorCount * 0.75)) / 8).toFixed(2)} BGN`);
}

Solve([4, 5000, 5]);
Solve([8, 10000, 3.25]);
// Solve([9,9,9]);