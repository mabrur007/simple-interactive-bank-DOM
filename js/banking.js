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

    // ---------- account balance total update ------- //
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
});

// withdraw button event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    console.log('withdraw button clicked.')
});

// withdraw button handler
document.getElementById('withdraw-button').addEventListener('click', function (){
    
});