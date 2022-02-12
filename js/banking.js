// deposit button event handler
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput  = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    // setting the input field amount in deposit box
    const depositTotal = document.getElementById('deposit-total');
    
    // deposit amount declaration
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // clear the deposit input field
    depositInput.value = '';
});

// withdraw button event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    console.log('withdraw button clicked.')
});