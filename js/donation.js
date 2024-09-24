// Noakhali Part
document.getElementById('btn-noakhali').addEventListener('click', function () {

    const addDonationNoakhali = getMoneyById('input-noakhali');

    if (isNaN(addDonationNoakhali)) {
        alert('Please insert number!');
        return;
    }

    if (addDonationNoakhali > 0) {
        const balanceNoakhali = getBalanceById('noakhali-donation-add');
        const noakhaliTotalDonation = balanceNoakhali + addDonationNoakhali;

        document.getElementById('noakhali-donation-add').innerText = noakhaliTotalDonation;

        const mainBalance = getTotalBalanceById('main-balance');

        if (addDonationNoakhali > mainBalance) {
            alert('You do not have enough money to donation!');
            return;
        }
        const aboveMainBalance = mainBalance - addDonationNoakhali;

        document.getElementById('main-balance').innerText = aboveMainBalance;

        // modal
        document.getElementById('btn-noakhali').addEventListener('click', function() {
            document.getElementById('my_modal_1').checked = true;
        });

        // Noakhali Donation History
        const currentDate = new Date();
        const div = document.createElement('div');
        div.classList.add('bg-gray-100');
        div.innerHTML = `
        <h4 class="text-sm font-bold mb-2 pt-2">${addDonationNoakhali} Taka is Donated for Flood Relief in Noakhali,Bangladesh</h4>
        <p>${currentDate}</p>
        `
        document.getElementById('history-container').appendChild(div);
    }
    else{
        alert('Failed to Donation!');
    }
});

// Feni Part

document.getElementById('btn-feni').addEventListener('click', function () {

    const addDonationFeni = getMoneyById('input-feni');

    if (isNaN(addDonationFeni)) {
        alert('Please insert number!');
        return;
    }

    if (addDonationFeni > 0) {
        const balanceFeni = getBalanceById('feni-donation-add');
        const feniTotalDonation = balanceFeni + addDonationFeni;

        document.getElementById('feni-donation-add').innerText = feniTotalDonation;

        const mainBalance = getTotalBalanceById('main-balance');

        if (addDonationFeni > mainBalance) {
            alert('You do not have enough money to donation!');
            return;
        }
        const aboveMainBalance = mainBalance - addDonationFeni;

        document.getElementById('main-balance').innerText = aboveMainBalance;

        // modal
        document.getElementById('btn-feni').addEventListener('click', function() {
            document.getElementById('my_modal_1').checked = true;
        });

        // Feni Donation History
        const currentDate = new Date();
        const div = document.createElement('div');
        div.classList.add('bg-gray-100');
        div.innerHTML = `
        <h4 class="text-sm font-bold mb-2 pt-2">${addDonationFeni} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
        <p>${currentDate}</p>
        `
        document.getElementById('history-container').appendChild(div);


    }
    else {
        alert('Failed to Donation!');
    }
});

// Quota Part

document.getElementById('btn-quota').addEventListener('click', function () {

    const addDonationQuota = getMoneyById('input-quota');

    if (isNaN(addDonationQuota)) {
        alert('Please insert number!');
        return;
    }

    if (addDonationQuota > 0) {
        const balanceQuota = getBalanceById('quota-donation-add');
        const quotaTotalDonation = balanceQuota + addDonationQuota;

        document.getElementById('quota-donation-add').innerText = quotaTotalDonation;

        const mainBalance = getTotalBalanceById('main-balance');

        if (addDonationQuota > mainBalance) {
            alert('You do not have enough money to donation!');
            return;
        }
        const aboveMainBalance = mainBalance - addDonationQuota;

        document.getElementById('main-balance').innerText = aboveMainBalance;

         // modal
         document.getElementById('btn-quota').addEventListener('click', function() {
            document.getElementById('my_modal_1').checked = true;
        });

        // Quota Donation History
        const currentDate = new Date();
        const div = document.createElement('div');
        div.classList.add('bg-gray-100');
        div.innerHTML = `
        <h4 class="text-sm font-bold mb-2 pt-2">${addDonationQuota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
        <p>${currentDate}</p>
        `
        document.getElementById('history-container').appendChild(div);


    }
    else {
        alert('Failed to Donation!');
    }
});
