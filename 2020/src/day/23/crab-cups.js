const testInput = '389125467';

const realInput = '247819356';

const parseInput = (input) => {
    const circle = input.split('');

    return circle.map(cup => parseInt(cup));
};
const getHighestCup = (circle) => {
    return circle.reduce((acc, cup) => Math.max(acc, cup));
};

const getNextCupIndex = (circle, currCupIndex) => {
    return (currCupIndex + 1) % circle.length;
};

const getPreviousCupIndex = (circle, currCupIndex) => {
    return currCupIndex > 0 ? currCupIndex - 1 : circle.length - 1;
};

const pickNextNCupsIndices = (circle, currCupIndex, n) => {
    const nextNCupsIndices = [];
    let iterationCupIndex = currCupIndex;
    let nextCupIndex = currCupIndex;
    let i = 0;
    while (i < n) {
        nextCupIndex = getNextCupIndex(circle, iterationCupIndex);
        nextNCupsIndices.push(nextCupIndex);
        iterationCupIndex = nextCupIndex;
        i++;
    }

    return nextNCupsIndices;
};

const pickPreviousNCupsIndices = (circle, currCupIndex, n) => {
    const previousNCupsIndices = [];
    let iterationCupIndex = currCupIndex;
    let prevCupIndex = currCupIndex;
    let i = 0;
    while (i < n) {
        prevCupIndex = getPreviousCupIndex(circle, iterationCupIndex);
        previousNCupsIndices.push(prevCupIndex);
        iterationCupIndex = prevCupIndex;
        i++;
    }

    return previousNCupsIndices;
};
const pickDestination = (circle, currCup, pickedCups, highestCup) => {
    let tempCup = currCup - 1 === 0 ? highestCup : currCup - 1;
    if (!pickedCups.includes(tempCup)) {
        return tempCup;
    }
    while (pickedCups.includes(tempCup)) {
        tempCup = tempCup - 1 === 0 ? highestCup : tempCup - 1;
    }

    return tempCup;
};

const placePickedCupsAndMaintainCircle = (circle, pickedCupsIndices, destination) => {
    const pickedCups = pickedCupsIndices.map(pickedCupsIndex => circle[pickedCupsIndex]);
    const destinationIndex = circle.indexOf(destination);
    const placesToPutPickedCups = [destinationIndex];
    placesToPutPickedCups.push(...pickPreviousNCupsIndices(circle, destinationIndex, 2));
    const buffItems = [];
    for (let i = 0; i < placesToPutPickedCups.length; i++) {
        // save all items that have to be separated out to give place to picked items, into a buffer
        const bufferIndex = placesToPutPickedCups[i];
        if (!pickedCups.includes(circle[bufferIndex]) && circle[bufferIndex] !== destination) {
            buffItems.push(circle[bufferIndex]);
        }
    }
    // place all the cups
    let j = pickedCups.length - 1;
    for (let i = 0; i < placesToPutPickedCups.length; i++) {
        circle[placesToPutPickedCups[i]] = pickedCups[j];
        j--;
    }
    // store the item that is going to be replaced at final destination index into the buffer
    const finalDestinationIndex = getPreviousCupIndex(circle, placesToPutPickedCups[placesToPutPickedCups.length - 1]);
    if (!pickedCups.includes(circle[finalDestinationIndex]) && circle[finalDestinationIndex] !== destination) {
        buffItems.push(circle[finalDestinationIndex]);
    }
    // place the destination cup
    circle[finalDestinationIndex] = destination;

    // place the buffered items back to circle
    const indicesToPlaceBufferItems = pickPreviousNCupsIndices(circle, finalDestinationIndex, buffItems.length);
    const cupsDisplacedDueToBufferItems = [];
    for (let i = 0; i < buffItems.length; i++) {
        if (!pickedCups.includes(circle[indicesToPlaceBufferItems[i]]) && circle[indicesToPlaceBufferItems[i]] !== destination && !buffItems.includes(circle[indicesToPlaceBufferItems[i]])) {
            cupsDisplacedDueToBufferItems.push(circle[indicesToPlaceBufferItems[i]]);
        }
        circle[indicesToPlaceBufferItems[i]] = buffItems[i];
    }

    // place the displaced items back to circle
    const indicesToPlaceDisplacedItems = pickPreviousNCupsIndices(circle, indicesToPlaceBufferItems[buffItems.length - 1], cupsDisplacedDueToBufferItems.length);
    for (let i = 0; i < cupsDisplacedDueToBufferItems.length; i++) {
        circle[indicesToPlaceDisplacedItems[i]] = cupsDisplacedDueToBufferItems[i];
    }
};

