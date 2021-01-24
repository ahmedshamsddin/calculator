function replace (string) {
    let newString = ''
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '−') {
            newString += '-'
        } else if (string[i] === '×') {
            newString += '*'
        } else if (string[i] === '÷') {
            newString += '/'
        } else {
            newString += string[i]
        }
    }
    
    return newString
}

const main = document.querySelector('.calculator-buttons');

main.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    
    if (!isButton) {
        return;
    } else if (event.target.innerHTML === 'C') {
        document.querySelector('#ans').value = ''
    } else if (event.target.innerHTML === '=') {
        try {
            let answer = eval(replace(ansValue))
            
            if (answer === Infinity) {
                document.querySelector('#ans').value = 'Math Error'
            } else {
                document.querySelector('#ans').value = answer
            }
        } catch (SyntaxError) {
            document.querySelector('#ans').value = 'Syntax Error';
        } 
    } else {
        document.querySelector('#ans').value += event.target.innerHTML
    }
})
