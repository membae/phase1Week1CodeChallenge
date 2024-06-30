const read=require('readline').Interface({
    input:process.stdin,
    output:process.stdout
});

// Constants for tax rates and thresholds
const TAX_RATES = {
    thresholds: [24000, 32333, 40467, 54167, 70467],
    rates: [10, 15, 20, 25, 30]
};

const NHIF_RATES = {
    thresholds: [5999, 7999, 11999, 14999, 19999, 24999, 29999, 34999, 39999, 44999, 49999, 59999, 69999, 79999],
    rates: [150, 300, 400, 500, 600, 750, 850, 900, 1000, 1100, 1200, 1300, 1400, 1500]
};

const NSSF_RATE_EMPLOYEE = 6; // Employee NSSF contribution rate

// Function to calculate PAYE (Tax)
function calculatePAYE(grossSalary) {
    let tax = 0;
    for (let i = 0; i < TAX_RATES.thresholds.length; i++) {
        if (grossSalary <= TAX_RATES.thresholds[i]) {
            tax += (grossSalary - (i === 0 ? 0 : TAX_RATES.thresholds[i - 1])) * (TAX_RATES.rates[i] / 100);
            break;
        } else {
            tax += (TAX_RATES.thresholds[i] - (i === 0 ? 0 : TAX_RATES.thresholds[i - 1])) * (TAX_RATES.rates[i] / 100);
        }
    }
    return tax;
}

// Function to calculate NHIF Deductions
function calculateNHIF(grossSalary) {
    for (let i = 0; i < NHIF_RATES.thresholds.length; i++) {
        if (grossSalary <= NHIF_RATES.thresholds[i]) {
            return NHIF_RATES.rates[i];
        }
    }
    return NHIF_RATES.rates[NHIF_RATES.rates.length - 1]; // Maximum NHIF rate for higher incomes
}

// Function to calculate NSSF Deductions
function calculateNSSF(grossSalary) {
    const nssfEmployee = grossSalary * (NSSF_RATE_EMPLOYEE / 100);
    const nssfEmployer = nssfEmployee; // Assuming equal contribution for simplicity
    return {
        employee: nssfEmployee,
        employer: nssfEmployer
    };
}

// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const { employee: nssfEmployee, employer: nssfEmployer } = calculateNSSF(grossSalary);

    const deductions = payee + nhif + nssfEmployee;
    const netSalary = grossSalary - deductions;

    return {
        grossSalary,
        payee,
        nhif,
        nssfEmployee,
        nssfEmployer,
        deductions,
        netSalary
    };
}

// Function to start the salary calculation
function startSalaryCalculation() {
    read.question("Enter Basic Salary: ", (basicSalary) => {
        read.question("Enter Benefits: ", (benefits) => {
            // Convert inputs to numbers
            basicSalary = Number(basicSalary);
            benefits = Number(benefits);

            if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
                console.log("Invalid input. Please enter valid numbers for Basic Salary and Benefits.");
                read.close();
                return;
            }

            // Calculate and display the net salary details
            const salaryDetails = calculateNetSalary(basicSalary, benefits);
            console.log("\nSalary Details:");
            console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
            console.log(`PAYE (Tax): ${salaryDetails.payee}`);
            console.log(`NHIF Deductions: ${salaryDetails.nhif}`);
            console.log(`NSSF Deductions (Employee): ${salaryDetails.nssfEmployee}`);
            console.log(`NSSF Contributions (Employer): ${salaryDetails.nssfEmployer}`);
            console.log(`Total Deductions: ${salaryDetails.deductions}`);
            console.log(`Net Salary: ${salaryDetails.netSalary}`);

            read.close();
        });
    });
}

// Call the function to start salary calculation
startSalaryCalculation();
