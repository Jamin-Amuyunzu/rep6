const calculate=document.querySelector('calculate');
calculate.addEventListen('click',(e)=>{
    e.preventDefault();
   // const amountspent = document.getElementById('amount').value;
  //  const percentage = document.getElementById('discount-percentage').value;
  //  const discountAmt = document.getElementById('discount-amount');
   // const FinalPay = document.getElementById('pay');
    const numval1 = prompt("amount").value
    alert("Amount");
    const numval2 = prompt('discount-percentage').value;
    alert("Discount-percentage");
    const discountAmt = prompt("discount-amount")
    alert("Discount amount");
    const FinalPay = prompt('pay')
    alert("Final Pay");

    //discountAmt.value = amountspent * percentage/100;
   // FinalPay.value = amountspent-discountAmt.value;

    //getPrice = function() {
        const numVal1 = Number(document.getElementById("Amount").value);
        const numVal2 = Number(document.getElementById("discount").value) / 100;
        const Finalpay = numval1 - (numval1 * numval2)
        document.getElementById("total").value = Finalpay.toFixed(2);
    }

);