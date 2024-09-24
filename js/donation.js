document.getElementById('btn-noakhali').addEventListener('click', function(){
    
    const addDonationNoakhali = getMoneyById('input-noakhali');

    if(addDonationNoakhali > 0){
        const balanceNoakhali = getBalanceById('noakhali-donation-add');
        const noakhaliTotalDonation = balanceNoakhali + addDonationNoakhali;

        document.getElementById('noakhali-donation-add').innerText = noakhaliTotalDonation;

        const mainBalance = getTotalBalanceById('main-balance');
        const aboveMainBalance = mainBalance - addDonationNoakhali;

        document.getElementById('main-balance').innerText = aboveMainBalance;

        
    }
    else{
        alert('Failed to Donation!');
    }
});