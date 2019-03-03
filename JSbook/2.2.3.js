function solve(args) {
    let N = Number(args[0]);
    let W = Number(args[1]);
    let L = Number(args[2]);
    let M = Number(args[3]);
    let O = Number(args[4]);

    let area = N * N;
    let benchArea = M * O;
    let singleTileArea = W * L;

    let totalTiles = (area - benchArea) / singleTileArea;
    let timeNeeded = totalTiles * 0.2;

    console.log(Math.round(totalTiles * 100) / 100);
    console.log(Math.round(timeNeeded * 100) / 100);
}

solve([20, 5, 4, 1, 2]);
solve([40, 0.8, 0.6, 3, 5]);
