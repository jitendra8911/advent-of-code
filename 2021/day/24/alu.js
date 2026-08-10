import {input, example1, example2, example3, example4, example5} from "./input";


let part1Answer;
let totalNumberOfSets = 0;
let instructions = [];


const parseData = (data) => {
    const instructions = [];
    const lines = data.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const instruction = line.substring(0,3);
        const remainderString = line.substring(4, lines[i].length);
        const variables = remainderString.split(' ');
        const a = variables[0];
        const num = parseInt(variables[1]);
        const b = !isNaN(num) ? num: variables[1];
        instructions.push({instruction, a, ...(b !== undefined && {b})})
    }

    return instructions;
}

const getResultOfInstruction = (op, w, a, b) => {
    if (op === 'inp') {
        return w;
    } else if (op === 'mul') {
        return a * b;
    } else if (op === 'add') {
        return a + b;
    } else if (op === 'eql') {
        return a === b ? 1: 0;
    } else if (op === 'mod') {
        return a % b;
    } else if (op === 'div') {
        return Math.floor(a / b);
    }

    console.log(`op ${op} not found`);
}

const compute = (instructions,input, z) => {
    let map = {
        z,
        x: 0,
        y: 0,
        w: 0
    }
    for (let i = 0; i < instructions.length; i++) {
        const {instruction, a, b} = instructions[i];
        map[a] = getResultOfInstruction(instruction, input, map[a], !isNaN(b) ? b : map[b]);
    }

    return map['z'];
}


const determineTypeOfPattern = (instruction) => {
  return instruction.b === 1 ? 'increasing': 'decreasing';
}


const computeRecursively = (z, startIndex, index, currNumber, smallestModelNumber) => {
    if (index < 0) {
        if (z === 0) {
            part1Answer = currNumber;
            return 'found';
        }

        return;
    }

    const divisionInstruction = instructions[startIndex + 4];
    let typeOfPattern;

    try {
        typeOfPattern = determineTypeOfPattern(divisionInstruction);
    } catch (error) {
        console.log(error);
    }

    if (typeOfPattern === 'increasing') {
        if (smallestModelNumber) {
            for (let i = 1; i <= 9; i++) {
                const currZ = compute(instructions.slice(startIndex, startIndex + 18), i, z);
                const status = computeRecursively(currZ, startIndex + 18, index - 1, currNumber + i * Math.pow(10, index), smallestModelNumber);
                if (status === 'found') {
                    return 'found';
                }
            }
        } else {
            for (let i = 9; i >= 1; i--) {
                const currZ = compute(instructions.slice(startIndex, startIndex + 18), i, z);
                const status = computeRecursively(currZ, startIndex + 18, index - 1, currNumber + i * Math.pow(10, index), smallestModelNumber);
                if (status === 'found') {
                    return 'found';
                }
            }
        }

    } else if (typeOfPattern === 'decreasing') {
        const moduloPaddingInstruction = instructions[startIndex + 5];
        const currI = (z % 26) + moduloPaddingInstruction['b'];
        if (currI >= 1 && currI <= 9) {
            const currZ = compute(instructions.slice(startIndex, startIndex + 18), currI, z);
            const status = computeRecursively(currZ, startIndex + 18, index - 1, currNumber + currI * Math.pow(10, index), smallestModelNumber);
            if (status === 'found') {
                return 'found';
            }
        }
    }
    
}




const part1And2Sol = (data, smallestModelNumber = false) => {
    instructions = parseData(data);
    totalNumberOfSets = instructions.length / 18;
    computeRecursively(0, 0, totalNumberOfSets - 1, 0, smallestModelNumber);

    return part1Answer;

}

console.log(part1And2Sol(input, true));