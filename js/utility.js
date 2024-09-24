
document.getElementById('donation-btn').addEventListener('click', function(){
    console.log('hoice vai');
    showDonationById('donation-part');
});

document.getElementById('history-btn').addEventListener('click', function(){
    showDonationById('history-part');
    console.log('yessssss');
})

document.getElementById('home-btn').addEventListener('click', function(){
    window.location.href = 'question.html';
});

