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
            let answer = eval(replace(document.querySelector('#ans').value))
            
            if (answer === Infinity) {
                document.querySelector('#ans').value = 'Math Error'
            } else if (answer === undefined || answer === NaN) {
                document.querySelector('#ans').value = ''
            } else {
                document.querySelector('#ans').value = answer
            }
        } catch (SyntaxError) {
            document.querySelector('#ans').value = 'Syntax Error';
        } 
    } else {
        if (document.querySelector('#ans').value === 'Syntax Error' || document.querySelector('#ans').value === 'Math Error') {
            document.querySelector('#ans').value = ''
            document.querySelector('#ans').value += event.target.innerHTML
        } else {
            document.querySelector('#ans').value += event.target.innerHTML
        }
    }
})
