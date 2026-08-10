const testInput = 'Player 1:\n' +
    '9\n' +
    '2\n' +
    '6\n' +
    '3\n' +
    '1\n' +
    '\n' +
    'Player 2:\n' +
    '5\n' +
    '8\n' +
    '4\n' +
    '7\n' +
    '10';

const realInput = 'Player 1:\n' +
    '41\n' +
    '33\n' +
    '20\n' +
    '32\n' +
    '7\n' +
    '45\n' +
    '2\n' +
    '12\n' +
    '14\n' +
    '29\n' +
    '49\n' +
    '37\n' +
    '6\n' +
    '11\n' +
    '39\n' +
    '46\n' +
    '47\n' +
    '38\n' +
    '23\n' +
    '22\n' +
    '28\n' +
    '10\n' +
    '36\n' +
    '35\n' +
    '24\n' +
    '\n' +
    'Player 2:\n' +
    '17\n' +
    '4\n' +
    '44\n' +
    '9\n' +
    '27\n' +
    '18\n' +
    '30\n' +
    '42\n' +
    '21\n' +
    '26\n' +
    '16\n' +
    '48\n' +
    '8\n' +
    '15\n' +
    '34\n' +
    '50\n' +
    '19\n' +
    '43\n' +
    '25\n' +
    '1\n' +
    '13\n' +
    '31\n' +
    '3\n' +
    '5\n' +
    '40';

const parseInput = (input) => {
    const playersDecks = input.split('\n\n');
    const player1Input = playersDecks[0].split('\n');
    const player2Input = playersDecks[1].split('\n');
    const player1Deck = [];
    const player2Deck = [];
    for (let i = 1; i < player1Input.length; i++) {
        player1Deck.push(parseInt(player1Input[i]));
    }
    for (let i = 1; i < player2Input.length; i++) {
        player2Deck.push(parseInt(player2Input[i]));
    }

    return { player1Deck, player2Deck };
};

const play = (player1Deck, player2Deck) => {
    while (player1Deck.length > 0 && player2Deck.length > 0) {
        const player1Top = player1Deck.shift();
        const player2Top = player2Deck.shift();
        if (player1Top > player2Top) {
            player1Deck.push(player1Top);
            player1Deck.push(player2Top);
        } else {
            player2Deck.push(player2Top);
            player2Deck.push(player1Top);
        }
    }
};

const playRecursive = (player1Deck, player2Deck) => {
    if (player1Deck.length === 0) {
        return { player2IsWinner: true }
    } else if (player2Deck.length === 0) {
        return { player1IsWinner: true }
    }

    const player1History = [];
    const player2History = [];
    let iteration = 0;
    while (player1Deck.length > 0 && player2Deck.length > 0) {
        iteration++;
        const player1State = player1Deck.join(',');
        const player2State = player2Deck.join(',');

        if (player1History.includes(player1State) && player2History.includes(player2State)) {
            return {quitGame: true};
        } else {
            player1History.push(player1State);
            player2History.push(player2State);
        }
        const player1Top = player1Deck.shift();
        const player2Top = player2Deck.shift();

        // if this round is a repeat of a previous round in the same game, then quit the game to prevent infinite games of recursive combat

        if (player1Deck.length >= player1Top && player2Deck.length >= player2Top) {
            // lay sub game
            const results = playRecursive(player1Deck.slice(0, player1Top), player2Deck.slice(0, player2Top));
            if (results.quitGame || results.player1IsWinner) {
                player1Deck.push(player1Top);
                player1Deck.push(player2Top);
            }  else if (results.player2IsWinner) {
                player2Deck.push(player2Top);
                player2Deck.push(player1Top);
            }
        } else {
            // otherwise player with the higher card wins
            if (player1Top > player2Top) {
                player1Deck.push(player1Top);
                player1Deck.push(player2Top);
            } else {
                player2Deck.push(player2Top);
                player2Deck.push(player1Top);
            }
        }
    }

    return player1Deck.length === 0 ? {player2IsWinner: true} : {player1IsWinner: true};
};

const computeScore = (playerDeck) => {
    return playerDeck.reverse().reduce((acc, currVal, currIndex) => acc + (currIndex + 1) * currVal);
}

const part1Solution = (input) => {
    const {player1Deck, player2Deck} = parseInput(input);
    play(player1Deck, player2Deck);

    return player1Deck.length > 0 ? computeScore(player1Deck): computeScore(player2Deck);
};

const part2Solution = (input) => {
    const {player1Deck, player2Deck} = parseInput(input);
    const result = playRecursive(player1Deck, player2Deck);

    if (result.quitGame || result.player1IsWinner) {
        return computeScore(player1Deck);
    } else {
        return computeScore(player2Deck);
    }
};

//console.log(part1Solution(realInput));

console.log(part2Solution(realInput));