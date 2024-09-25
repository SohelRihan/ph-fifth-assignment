
document.getElementById('donation-btn').addEventListener('click', function(){
    showDonationById('donation-part');
});

document.getElementById('history-btn').addEventListener('click', function(){
    showDonationById('history-part');
})

document.getElementById('home-btn').addEventListener('click', function(){
    window.location.href = 'question.html';
});

