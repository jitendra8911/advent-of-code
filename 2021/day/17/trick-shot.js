const part2Sol = (x1, x2, y1, y2) => {
    let startX = 0;
    const pairs = [];
    for (let n = 0; n < x1; n++) {
        if ((n * (n + 1)) / 2 >= x1) {
            startX = n;
            break
        }
    }

    const endY = -(y1 + 1);
    let total = 0;
    for (let i = y1; i <= endY; i++) {
        // count number of iterations i takes to reach between y1 and y2
        const possibleIterations = [];
        let countOfYIterations = 0;
        if (i > y2) {
            countOfYIterations = i > 0 ? 2 * i + 1 : 0;
            let y = 0;
            let temp = i - countOfYIterations;
            while (y > y2) {
                y = y + temp;
                temp -= 1;
                countOfYIterations++;
            }
            while (y >= y1 && y <= y2) {
                possibleIterations.push(countOfYIterations);
                countOfYIterations++;
                y = y + temp;
                temp -= 1;
            }
        }

        for (let j = startX; j <= x2; j++) {
            if (j >= x1 && j <= x2 && i >= y1 && i <= y2) {
                pairs.push({j, i});
                total++;
                continue;
            }


            for (let iter = 0; iter < possibleIterations.length; iter++) {
                let x = 0;
                let temp = j;
                for (let k = 1; k <= possibleIterations[iter]; k++) {
                    if (temp !== 0) {
                        x = x + temp;
                        temp--;
                    }
                }
                if (x >= x1 && x <= x2) {
                    pairs.push({j, i});
                    total++;
                    break;
                }
            }

        }
    }

    console.log(pairs);
    console.log(total);


};


part2Sol(124, 174, -123, -86);

//part2Sol(20, 30, -10, -5);





