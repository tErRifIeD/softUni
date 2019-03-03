function Solve(args) {
    let whiskeyPr = Number(args[0]);
    let waterVol = Number(args[1]);
    let wineVol = Number(args[2]);
    let champVol = Number(args[3]);
    let whiskeyVol = Number(args[4]);

    let champPr = whiskeyPr * 0.5;
    let winePr = champPr * 0.4;
    let waterPr = champPr * 0.1;

    let sum = (whiskeyPr * whiskeyVol + waterPr * waterVol + winePr * wineVol + champPr * champVol).toFixed(2);
    
    console.log(sum);
}

Solve([50, 10, 3.5, 6.5, 1]);