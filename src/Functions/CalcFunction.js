function calculateMonthlyRepayment(amount, rate, years) {
  const principal = parseFloat(amount);
  const annualRate = parseFloat(rate);
  const termInYears = parseFloat(years);

  if (!principal || !annualRate || !termInYears) return 0;

  const r = annualRate / 100 / 12; // Monthly interest rate
  const n = termInYears * 12;      // Total number of monthly payments

  const numerator = principal * r * Math.pow(1 + r, n);
  const denominator = Math.pow(1 + r, n) - 1;
   console.log("Repayment");
  const monthlyPayment = numerator / denominator;
  return monthlyPayment.toFixed(2);
}
function calculateInterestOnlyRepayment(amount, rate) {
  const principal = parseFloat(amount);
  const annualRate = parseFloat(rate);

  if (!principal || !annualRate) return 0;

  const monthlyInterest = (principal * annualRate) / 100 / 12;
  console.log("Interest");
  return monthlyInterest.toFixed(2);
}
export default calculateMonthlyRepayment;
export {calculateInterestOnlyRepayment};