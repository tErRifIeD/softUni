function Solve(args) {
    let foodBought = Number(args[0]);
    let foodEaten = 0;
     
    for(let i = 1; i < args.length - 1; i += 1) {
        foodEaten += Number(args[i]);
    }

    foodBought = foodBought * 1000;

    if (foodBought >= foodEaten) {
        console.log(`Food is enough! Leftovers: ${foodBought - foodEaten} grams.`);
    } else {
        console.log(`Food is not enough. You need ${foodEaten - foodBought} grams more.`);
    }
};

Solve([4, 130, 345, 400, 180, 230, 120, 'Adopted']);
Solve([3, 1000, 1000, 1000, 'Adopted']);
Solve([2, 999, 456, 999, 999, 123, 456, 'Adopted']);

