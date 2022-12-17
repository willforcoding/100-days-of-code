// script.js
// Get all the emoji buttons
const menu = document.querySelector('#menu');
const container = document.querySelector('#emoji-container');

const categories = document.querySelectorAll('.category');
categories.forEach(category => category.addEventListener('click', () => showEmojis(category.id)));

let currentIndex = 0;
// Define a function that will be called when a category button is clicked
function showEmojis(category) {
    // Clear the container
    container.innerHTML = '';

    // Create a button for each emoji in the selected category
    const emojis = getEmojis(category);
    emojis.forEach(emoji => {
        const button = document.createElement('button');
        button.classList.add('emoji');
        button.textContent = emoji;
        button.addEventListener('click', () => sayEmoji(emoji));
        container.appendChild(button);
    });
    currentIndex = 0;
    showEmoji(currentIndex);
}

// Define a function that returns the emojis in the given category
function getEmojis(category) {
    // Add the emojis for each category
    switch (category) {
        case 'nature':
            return ['🌱', '🌲', '🌳', '🌴', '🌵', '🌷', '🌸', '🌹', '🌺', '🌻', '🌼'];
        case 'animals':
            return ['🐀', '🐁', '🐂', '🐃', '🐄', '🐅', '🐆', '🐇', '🐈', '🐉', '🐊', '🐋', '🐌', '🐍', '🐎', '🐏', '🐐', '🐑', '🐒', '🐓', '🐔', '🐕', '🐖', '🐗', '🐘', '🐙', '🐚', '🐛', '🐜', '🐝', '🐞', '🐟', '🐠', '🐡', '🐢', '🐣', '🐤', '🐥', '🐦', '🐧', '🐨', '🐩', '🐪', '🐫', '🐬', '🐭', '🐮', '🐯', '🐰', '🐱', '🐲', '🐳', '🐴', '🐵', '🐶', '🐷', '🐸', '🐹', '🐺', '🐻', '🐼', '🐽', '🐾'];
        case 'food':
            return ['🍏', '🍐', '🍑', '🍒', '🍓', '🍔', '🍕', '🍖', '🍗', '🍘', '🍙', '🍚', '🍛', '🍜'];
        case 'transportation':
            return ['🚂', '🚄', '🚗', '🛻', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🏍', '🛵', '🚲', '🛴', '🛹', '🛼', '🛺', '🛩', '🚁', '🚢'];
        default:
            return [];
    }
}

// Define a function that will be called when the button is clicked
function sayEmoji(emoji) {
    console.log(emoji);
    // Create a new SpeechSynthesisUtterance object with the emoji as the input text
    const utterance = new SpeechSynthesisUtterance(emoji);
    // Set the language and voice to use for the TTS audio
    utterance.lang = 'en-US';
    utterance.voice = speechSynthesis.getVoices()[0];
    // Play the TTS audio
    window.speechSynthesis.speak(utterance);
}

// Define a function that shows a single emoji at a time
function showEmoji(index) {
    console.log(index);
    // Find the emoji buttons
    const buttons = document.querySelectorAll('.emoji');

    // Hide all of the emoji buttons
    buttons.forEach(button => button.style.display = 'none');

    // Show the emoji button at the given index
    buttons[index].style.display = 'block';
}

// Add a touchstart event listener to the container
container.addEventListener('touchstart', event => {
    // Store the initial position of the touch
    const initialX = event.touches[0].clientX;

    let hasSwiped = false;

    // Add a touchmove event listener to the container
    container.addEventListener('touchmove', moveEvent => {
        // Remove the touchmove event listeners
        container.removeEventListener('touchmove', moveEvent);
        // Store the current position of the touch
        const currentX = moveEvent.touches[0].clientX;
        // Calculate the change in position
        const deltaX = currentX - initialX;

        if (Math.abs(deltaX) >= 20 && !hasSwiped) {
            // If the touch has moved more than 20 pixels to the left, show the previous emoji
            if (deltaX > -20) {
                currentIndex--;
            }
            // If the touch has moved more than 20 pixels to the right, show the next emoji
            else if (deltaX < 20) {
                currentIndex++;
            }
            currentIndex = currentIndex < 0 ? 0 : currentIndex >= container.childElementCount - 1 ? container.childElementCount - 1 : currentIndex;
            showEmoji(currentIndex);
            hasSwiped = true;
        }

    });


});