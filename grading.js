//console.log("Hi Philip!");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function studentGrade(){
    rl.question("Hi student, please enter your marks(0-100):",(inputMarks)=>{
    let marks=Number(inputMarks);//this converts the user input into a number
    if(isNaN(marks) || marks<0 || marks>100 ){//checks if the input is a valid number
        console.log("Sorry!! Invalid input.Please enter a number between 0 and 100.");
        rl.close();
        return;
    }
    let grade;//determines the grade based on the student marks
    if(marks>79){
        grade="A";
    }
    else if(marks>=60){
        grade="B";
    }
    else if(marks>=49){
        grade="C";
    }
    else if(marks>=40){
        grade="D";
    }
    else{
        grade="E";
    }
    console.log(`Given your ${marks} your grade is:${grade}`);//this outputs the grade
    rl.close();
});

}
studentGrade();//call the function to execute it