
document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');
    // calculate new value total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit tatal value 
    setTextElementValueById('deposit-total', newDepositTotal);


    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositTotal;
    setTextElementValueById('balance-total', newBalanceTotal);


})


