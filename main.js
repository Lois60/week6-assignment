// 1.Create  function that checks if the input/parameter is an even number.\

function numberEven(number) {
    if (number % 2 === 0) {
      return 'This an even number';
    } else {
      return 'This is an odd number';
    }
}
// Let us test if the function works - Yayy- it works 
const output = numberEven(10);
console.log(output);

//  2. Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter

function printNumbers (n1, n2){
    for (let i = n1; i <= n2; i++) {
        console.log(i);
}
}
// Let us test if the function works - Yayy- it works
const input = printNumbers (4, 10);
console.log (input);


// 3. Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.
function calcFunc(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

// Let us test if the function works - Yayy- it works
const result = calcFunc(1, 3);
console.log("The Sum: is", result);