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