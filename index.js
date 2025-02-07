window.addEventListener("scroll", function() {
    let heading = document.getElementById("main-heading");
    let image = document.getElementById("scroll-image");
    let imageContainer = document.querySelector(".image-container");
    let scrollY = window.scrollY;

    // Fade out and move the heading up
    heading.style.opacity = Math.max(1 - scrollY / 200, 0);
    heading.style.transform = `translateY(${scrollY * 0.5}px)`;

    // Make the image appear and grow to match the heading size
    if (scrollY > 100) {
        imageContainer.style.opacity = "1";
        image.style.width = "400px";  // Similar to the heading size
    } else {
        imageContainer.style.opacity = "0";
        image.style.width = "150px";  // Starts small
    }
});

const container = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel-container img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

function updateCarousel() {
    container.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
});

prev.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});

const openChatBtn = document.getElementById("open-chat");
const closeChatBtn = document.getElementById("close-chat");
const chatContainer = document.getElementById("chat-container");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBody = document.getElementById("chat-body");

// Toggle Chat Window
openChatBtn.addEventListener("click", () => {
    chatContainer.classList.toggle("hidden");
});

closeChatBtn.addEventListener("click", () => {
    chatContainer.classList.add("hidden");
});

// Handle Message Sending
sendBtn.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (message) {
        displayMessage(message, "user");
        userInput.value = "";
        setTimeout(() => displayMessage("I'm here to help!", "bot"), 1000);
    }
});

// Function to Display Messages
function displayMessage(text, sender) {
    const messageDiv = document.createElement("p");
    messageDiv.textContent = text;
    messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to latest message
}
