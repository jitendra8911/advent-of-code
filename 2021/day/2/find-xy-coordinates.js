import testData from './test-data';

const parseInput = () => {
    const instructions = [];
    const units = [];
    testData.forEach(dataPoint => {
        const instruction = dataPoint.split(' ');
        instructions.push(instruction[0]);
        units.push(parseInt(instruction[1]));
    })

    return {instructions, units}
};

const part1Solution = () => {
    const {instructions, units} = parseInput();
    let x = 0;
    let y = 0;
    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === "forward") {
            x += units[i];
        } else if (instructions[i] === "down") {
            y += units[i];
        } else if (instructions[i] === "up") {
            y -= units[i];
        }
    }

    return x * y;
};

const part2Solution = () => {
    const {instructions, units} = parseInput();
    let x = 0;
    let y = 0;
    let aim = 0;

    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === "forward") {
            x += units[i];
            y += units[i] * aim;
        } else if (instructions[i] === "down") {
            aim += units[i];
        } else if (instructions[i] === "up") {
            aim -= units[i];
        }
    }

    return x * y;
};

console.log(part2Solution());