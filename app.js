let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function () {
    let transactionPage = document.getElementById('transaction-page');
    let loginPage = document.getElementById('login-page');
    loginPage.style.display = 'none';
    transactionPage.style.display = 'block';
})
let depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    let depositAmount = document.getElementById('deposit-amount').value;
    let depositNumber = parseFloat(depositAmount);
    let depositBalance = document.getElementById('deposit-balance').innerText;
    let currentDepositBalance = parseFloat(depositBalance);
    let totalDepositBalance = depositNumber + currentDepositBalance;
    document.getElementById('deposit-balance').innerText = totalDepositBalance;
    document.getElementById('deposit-amount').value = '';
    let mainBalance = document.getElementById('main-balance').innerText;
    let currentmainBalance = parseFloat(mainBalance);
    let totalBalance = depositNumber + currentmainBalance;
    document.getElementById('main-balance').innerText = totalBalance;
})
let withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    let withdrawAmount = document.getElementById('withdraw-amount').value;
    let withdrawNumber = parseFloat(withdrawAmount);
    let withdrawBalance = document.getElementById('withdraw-balance').innerText;
    let currentwithdrawBalance = parseFloat(withdrawBalance);
    let totalwithdrawBalance = withdrawNumber + currentwithdrawBalance;
    document.getElementById('withdraw-balance').innerText = totalwithdrawBalance;
    document.getElementById('withdraw-amount').value = '';
    let mainBalance = document.getElementById('main-balance').innerText;
    let currentmainBalance = parseFloat(mainBalance);
    let totalBalance = currentmainBalance - withdrawNumber;
    document.getElementById('main-balance').innerText = totalBalance;
})