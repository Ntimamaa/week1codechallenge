//created two variables to hold the users basic salary and benefits then add them up and convert to an integer
const basicSalary =prompt('Enter you basic salary')
const benefits = prompt('Enter you benefits')
const grossPay = Math.floor(basicSalary+benefits)
document.write('Pay (Ksh):',grossPay + "<br>")

//I added variables fir all the deductions in every criterea in the global scope
let percentage;
let taxAmount;
let nhifDeduction;
let nssfDeduction;

//created a function called paye that takes the users total income and calculates the tax
function Paye(grossPay){
    let percentage;
    if (grossPay <= 24000) {
        percentage = 10;
      } 
      else if (grossPay >= 24001 && grossPay <= 32333) {
        percentage = 25;
      } 
      else if (grossPay > 32333) {
        percentage = 30;
      } 
      else {
        console.log('Invalid monthly taxable pay');
      }
      taxAmount = (grossPay * percentage) / 100;
      document.write('Tax Amount (Ksh):', taxAmount + "<br>");

}
Paye(grossPay)

//created a function called NHIF that takes the users total income and calculates the NHIF deduction
function NHIF(grossPay){
    let deduction;
  if (grossPay <= 5999) {
  deduction = 150;} 
  else if (grossPay >= 6000 && grossPay <= 7999) {
  deduction = 300;} 
  else if (grossPay >= 8000 && grossPay <= 11999) {
  deduction = 400;}
   else if (grossPay >= 12000 && grossPay <= 14999) {
  deduction = 500;}
   else if (grossPay >= 15000 && grossPay <= 19999) {
  deduction = 600;}
   else if (grossPay >= 20000 && grossPay <= 24999) {
  deduction = 750;}
   else if (grossPay >= 25000 && grossPay <= 29999) {
  deduction = 850;}
   else if (grossPay >= 30000 && grossPay <= 34999) {
  deduction = 900;}
   else if (grossPay >= 35000 && grossPay <= 39999) {
  deduction = 950;}
   else if (grossPay >= 40000 && grossPay <= 44999) {
  deduction = 1000;}
   else if (grossPay >= 45000 && grossPay <= 49999) {
  deduction = 1100;}
   else if (grossPay >= 50000 && grossPay <= 59999) {
  deduction = 1200;}
   else if (grossPay >= 60000 && grossPay <= 69999) {
  deduction = 1300;}
   else if (grossPay >= 70000 && grossPay <= 79999) {
  deduction = 1400;}
   else if (grossPay >= 80000 && grossPay <= 89999) {
  deduction = 1500;}
   else if (grossPay >= 90000 && grossPay <= 99999) {
  deduction = 1600;}
   else if (grossPay >= 100000) {
  deduction = 1700;}
   else {
  document.write('Invalid gross pay');
}
   nhifDeduction = Math.floor(deduction);
   document.write('NHIF Pay (Ksh):', nhifDeduction + "<br>");

}
NHIF(grossPay)

//created a function called NSSF that takes the users total income and calculates the NSSF deduction
function NSSF(grossPay){
    nssfDeduction = Math.floor((grossPay * 6 / 100))
    document.write('NSSF Pay (Ksh):',nssfDeduction + "<br>");
}
NSSF(grossPay)

//since i declared all deductions as variables in the global scope i used them to calculated the total deduction and net income
const totalDeductions = Math.floor(taxAmount + nhifDeduction + nssfDeduction)
const netSalary = Math.floor(grossPay - totalDeductions)
document.write('Total deduction (Ksh):',totalDeductions + "<br>")
document.write('Net Salary (Ksh):', netSalary + "<br>")
