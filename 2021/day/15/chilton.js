import {example1, example2, input} from "./input"
import {MinHeap} from "./min-heap";
const parseData = (data) => {
    const cave = [];
    const lines = data.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const row = lines[i].split('');
        cave[i] = [];
        for (let j = 0; j < row.length; j++) {
            cave[i][j] = {
                weight: parseInt(row[j]),
                visited: false,
                cost: Infinity
            }
        }
    }

    return cave;
}

const neighbors = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];


const getNeighborsAtLocation = (location, m, n) => {
    const validNeighbors = [];
    for (let i = 0; i < neighbors.length; i++) {
        const x = location[0];
        const y = location[1];
        const neighborX = x + neighbors[i][0];
        const neighborY = y + neighbors[i][1];
        if (neighborX >= 0 && neighborX <= m && neighborY >=0 && neighborY <= n) {
            validNeighbors.push([neighborX, neighborY])
        }
    }

    return validNeighbors;
}




const findShortestPath = (cave) => {
    const m = cave.length;
    const n = cave[0].length;
    cave[0][0].cost = 0;


    // build min heap

    const minHeap = new MinHeap([]);

    minHeap.minHeapInsert({location: [0,0], cost: 0});
    cave[0][0].visited = true;
    while (minHeap.arr.length > 0) {
        const currLocation = minHeap.heapExtractMin().location;
        if (currLocation[0] === m - 1 && currLocation[1] === n-1) {
            break;
        }
        const costAtCurrentLocation = cave[currLocation[0]][currLocation[1]].cost;
        const neighborsAtCurrentLocation = getNeighborsAtLocation(currLocation, m - 1, n - 1);
        for (let i = 0; i < neighborsAtCurrentLocation.length; i++) {
            try {
                const neighbor = neighborsAtCurrentLocation[i];
                const isNeighborAlreadyVisited = cave[neighbor[0]][neighbor[1]].visited;
                const costAtCurrentNeighbor = cave[neighbor[0]][neighbor[1]].cost;
                const weightAtCurrentNeighbor = cave[neighbor[0]][neighbor[1]].weight;
                const newCost = costAtCurrentLocation + weightAtCurrentNeighbor;
                if (!isNeighborAlreadyVisited || costAtCurrentNeighbor > newCost) {
                    cave[neighbor[0]][neighbor[1]].visited = true;
                    cave[neighbor[0]][neighbor[1]].cost = newCost;
                    cave[neighbor[0]][neighbor[1]].previousLocation = currLocation;
                    minHeap.minHeapInsert({location: [neighbor[0], neighbor[1]], cost: newCost});
                }
            } catch (error) {
                console.log('wassup buddy');
            }

        }
    }

    return cave[m-1][n-1].cost;
}

const printPath = (cave) => {
    const m = cave.length - 1;
    const n = cave[0].length - 1;
    const indicesTraversed = [[m,n]];
    let currLocation = [m, n];
    let totalWeight = cave[currLocation[0]][currLocation[1]].weight;
    while (true) {
        const prevLocation = cave[currLocation[0]][currLocation[1]].previousLocation;
        if (!prevLocation) {
            break;
        } else {
            indicesTraversed.unshift(prevLocation);
            totalWeight += cave[prevLocation[0]][prevLocation[1]].weight;
            currLocation = prevLocation;
        }
    }

    console.log('proof of weight is ', totalWeight);
    console.log(indicesTraversed.join(' -> '));
}

const part1Sol = (data) => {
    const cave = parseData(data);

    const cost = findShortestPath(cave);

    printPath(cave);
    console.log('shortest path cost is ', cost);
}

const appendTile = (cave, xOffset, yOffset, m, n) => {
    for (let i = xOffset * m; i < xOffset * m + m; i++) {
        cave[i] = cave[i] || [];
        for (let j = yOffset * n; j < yOffset * n + n; j++) {
            // get top value of the adjacent tile
            const cellCorrespondingToTopTile = cave[i - m] ? cave[i-m][j].weight : undefined;
            // get left value of the adjacent tile
            const cellCorrespondingToLeftTile = cave[i][j - n] ? cave[i][j - n].weight : undefined;

            const cellDecider = cellCorrespondingToLeftTile || cellCorrespondingToTopTile;
            cave[i][j] = {
                weight: (cellDecider % 9) + 1,
                visited: false,
                cost: Infinity
            }
        }
    }
}

const repeatTiles = (cave) => {
    const m = cave.length;
    const n = cave[0].length;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i === 0 && j === 0) continue;
            appendTile(cave, i, j, m, n);
        }
    }
}

const part2Sol = (data) => {
    const cave = parseData(data);
    repeatTiles(cave);


    const cost = findShortestPath(cave);

    printPath(cave);
    console.log('shortest path cost is ', cost);
}

part1Sol(input);