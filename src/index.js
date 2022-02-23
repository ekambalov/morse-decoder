const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    expr = '' + expr;
    let exprArr = [];
    let dotDashArr = [];
    let exprDecode = '';
    for (let i = 0; i < expr.length / 10; i++) {
        exprArr[i] = expr.slice(i * 10, i * 10 + 10);

        for (let j = 0; j < 10; j++) {
            if (exprArr[i][j] == '1') {
                exprArr[i] = exprArr[i].slice(j);
                break;
            }
        }
    }
    for (let i = 0; i < exprArr.length; i++) {
        dotDashArr[i] = '';
    }

    for (let i = 0; i < exprArr.length; i++) {
        for (let j = 0; j < exprArr[i].length / 2; j++) {
            if (exprArr[i].slice(j * 2, j * 2 + 2) == '10') {
                dotDashArr[i] = dotDashArr[i] + '.';
            }
            if (exprArr[i].slice(j * 2, j * 2 + 2) == '11') {
                dotDashArr[i] = dotDashArr[i] + '-';
            }
        }

    }
    for (let i = 0; i < dotDashArr.length; i++) {
        if (dotDashArr[i] == '') {
            exprDecode = exprDecode + ' ';
        } else {
            exprDecode = exprDecode + MORSE_TABLE[dotDashArr[i]];
        }
    }
    return exprDecode;
}
module.exports = {
    decode
}