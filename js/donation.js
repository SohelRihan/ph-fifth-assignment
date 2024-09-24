// Noakhali Part
document.getElementById('btn-noakhali').addEventListener('click', function () {

    const addDonationNoakhali = getMoneyById('input-noakhali');

    if (addDonationNoakhali > 0) {
        const balanceNoakhali = getBalanceById('noakhali-donation-add');
        const noakhaliTotalDonation = balanceNoakhali + addDonationNoakhali;

        document.getElementById('noakhali-donation-add').innerText = noakhaliTotalDonation;

        const mainBalance = getTotalBalanceById('main-balance');
        const aboveMainBalance = mainBalance - addDonationNoakhali;

        document.getElementById('main-balance').innerText = aboveMainBalance;

        // Donation History
        // const p = document.createElement('p');
        // p.innerText = `Added: ${addDonationNoakhali} Taka is Donated for Flood Relief in Noakhali,Bangladesh`;
        // console.log(p);

        // document.getElementById('history-container').appendChild(p);

    }
    else {
        alert('Failed to Donation!');
    }
});

// Feni Part

document.getElementById('btn-feni').addEventListener('click', function () {

    const addDonationFeni = getMoneyById('input-feni');

    if (addDonationFeni > 0) {
        const balanceFeni = getBalanceById('feni-donation-add');
        const feniTotalDonation = balanceFeni + addDonationFeni;

        document.getElementById('feni-donation-add').innerText = feniTotalDonation;

        const mainBalance = getTotalBalanceById('main-balance');
        const aboveMainBalance = mainBalance - addDonationFeni;

        document.getElementById('main-balance').innerText = aboveMainBalance;


    }
    else {
        alert('Failed to Donation!');
    }
});

// Quota Part

document.getElementById('btn-quota').addEventListener('click', function () {

    const addDonationQuota = getMoneyById('input-quota');

    if (addDonationQuota > 0) {
        const balanceQuota = getBalanceById('quota-donation-add');
        const quotaTotalDonation = balanceQuota + addDonationQuota;

        document.getElementById('quota-donation-add').innerText = quotaTotalDonation;

        const mainBalance = getTotalBalanceById('main-balance');
        const aboveMainBalance = mainBalance - addDonationQuota;

        document.getElementById('main-balance').innerText = aboveMainBalance;


    }
    else {
        alert('Failed to Donation!');
    }
});
