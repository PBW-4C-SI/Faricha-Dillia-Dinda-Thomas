const calculator = (operator, ...numbers) => {
   
    let result = numbers[0]; 
    
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b
    };

    for (let i = 1; i < numbers.length; i++) {
        result = operators[operator](result, numbers[i]);
    }

    return result;
};

console.log(calculator('+', 10, 3));  
console.log(calculator('-', 20, 8));  
console.log(calculator('*', 20, 10));   
console.log(calculator('/', 8, 2)); 
console.log(calculator('%', 15, 4));  

alert(`Kalkulator`)