const placePickedCupsAndMaintainCircleV2 = (circle, pickedCupsIndices, destination, currCup) => {
    const pickedCups = pickedCupsIndices.map(pickedCupsIndex => circle[pickedCupsIndex]);
    const destinationIndex = circle.indexOf(destination);
    const placesToPutPickedCups = [destinationIndex];
    placesToPutPickedCups.push(...pickPreviousNCupsIndices(circle, destinationIndex, 2));
    const finalDestinationIndex = getPreviousCupIndex(circle, placesToPutPickedCups[placesToPutPickedCups.length - 1]);
    const cupsDisplaced = [];
    let currentCupDisplacedIndex = destinationIndex;
    // save all items that have to be separated out to give place to picked items, into a buffer
    while (circle[currentCupDisplacedIndex] !== currCup) {
        if (!pickedCups.includes(circle[currentCupDisplacedIndex]) && circle[currentCupDisplacedIndex] !== destination) {
            cupsDisplaced.push(circle[currentCupDisplacedIndex]);
        }
        currentCupDisplacedIndex = getPreviousCupIndex(circle, currentCupDisplacedIndex);
    }
    // place all the cups
    let j = pickedCups.length - 1;
    for (let i = 0; i < placesToPutPickedCups.length; i++) {
        circle[placesToPutPickedCups[i]] = pickedCups[j];
        j--;
    }

    // place the destination cup
    circle[finalDestinationIndex] = destination;

    // place the buffered items back to circle
    currentCupDisplacedIndex = getPreviousCupIndex(circle, finalDestinationIndex);
    for (let i = 0; i < cupsDisplaced.length; i++) {
        circle[currentCupDisplacedIndex] = cupsDisplaced[i];
        currentCupDisplacedIndex = getPreviousCupIndex(circle, currentCupDisplacedIndex);
    }
};

const play = (circle, moves, noOfCupsToPick) => {
    let i = 0;
    let currCupIndex = 0;
    const highestCup = getHighestCup(circle);
    while (i < moves) {
        i++;
        const pickedCupIndices = pickNextNCupsIndices(circle, currCupIndex, noOfCupsToPick);
        const pickedCups = pickedCupIndices.map(index => circle[index]);
        const destination = pickDestination(circle, circle[currCupIndex], pickedCups, highestCup);
        placePickedCupsAndMaintainCircleV2(circle, pickedCupIndices, destination, circle[currCupIndex]);
        currCupIndex = getNextCupIndex(circle, currCupIndex);
    }
};

const part1Solution = (input, moves, numberOfCupsToPick) => {
    const circle = parseInput(input);
    play(circle, moves, numberOfCupsToPick);

    return pickNextNCupsIndices(circle, circle.indexOf(1), circle.length - 1).map(index => circle[index]).join('');
    //console.log(circle);
};

const part2Solution = (input, moves, totalNumberOfCups, numberOfCupsToPick) => {
    const circle = parseInput(input);
    const currentHighestCup = getHighestCup(circle);
    for (let i = currentHighestCup + 1; i <= totalNumberOfCups; i++) {
        circle.push(i);
    }

    play(circle, moves, numberOfCupsToPick);
    const firstCup = circle[getNextCupIndex(circle.indexOf(1))];
    const secondCup = circle[getNextCupIndex(circle.indexOf(1) + 1)];
    const result = firstCup * secondCup;

    console.log(result);

    return result;
    // const immediateClockwiseFirstCupIndex = circle[getNextCupIndex(circle, circle.indexOf(1))];
    // const immediateClockwiseSecondCupIndex = circle[getNextCupIndex(circle, circle.indexOf(1) + 1)];
    // console.log(immediateClockwiseFirstCupIndex * immediateClockwiseSecondCupIndex);
};

console.log(part2Solution(testInput, 10000000, 100, 3));