const input1 = [939,
    7,13,'x','x',59,'x',31,19];

const input_part1 = [1000390,
    23,'x','x','x','x','x','x','x','x','x','x','x','x',41,'x','x','x','x','x','x','x','x','x',383,'x','x','x','x','x','x','x','x','x','x','x','x',13,17,'x','x','x','x',19,'x','x','x','x','x','x','x','x','x',29,'x',503,'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',37];

const input_part2 = [23,'x','x','x','x','x','x','x','x','x','x','x','x',41,'x','x','x','x','x','x','x','x','x'
    ,383,'x','x','x','x','x','x','x','x','x','x','x','x',13,17,'x','x','x','x',19,'x','x','x','x','x','x','x','x',
    'x',29,'x',503,'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',
    'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x',37];


const part1Solution = (input) => {
    let earliestTimestamp = input[0];
    let currentTimestamp = earliestTimestamp;
    let busIds = input.filter(busId => busId !== 'x' && busId !== earliestTimestamp);
    while (true) {
        for (let i = 0; i < busIds.length; i++) {
            if (currentTimestamp % busIds[i] === 0) {
                return (currentTimestamp - earliestTimestamp) * busIds[i];
            }
        }
        currentTimestamp++;
    }
};

const part2Solution = (input, startingTimestamp) => {
    const startTime = new Date();
    let currentTimestamp = startingTimestamp;
    let mapOffsets = {};
    const busIds = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== 'x') {
            mapOffsets[input[i]] = i;
            busIds.push(input[i]);
        }
    }
    while (true) {
        let allCriteriaSatisfied = true;
        for (let i = 0; i < busIds.length; i++) {
            if ((currentTimestamp + mapOffsets[busIds[i]]) % busIds[i] !== 0) {
                allCriteriaSatisfied = false;
                break;
            }
        }

        if (allCriteriaSatisfied) {
            const endTime = new Date();
            console.log (`part2 approach 1 time elapsed: ${(endTime - startTime) / 1000}`);
            return currentTimestamp;
        }
        currentTimestamp = currentTimestamp + (input[0] - (currentTimestamp % input[0]));
    }
};


const part2_approach2 = (input, startingTimestamp) => {
    const startTime = new Date();
    let currentTimestamp = startingTimestamp;
    let mapOffsets = {};
    const busIds = [];
    let maxBusId = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== 'x') {
            mapOffsets[input[i]] = i;
            busIds.push(input[i]);
            maxBusId = Math.max(maxBusId, input[i]);
        }
    }
    let startingBusId = busIds[0];
    let lastBusId = busIds[busIds.length - 1];
    while (true) {
        let allCriteriaSatisfied = true;
        for (let i = busIds.length - 1; i >= 0; i--) {
            if ((currentTimestamp - (input.length - 1 - mapOffsets[busIds[i]])) % busIds[i] !== 0) {
                allCriteriaSatisfied = false;
                break;
            }
        }

        if (allCriteriaSatisfied) {
            const endTime = new Date();
            console.log (`part2 approach2 time elapsed: ${(endTime - startTime) / 1000}`);
            return currentTimestamp - mapOffsets[lastBusId];
        }
        while (true) {
            currentTimestamp = currentTimestamp + (maxBusId - (currentTimestamp % maxBusId));
            if (((currentTimestamp + (mapOffsets[lastBusId] - mapOffsets[maxBusId])) % lastBusId === 0) &&
                ((currentTimestamp - mapOffsets[maxBusId]) % startingBusId === 0))
                {
                currentTimestamp = currentTimestamp + (mapOffsets[lastBusId] - mapOffsets[maxBusId]);
                break;
            }
        }
    }

};

const computeTimestampIncrementer = (busIds, mapOffsets, startingTimeStamp) => {
    let incrementTimestamp = startingTimeStamp;
    for (let i = 0; i < busIds.length; i++) {
        incrementTimestamp = incrementTimestamp + mapOffsets[busIds[i]] + (busIds[i] - ((incrementTimestamp + mapOffsets[busIds[i]]) % busIds[i]));
    }

    return incrementTimestamp;

};



const part2_approach3 = (input, startingTimestamp) => {
    const startTime = new Date();
    let currentTimestamp = startingTimestamp;
    let mapOffsets = {};
    const busIds = [];
    let maxBusId = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== 'x') {
            mapOffsets[input[i]] = i;
            busIds.push(input[i]);
            maxBusId = Math.max(maxBusId, input[i]);
        }
    }
    let startingBusId = busIds[0];
    let lastBusId = busIds[busIds.length - 1];
    while (true) {
        currentTimestamp = currentTimestamp + (maxBusId - (currentTimestamp % maxBusId));
        if (((currentTimestamp - mapOffsets[maxBusId]) % 23 === 0) &&
            ((currentTimestamp - mapOffsets[maxBusId] + mapOffsets[41]) % 41 === 0) &&
            ((currentTimestamp - mapOffsets[maxBusId] + mapOffsets[383]) % 383 === 0) &&
            ((currentTimestamp - mapOffsets[maxBusId] + mapOffsets[13]) % 13 === 0) &&
            ((currentTimestamp - mapOffsets[maxBusId] + mapOffsets[17]) % 17 === 0) &&
            ((currentTimestamp - mapOffsets[maxBusId] + mapOffsets[19]) % 19 === 0) &&
            ((currentTimestamp - mapOffsets[maxBusId] + mapOffsets[29]) % 29 === 0) &&
            ((currentTimestamp + (mapOffsets[lastBusId] - mapOffsets[maxBusId])) % lastBusId === 0)
        )
        {
            const endTime = new Date();
            console.log(`approach 3 time elapsed ${(endTime - startTime)/1000}`);
            return currentTimestamp - mapOffsets[maxBusId];
        }
    }
}

const part2_approach4 = (input, startingTimeStamp) => {
    const startTime = new Date();
    let mapOffsets = {};
    const busIds = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== 'x') {
            mapOffsets[input[i]] = i;
            busIds.push(input[i]);
        }
    }
    let lastBusId = busIds[busIds.length - 1];
    const incrementTimestamp = computeTimestampIncrementer(busIds, mapOffsets, startingTimeStamp);
    let currentTimestamp = incrementTimestamp;
    while (true) {
        let allCriteriaSatisfied = true;
        for (let i = busIds.length - 1; i >= 0; i--) {
            if ((currentTimestamp - (input.length - 1 - mapOffsets[busIds[i]])) % busIds[i] !== 0) {
                allCriteriaSatisfied = false;
                break;
            }
        }

        if (allCriteriaSatisfied) {
            const endTime = new Date();
            console.log (`part2 approach2 time elapsed: ${(endTime - startTime) / 1000}`);
            return currentTimestamp - mapOffsets[lastBusId];
        }
        currentTimestamp = currentTimestamp + incrementTimestamp;
    }

};
//console.log(part1Solution(input));

const input2 = [67,7,'x',59,61];
//console.log(part2_approach2(input_part2, 100000000000000));
//console.log(part2Solution(input2, 1));
//console.log(part2_approach2(input2, 1));

// started 3:09 PM

console.log(part2_approach4(input_part2, 100000000000000));