function Solve(args) {
    let allGroups = Number(args[0]);
    let people = 0;
    let moussala = 0,
        monblan = 0,
        kilimandjaro = 0,
        k2 = 0,
        everest = 0;

    for(let i = 1; i < args.length; i += 1) {
        if (args[i] <= 5) {
            moussala += +args[i];
        } else if (6 <= args[i] && args[i] <= 12) {
            monblan += +args[i];
        } else if (13 <= args[i] && args[i] <= 25) {
            kilimandjaro += +args[i];
        } else if (26 <= args[i] && args[i] <= 40) {
            k2 += +args[i];
        } else if (args[i] > 40) {
            everest += +args[i];
        }
        people += +args[i];
    }
    console.log(`${(moussala / people * 100).toFixed(2)}%`);
    console.log(`${(monblan / people * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / people * 100).toFixed(2)}%`);
    console.log(`${(k2 / people * 100).toFixed(2)}%`);
    console.log(`${(everest / people * 100).toFixed(2)}%`);
}

Solve([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78]);
// Solve([5, 25, 41, 31, 250, 6]);