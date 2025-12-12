// Running Quote Motivator
// WEB 114 Final Project - Melanie De La Paz Islas
const quotes = [
    "Do a little more each day than you think you possibly can.",
    "Your only competition is yourself.",
    "Pain is inevitable, suffering is optional.",
    "No bad runs—only miles you didn't think you could do.",
    "One run can change your day. Many runs can change your life",
    "Run like hell and get the agony over",
    "Don't dream of winning. Train for it.",
    "Running is the greatest metaphor for life, because you get out of it what you put in it.",
    "Your body can stand almost anything. It's your mind you have to convince.",
    "Run because you love it, not because you're good at it. "
];
// Button 
let quoteButton = document.getElementById("quoteBtn");
// Output areas
let quoteText = document.getElementById("quote");
let runMessage = document.getElementById("runMessage");
// Custom function to get a random quote
function generateQuote() {
    /* RANDOM QUOTE:
       Math.random picks a number 0–1,
       multiplied to get array index */
    let index = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[index];
    // Ask for last run distance
    let miles = prompt("How many miles did you run last time?");
    let numMiles = parseFloat(miles);   // convert to number
    // Check if input is valid
    if (isNaN(numMiles) || numMiles <= 0) {
        runMessage.textContent = "That's not possible!";
        return; //stop
    }
    // toFixed
    let doubled = (numMiles * 2).toFixed(1);
    /* Conditionals, comparison, and logical
       Give motivational message based on distance */
    if (numMiles >= 3 && numMiles < 6) {
        runMessage.textContent = "Nice short run, Have fun!";
    } else if (numMiles >= 6) {
        runMessage.textContent = "Stay hydrated and safe! Good luck on this long run!";
    } else if (numMiles < 3 && numMiles > 0) {
        runMessage.textContent = " " + doubled + " miles soon.";
    }
    // Adding date element 
    let today = new Date();
    console.log("Quote generated on: " + today);
}

quoteButton.addEventListener("click", generateQuote);
