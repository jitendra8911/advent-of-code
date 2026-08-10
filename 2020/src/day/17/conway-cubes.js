const initialGrid = '..#....#\n' +
    '##.#..##\n' +
    '.###....\n' +
    '#....#.#\n' +
    '#.######\n' +
    '##.#....\n' +
    '#.......\n' +
    '.#......';

const testGrid = '.#.\n' +
    '..#\n' +
    '###';


const performCycle = (grid, include4thDimension) => {
    const newGrid = [];
    const checkIfCubeExists = (gridToCheck, newCube) =>  gridToCheck.some(cube => {
        let count = 0;
        for (let l = 0; l < cube.length; l++) {
            if (cube[l] === newCube[l]) {
                count++;
            }
        }

        return count === cube.length;
    });

    const getNeighbors = (gridToCheck, x, y, z, timeD) => {
        const neighbors = [];
        for (let i = 0; i < gridToCheck.length; i++) {
            const neighborX = gridToCheck[i][0];
            const neighborY = gridToCheck[i][1];
            const neighborZ = gridToCheck[i][2];
            const neighborTimeD = gridToCheck[i][3];
            if (Math.abs(neighborX- x) <= 1 && Math.abs(neighborY - y) <= 1 && Math.abs(neighborZ- z) <= 1 && Math.abs(neighborTimeD- timeD) <= 1 &&
                ((neighborX !== x || neighborY !== y || neighborZ !== z) || neighborTimeD !== timeD)) {
                neighbors.push([neighborY, neighborY, neighborZ, neighborTimeD]);
            }
        }

        return neighbors;
    };

    for (let i = 0; i < grid.length; i++) {
        newGrid[i] = [...grid[i]];
    }
    for (let i = 0; i < grid.length; i++) {
        for (let x = -1; x <= 1; x++) {
            const newX = grid[i][0] + x;
            for (let y = -1; y <= 1; y++) {
                const newY = grid[i][1] + y;
                for (let z = -1; z <= 1; z++) {
                    const newZ = grid[i][2] + z;
                    if (include4thDimension) {
                        for (let t = -1; t <= 1; t++) {
                            const newCube = [];
                            const newTimeD = grid[i][3] + t;
                            newCube.push(newX, newY, newZ, newTimeD);
                            if (!checkIfCubeExists(newGrid, newCube)) {
                                newGrid.push(newCube);
                            }
                        }
                    } else {
                        const newCube = [];
                        newCube.push(newX, newY, newZ, 0);
                        if (!checkIfCubeExists(newGrid, newCube)) {
                            newGrid.push(newCube);
                        }
                    }
                }
            }
        }
    }

    const nextGrid = [];
    for (let i = 0; i < newGrid.length; i++) {
        const cubeToAdd = [newGrid[i][0], newGrid[i][1], newGrid[i][2], newGrid[i][3]];
        const neighbors = getNeighbors(grid, cubeToAdd[0], cubeToAdd[1], cubeToAdd[2], cubeToAdd[3]);
        const numberOfNeighbors = neighbors.length;
        if ((numberOfNeighbors === 2 && checkIfCubeExists(grid, cubeToAdd)) || numberOfNeighbors === 3) {
            if (!checkIfCubeExists(nextGrid, cubeToAdd)) {
                nextGrid.push(cubeToAdd);
            }
        }
    }

    return nextGrid;
};


const parseInput = (input) => {
    const data = input.split('\n');
    const matrix = [];
    for (let i = 0; i < data.length; i++) {
        const row = data[i].split('');
        row.forEach((cube, j) => {
            if (cube === '#') {
                matrix.push([i, j, 0, 0]);
            }
        })
    }

    return matrix;
};


const playGameOfLife = (input, cycles, include4thDimension) => {
    let nextGrid = parseInput(input);
    let i = 1;
    while (i <= cycles) {
        nextGrid = performCycle(nextGrid, include4thDimension);
        i++;
    }

    return nextGrid.length;
};

//console.log(playGameOfLife(initialGrid, 6, false));
console.log(playGameOfLife(initialGrid, 6, true));