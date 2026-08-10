import {input, inputInstructions, test, testInstructions} from "./input";

const parseData = (data, instructions) => {
    const lines = data.split('\n');
    const arr = [];
    const instructionsArr = [];
    for (let i = 0; i < lines.length; i++) {
        const x_y = lines[i].split(',');
        const x = parseInt(x_y[0]);
        const y = parseInt(x_y[1]);

        if (!arr[y]) {
            arr[y] = [];
        }

        arr[y][x] = 1;
    }

    const instructionLines = instructions.split('\n');
    for (let i = 0; i < instructionLines.length; i++) {
        const instruction = instructionLines[i].split('=');
        instructionsArr.push({dir: instruction[0], value: parseInt(instruction[1])});
    }

    return {arr, instructionsArr};
};

const part1Sol = (data, instructions, iterations) => {
    let {arr, instructionsArr} = parseData(data, instructions);
    let maxY = arr.length;
    let maxX;
    const n = iterations || instructionsArr.length;
    let total = 0;
    for (let i = 0; i < n; i++) {
        const {dir, value} = instructionsArr[i];
        if (dir === 'y') {
            maxY = value;
        } else {
            maxX = value;
        }

        for (let j = 0; j < maxY; j++) {
            for (let k = 0; k < (maxX || arr[j].length); k++) {
                let counterPart = 0;
                if (dir === 'y') {
                    if (arr[2 * maxY - j]) {
                        counterPart = arr[2 * maxY - j][k] || counterPart;
                    }
                } else {
                    if (arr[j]) {
                        counterPart = arr[j][2 * maxX - k] || counterPart;
                    }
                }
                if (counterPart) {
                    arr[j] = arr[j] || [];
                    arr[j][k] = 1;
                }
            }
        }
    }

    for (let i = 0; i < maxY; i++) {
        let str = '';
        for (let j = 0; j < maxX; j++) {
            if (arr[i] && arr[i][j]) {
                str += '█';
                total++;
            } else {
                str += '.';
            }
        }
        console.log(str);
    }

    return total;

};

console.log(part1Sol(input, inputInstructions));