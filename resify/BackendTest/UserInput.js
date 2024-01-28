const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(question) {
    return new Promise(resolve => {
        rl.question(question, (input) => {
            resolve(input);
        });
    });
}

function closeInput() {
    rl.close();
}

module.exports = { getUserInput, closeInput };
