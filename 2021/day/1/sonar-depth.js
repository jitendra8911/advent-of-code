import part1TestInput from './test-data';


const part1Solution = () => {
    let count = 0;
    for (let i = 1; i < part1TestInput.length; i++) {
        if (part1TestInput[i] > part1TestInput[i-1]) count++;
    }

    return count;
};


const part2Solution = () => {
    let count = 0;
    let prevSum = part1TestInput[0] + part1TestInput[1] + part1TestInput[2];
    for (let i = 1; i < part1TestInput.length - (part1TestInput.length % 3); i++) {
        const currSum = part1TestInput[i] + part1TestInput[i+1] + part1TestInput[i+2];
        if (currSum > prevSum) count++;
        prevSum = currSum;
    }

    return count;
};

console.log(part1Solution());

console.log(part2Solution());