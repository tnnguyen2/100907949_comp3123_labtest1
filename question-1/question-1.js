const lowerCaseWords = (inputArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(inputArray)) {
            reject(new Error('User input is not in an array'));
            return;
        }

        const validStrings = inputArray.filter(words => typeof words === 'string')
            .map(word => word.toLowerCase());

        if (validStrings.length === 0) {
            reject(new Error('No valid strings in the array'));
            return;
        }

        resolve(validStrings);
    });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(resolve => console.log(resolve))
    .catch(reject => console.error(reject));
