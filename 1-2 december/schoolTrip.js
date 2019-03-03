function Solve(args) {
    var daysGone = Number(args[0]);
    var foodLeft = Number(args[1]);
    var dog1Food = Number(args[2]);
    var dog2Food = Number(args[3]);
    var dog3Food = Number(args[4]);

    var totalFood,
        foodDiff;

    neededFood = (dog1Food + dog2Food + dog3Food) * daysGone;
    foodDiff = Math.abs(neededFood - foodLeft);

    if (foodLeft >= neededFood) {
        console.log(Math.floor(foodDiff) + ' kilos of food left.');
    } else {
        console.log(Math.ceil(foodDiff) + ' more kilos of food are needed.');
    }
};

Solve([2, 10, 1, 1, 2]);
Solve([5, 10, 2.1, 0.8, 11]);
Solve([1, 5, 3, 1, 1]);
