function Solve(args) {
    var menClients = Number(args[0]);
    var womenClients = Number(args[1]);
    var tables = Number(args[2]);
    var result = '';
    
    for (let i = 1; i <= menClients; i += 1) {
        for (let j = 1; j <= womenClients; j += 1) {
            if (tables > 0) {
                result += '(' + i + ' <-> ' + j + ') ';
                tables -= 1;
            }
        }  
    }
    console.log(result);
};

Solve([5, 8, 40]);