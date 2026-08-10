import {input, example1, example2, example3, example4} from "./input";

const parseData = (data) => {
    const matrix = [];

    const lines = data.split('\n');
    for (let i = 0; i < lines.length; i++) {
        matrix[i] = [];
        const line = lines[i].split('');
        for (let j = 0; j < line.length; j++) {
            matrix[i][j] = line[j];
        }
    }

    return matrix;
}

const part1Sol = (data) => {
    const matrix = parseData(data);
    let currMatrix = JSON.parse(JSON.stringify(matrix));

    let iterations = 0;
    while (true) {
        let anyMovementInCurrentIteration = false;
        // move east
        let newMatrix = []
        for (let i = 0; i < currMatrix.length; i++) {
            newMatrix[i] = [];
            for (let j = 0; j < currMatrix[i].length; j++) {
                if (newMatrix[i][j]) {
                    continue;
                }
                newMatrix[i][j] = currMatrix[i][j];
                if (currMatrix[i][j] === '>') {
                    const nextStepIndex = (j + 1) % currMatrix[i].length;
                    if (currMatrix[i][nextStepIndex] === '.') {
                        newMatrix[i][nextStepIndex] = '>';
                        newMatrix[i][j] = '.';
                        anyMovementInCurrentIteration = true;
                    }
                }
            }
        }

        currMatrix = JSON.parse(JSON.stringify(newMatrix));

        // move south

        newMatrix = [];
        for (let i = 0; i < currMatrix.length; i++) {
            newMatrix[i] = newMatrix[i] || [];
            const nextStepIndex = (i + 1) % currMatrix.length;
            for (let j = 0; j < currMatrix[i].length; j++) {
                if (newMatrix[i][j]) {
                    continue;
                }
                newMatrix[i][j] = currMatrix[i][j];
                if (currMatrix[i][j] === 'v') {
                    if (currMatrix[nextStepIndex][j] === '.') {
                        newMatrix[nextStepIndex] = newMatrix[nextStepIndex] || [];
                        newMatrix[nextStepIndex][j] = 'v';
                        newMatrix[i][j] = '.';
                        anyMovementInCurrentIteration = true;
                    }
                }
            }
        }

        currMatrix = newMatrix;
        iterations++;
        if (!anyMovementInCurrentIteration) {
            break;
        }
    }

    return iterations;
}


console.log(part1Sol(input));