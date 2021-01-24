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
    let ansValue = document.querySelector('#ans').value;
    
    if (!isButton) {
        return;
    } else if (event.target.innerHTML === 'C') {
        document.querySelector('#ans').value = ''
    } else if (event.target.innerHTML === '=') {
        try {
            let answer = eval(replace(ansValue))
            
            if (answer === Infinity) {
                ansValue = 'Math Error'
            } else {
                ansValue = answer
            }
        } catch (SyntaxError) {
            ansValue = 'Syntax Error';
        } 
    } else {
        if (ansValue === 'Syntax Error' || ansValue === 'Math Error') {
            ansValue = ''
            ansValue += event.target.innerHTML
        } else {
            ansValue += event.target.innerHTML
        }
    }
})
