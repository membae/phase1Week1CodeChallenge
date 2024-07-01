const read=require('readline').Interface({
    input:process.stdin,
    output:process.stdout
  });
  read.question('enter your salary?', salary=>{
     salo=Number(salary);
    const allowance=100000
    let paye, nssf, nhif, netPay;
  
      if (salo <= 24000) {
          paye = salo * 0.1;
          nssf = salo * 0.06;
          nhif = 750;
      } else if (salo <= 32333) {
          paye = salo * 0.25;
          nssf = salo * 0.06;
          nhif = 1000;
      } else if (salo <= 50000) {
          paye = salo * 0.3;
          nssf = salo * 0.06;
          nhif = 1700;
      } else if (salo <= 80000) {
          paye = salo * 0.325;
          nssf = salo * 0.06;
          nhif = 1700;
      } else {
          paye = salo * 0.35;
          nssf = salo * 0.06;
          nhif = 1000;
      }
  
      netPay = salo - paye - nssf - nhif;
      console.log(`Your net salary is ${netPay}`);
      read.close();
  }
  
    //
  );