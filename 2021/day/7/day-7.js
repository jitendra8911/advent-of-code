import {testData, input} from "./input"

const part1Sol = () => {
    const data = input;
    data.sort((a,b) => a - b);
    const pos = data[data.length / 2];
    let cost = 0;
    for (let i = 0; i < data.length; i++) {
        cost += Math.abs(pos - data[i]);
    }
    console.log(cost);
    return cost;
};

const part2Sol = () => {
    const data = input;
    data.sort((a,b) => a - b);
    let cost = Infinity;
    let step = 0;
    const min = data[0];
    const max = data[data.length - 1];
    for (let i = 1; i <= max; i++) {
        let sum = 0;
        for (let j = 0; j < data.length; j++) {
            const diff = Math.abs(i - data[j]);
            sum += ((diff * (diff + 1))/2)
        }
        if (cost > sum) {
            cost = sum;
            step = i;
        }
    }

    console.log(cost);
    return cost;
};

part2Sol();