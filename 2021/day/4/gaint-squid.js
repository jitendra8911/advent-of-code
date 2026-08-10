import {boards, drawNumbers} from "../4/input";

const parseInput = () => {
    let individualBoards = boards.split(/\n\n/);
    // individualBoards = individualBoards.map(individualBoard => individualBoard.replace(/\s\s/g, ' '));
    // individualBoards = individualBoards.map(individualBoard => individualBoard.replace(/^\s/g, ''));

    const parsedBoards = [];
    const totalNoOfBoards = individualBoards.length;
    for (let i = 0; i < totalNoOfBoards; i++) {
        parsedBoards[i] = [];
        const boardStrings = individualBoards[i].split(/\n/g);
        boardStrings.forEach(boardString => {
            const row = boardString.split(' ');
            const parsedRow = [];
            for (let j = 0; j < row.length; j++) {
                const col = parseInt(row[j]);
                if (!isNaN(col)) {
                    parsedRow.push(col);
                }
            }
            parsedBoards[i].push([...parsedRow, 0]);
        });
        parsedBoards[i].push([0, 0, 0, 0, 0, 0]);
    }


    return parsedBoards;
};


const part1Sol = () => {
    const boards = parseInput();
    const { boardNumber, isRow, index, winningDrawNumber, drawnNumbers } = findWinner(boards);

    return findScore(boards, boardNumber, winningDrawNumber, drawnNumbers);

};

const part2Sol = () => {
    const boards = parseInput();
    const {lastWinner, winningDrawNumber, drawnNumbers } = findWinner(boards, false);

    return findScore(boards, lastWinner, winningDrawNumber, drawnNumbers);
};

const findScore = (boards, boardNumber, winningDrawNumber, drawnNumbers) => {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const val = boards[boardNumber][i][j];
            if (!drawnNumbers[val]) {
                sum += val;
            }
        }
    }

    return sum * winningDrawNumber;
};

const findWinner = (boards, firstWinner = true) => {
    const drawnNumbers = {};
    const winnersSoFar = {};
    let lastWinner = -1;
    let i;
    for (i = 0; i < drawNumbers.length && Object.keys(winnersSoFar).length < boards.length; i++) {
        drawnNumbers[drawNumbers[i]] = true;
        const drawNumber = drawNumbers[i];
        for (let j = 0; j < boards.length; j++) {
            if (winnersSoFar[j]) continue;
                for (let k = 0; k < 5; k++) {
                    if (winnersSoFar[j]) break;
                    for (let l = 0; l < 5; l++) {
                        if (winnersSoFar[j]) break;
                        if (drawNumber === boards[j][k][l]) {
                            boards[j][k][5]++;
                            boards[j][5][l]++;
                            if (boards[j][k][5] === 5) {
                                winnersSoFar[j] = true;
                                lastWinner = j;
                                if (firstWinner) {
                                    return {boardNumber: j, isRow: true, index: k, winningDrawNumber: drawNumber, drawnNumbers}
                                }
                            } else if (boards[j][5][l] === 5) {
                                winnersSoFar[j] = true;
                                lastWinner = j;
                                if (firstWinner) {
                                    return {boardNumber: j, isRow: false, index: k, winningDrawNumber: drawNumber, drawnNumbers}
                                }
                            }
                        }
                    }
            }
        }
    }

    return {lastWinner, winningDrawNumber: drawNumbers[i - 1], drawnNumbers};

};


console.log(part2Sol());