const cardPublicKey = 9093927;
const doorPublicKey = 11001876;

const determineLoopSize = (publicKey, subjectNumber) => {
    let i = 0;
    let initialValue = 1;
    while (true) {
        i++;
        initialValue = initialValue * subjectNumber;
        initialValue = initialValue % 20201227;
        if (initialValue === publicKey) {
            return i;
        }
    }
};

const getEncryptionKey = (loopSize, subjectNumber) => {
    let initialValue = 1;
    let i = 0;
    while (i < loopSize) {
        initialValue = initialValue * subjectNumber;
        initialValue = initialValue % 20201227;
        i++;
    }

    return initialValue;
}

const part1Solution = () => {
    const cardLoopSize = determineLoopSize(cardPublicKey, 7);
    //const doorLoopSize = determineLoopSize(doorPublicKey, 7);

    return getEncryptionKey(cardLoopSize, doorPublicKey);

};

console.log(part1Solution())