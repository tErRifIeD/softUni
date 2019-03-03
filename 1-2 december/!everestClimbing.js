function Solve(args) {
    var isSleeping = String(args[0]);
    var metersPassed = Number(args[1]);
    var daysPassed = 1,
        height = 5364;

    for (let i = 0; i < args.length; i += 1) {
        if (args[i] != 'END') {
            if (args[i] == 'Yes') {
                daysPassed += 1;
                height += +args[i + 1];
            } else if (args[i] == 'No') {
                height += +args[i + 1];
            }
            if (height >= 8848 && daysPassed < 5) {
                console.log('Goal reached for ' + daysPassed + ' days!');
                break;
            } else if (height < 8848 && daysPassed > 4) {
                console.log('Failed!');
                console.log(height);
                break;
            }
        } else if (args[i] == 'END') {
            if (height > 8848) {
                console.log('Goal reached for ' + daysPassed + ' days!');
                break;
            } else {
                console.log('Failed!');
                console.log(height);
                break;
            }
        }
    }
};

Solve(['Yes', 1000, 'Yes', 945, 'No', 1200, 'END']);
Solve(['Yes', 1254, 'Yes', 1402, 'No', 250, 'Yes', 635]);
Solve(['Yes', 700, 'END']);
Solve(['Yes', 535, 'Yes', 849, 'Yes', 499, 'Yes', 400, 'Yes', 500]);
