function solve(args) {
    let vegesPr = Number(args[0]);
    let fruitsPr = Number(args[1]);
    let vegesWeight = Number(args[2]);
    let fruitsWeight = Number(args[3]);

    console.log((vegesPr * vegesWeight + fruitsPr * fruitsWeight) / 1.94);
}

solve([0.194, 19.4, 10, 10]);
solve([1.5, 2.5, 10, 10]);
