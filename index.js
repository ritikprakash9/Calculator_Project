let buttons = document.querySelectorAll('.btn');
let text = document.getElementById('txt');

console.log(buttons);

let expression = "";


function calculate(button) {
    try {
        if (button.textContent === 'C') {
            expression = "";
            text.value = "";
        }

        else if (button.textContent === 'x2') {
            expression = expression * expression;
            text.value = expression;
        }

        else if (button.textContent === '√') {
            expression = Math.sqrt(expression);
            text.value = expression;
        }

        else if (button.textContent === '=') {
            expression = eval(expression);
            text.value = expression;
        }

        else if (button.textContent === '←') {
            let length = expression.length;
            let newExpression = expression.substring(0, length - 1);
            expression = newExpression;
            text.value = expression;
        }
        else {
            expression = expression + button.textContent;
            text.value = expression;
        }
    }

    catch(err)
    {
        expression = "";
        text.value = expression;
        alert("Please Enter a Valid Operation");
    }
    // console.log(button);
    
    
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)));

