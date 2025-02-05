const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const sweetMessageDiv = document.getElementById('sweet-message');

// When the user clicks "Yes", show the sweet message
yesButton.addEventListener('click', function () {
    sweetMessageDiv.textContent = "Yay! Thank you baby! I love you so much! 💖, Don't lie this has to be the best proposal asker baby";
});

// When the user hovers over the "No" button, make it disappear
noButton.addEventListener('mouseover', function () {
    noButton.classList.add('hidden');
});

// When the user moves the cursor away from the "No" button, make it reappear
noButton.addEventListener('mouseout', function () {
    noButton.classList.remove('hidden');
});

// When the user tries to click the "No" button, change it to "Yes"
noButton.addEventListener('click', function () {
    // Hide the "No" button
    noButton.classList.add('hidden');
    
    // Change the text and functionality of the "Yes" button to confirm the Valentine request
    yesButton.textContent = "Yes, I will be your Valentine! 💖";
    
    // Show the sweet message
    sweetMessageDiv.textContent = "Lol you cant't say no baby we locked in.";
});
