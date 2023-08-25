const table_morse = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const exprDecodeInMorse = [];
        let newarrayExpr = expr.split('**********').map(el=> el.split(''));
        const arrayExpr = [];
        function arraySplice(array){
            let subarrays =[];
            for (let i=0; i<array.length; i+=2){let subarray=array.slice(i, i+2).join('').split(',').map(Number); 
            subarrays.push(subarray)};
            return subarrays;
        }

        for(key in newarrayExpr) {
           arrayExpr.push(arraySplice(newarrayExpr[key]))
        }
        
        for (let key in arrayExpr) {
        for (let i=0; i<arrayExpr[key].length;i++) {
             arrayExpr[key][i]=='10'?exprDecodeInMorse.push('.'):
             arrayExpr[key][i]=='11'?exprDecodeInMorse.push('-'):
             exprDecodeInMorse.push('****')
            }
        }
        const arrayExprWithoutSpace = exprDecodeInMorse.join('').split('****')
        const arrayExprElment = []
        for(let i=0; i<arrayExprWithoutSpace.length; i++) {
            for(let key in table_morse) {
                key == arrayExprWithoutSpace[i]? arrayExprElment.push(table_morse[key]): ''
             }
        }
 return   arrayExprElment.join(' ');
    }

module.exports = {
    decode
}