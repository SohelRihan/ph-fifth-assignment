// main balance function
function getTotalBalanceById(id){
    const textTotalValue = document.getElementById(id).innerText;
    const textTotalNumber = parseFloat(textTotalValue);
    return textTotalNumber; 
};

// Donation part
function getMoneyById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

function getBalanceById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
};

// click part

function showDonationById(id){
    document.getElementById('donation-part').classList.add('hidden');
    document.getElementById('history-part').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
};