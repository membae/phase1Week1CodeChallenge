/**const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });*/

/**const read=require('readline').Interface({
    input:process.stdin,
    output:process.stdout
});
read.question('who are you?', name=>{
    console.log(`hey there handsome ${name}! `);
    read.close();
});*/
/**let myname="pjiil"
console.log(myname)*/
/**function codeGenerator(marks){
  marks=prompt("please enter your marks:")
  if(marks>=70){
    console.log("A")
  }
  else if(marks>=60){
    console.log("B")
  }
  else if(marks>=50){
    console.log("C")
  }
  else if(marks>=40){
    console.log("D")
  }
  else {
    console.log("E")
  }
  return;
}
codeGenerator();*/

/**const text = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function amua(){
  text.question("hi user, please enter your age:",inputAge=>{
    let age=Number(inputAge);

    if(age>=18){
      console.log(`your age is ${age} ,welcome in`);
    }
    else{
      console.log(`your age is ${age},kindly find your way home`);
      
    }
    text.close();
  });
}
amua();*/
/**function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Sample input
const input = [5, 6, 1, 3, 4, 2];

// Expected output
const output = sortArray(input);

console.log(output); // [1, 2, 3, 4, 5, 6]*/
const rl=require('readline').Interface({
  input:process.stdin,
  output:process.stdout
})
function promptUserForArray() {
    rl.question('Please enter numbers separated by commas (e.g., 5,6,1,3,4,2): ', (input) => {
        // Split input by commas and map to numbers, filter out any NaN values
        const array = input.split(',').map(num => Number(num.trim())).filter(num => !isNaN(num));
        
        // Check if array is correctly formed and not empty
        if (array.length === 0) {
            console.log('Invalid input. Please enter a valid list of numbers.');
            rl.close();
            return;
        }

        const sortedArray = sortArray(array);
        console.log('Sorted array:', sortedArray);
        rl.close();
    });
}

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

promptUserForArray();



/**const rl= require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function array(){
  rl.question("hello,please enter the array elements:",inputarray=>{
    const array=inputarray.input;
    
    const sortedarray=(array);
    console.log('sorted array:',sortedarray);
    rl.close();
  });
}
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

array();*/
