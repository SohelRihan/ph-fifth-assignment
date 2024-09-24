document.getElementById('btn-noakhali').addEventListener('click', function(){
    
    const addDonation = getMoneyById('input-noakhali');

    if(addDonation === 100){
        const balanceNoakhali = getBalanceById('noakhali-donation-add');
        console.log(balanceNoakhali, addDonation);
    }
    else{
        alert('Failed to Donation!');
    }
});