function Solve(args) {
    var pencils = Number(args[0]);
    var markers = Number(args[1]);
    var cleaner = Number(args[2]);
    var discount = Number(args[3]);

    var pencilsPr = 5.80,
        markersPr = 7.20,
        cleanerPr = 1.20;
    var totalSum;

    totalSum = (pencils * pencilsPr + markers * markersPr + cleaner * cleanerPr) * (100 - discount) / 100;
    
    console.log(totalSum.toFixed(3));
};

Solve([2, 3, 2.5, 25]);
Solve([4, 2, 5, 13]);