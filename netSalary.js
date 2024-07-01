const prompt = require('prompt-sync')

function salaryCalculator() {
    let salary = prompt("Please enter the salary:");
    salary = parseInt(salary);

    if (isNaN(salary)) {
        console.log("Invalid input. Please enter a numeric value for the salary.");
        return;
    }

    let paye, nssf, nhif, netPay;

    if (salary <= 24000) {
        paye = salary * 0.1;
        nssf = salary * 0.06;
        nhif = 750;
    } else if (salary <= 32333) {
        paye = salary * 0.25;
        nssf = salary * 0.06;
        nhif = 1000;
    } else if (salary <= 50000) {
        paye = salary * 0.3;
        nssf = salary * 0.06;
        nhif = 1700;
    } else if (salary <= 80000) {
        paye = salary * 0.325;
        nssf = salary * 0.06;
        nhif = 1700;
    } else {
        paye = salary * 0.35;
        nssf = salary * 0.06;
        nhif = 1000;
    }

    netPay = salary - paye - nssf - nhif;
    console.log(`Your net salary is ${netPay}`);
}

salaryCalculator();
