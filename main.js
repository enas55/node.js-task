const readlineSync = require('readline-sync');
const fs = require('fs');

function showMenu() {
    console.log('hello customer, please pick from one of the below choices:');
    console.log('[1] read file');
    console.log('[2] write content to file');
    console.log('[3] exit app');
}

function readFile() {
    const fileName = readlineSync.question('please enter the name of the file: ');

    if (fs.existsSync(fileName)) {
        const content = fs.readFileSync(fileName, 'utf-8');
        console.log(`file content:\n${content}`);
    } else {
        console.log('file does not exist');
    }
}

function writeFile() {
    const fileName = readlineSync.question('Please enter the file that you want to write to: ');

    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
        console.log('existing file removed');
    }

    const content = readlineSync.question('please enter the content of the file: ');
    fs.writeFileSync(fileName, content);
    console.log('saved successfully!');

    if (readlineSync.keyInYNStrict('do you want to read the file now?')) {
        readFile();
    }
}

function main() {
    let exitApp = false;
    while (!exitApp) {
        showMenu();
        const choice = readlineSync.question('enter your choice: ');

        switch (choice) {
            case '1':
                readFile();
                break;
            case '2':
                writeFile();
                break;
            case '3':
                console.log('exited the app');
                exitApp = true;
                break;
            default:
                console.log('invalid choice');
                break;
        }
    }
}

main();
