const startGame = (arr, N) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i+1);
    }
    let currSpokenNumber = 0;
    let i = arr.length + 1;
    while (i < N) {
        if (map.has(currSpokenNumber)) {
            const lastTurn = map.get(currSpokenNumber);
            map.set(currSpokenNumber, i);
            currSpokenNumber = i - lastTurn;
        } else {
            map.set(currSpokenNumber, i);
            currSpokenNumber = 0;
        }
        i++;
    }

    return currSpokenNumber;
};

console.log(startGame([16,11,15,0,1,7], 2020));
console.log(startGame([16,11,15,0,1,7], 30000000));

//console.log(part2Solution());