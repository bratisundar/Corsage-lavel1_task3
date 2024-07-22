let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let buttonText = e.target.innerHTML;
    
    if (buttonText === '=') {
      string = evaluateExpression(string);
      document.querySelector('input').value = string;
    } else if (buttonText === 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else if (buttonText === 'M+' || buttonText === 'M-') {
      handleMemory(buttonText);
    } else {
      string += buttonText;
      document.querySelector('input').value = string;
    }
  });
});

let memory = 0;

function evaluateExpression(expression) {
  try {
    return Function('return ' + expression)();
  } catch (error) {
    return 'Error';
  }
}

function handleMemory(action) {
  let currentValue = parseFloat(document.querySelector('input').value) || 0;
  if (action === 'M+') {
    memory += currentValue;
  } else if (action === 'M-') {
    memory -= currentValue;
  }
  string = "";
  document.querySelector('input').value = memory;
}
