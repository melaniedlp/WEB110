//Mood Changer using event Delegation 

//Melanie De La Paz Islas 11/21/2025

/*
Why is the JavaScript textContent properly safer than innerHTML?
textContent takes the user input and just reads it while innerHTML parses the string which could lead to execution.
2. If use an HTML text box on a page and it has an attribute (for example id="text") and a corresponding DOM property (for example, const box = document.getElementById("text").
How do the two elements relate?
The HTML text box and attribute are the blueprint while the DOM property actually shows changes on the page.
3. What would happen to the text box with id="text" if it added this line to the code above:
text.textContent = "Hello!"
Nothing would happen since text is visible when you use the .value property.
*/

//Mood Changer Project


//Step 1 - Store in variable moodDisplay 

const moodDisplay = document.getElementById("moodDisplay");


//Step 2: Define an object with configurations for each mood
//This object holds the background color, tect color, and message for each mood

const moods = {
    happy: { bg '#ff9800', text '#3e2723', message: 'Pumpkin spice everything!' },
    calm:      { bg '#a8dadc', text '#457b9d', message: 'Stay calm and carry on' },
    excited:   { bg '#d81b60', text '#6a1b9a', message: 'Girls rule, boys drool'},
    chill:     { bg '#b39ddb', text '#3a3a3a', message: 'Meditate... ummmm'},
    mysterious:{ bg '#000000', text '#bdbdbd', message: 'Do you know the secret?' }
  };

//Step 3 Add the Event Listener with Delegation 

// This listens for clicks anywhere on the page and checks if it's a mood button
document.addEventListener('click', function (event) {
    // Check if the clicked element has the class 'mood-btn'
    if (event.target.classList.contains('mood-btn')) {
      // Step 4 
      const mood = event.target.getAttribute('data-mood');
    
      // Get the configuration for this mood from the moods object
    const config = moods[mood];
//test it
console.log(mood)
console.log(config)

//Step 5 Update the page styles and message
document.body.style.backgroundColor = config.bg;
    
// Update the text color of the body
document.body.style.color = config.text;

// Update the display message
moodDisplay.textContent = config.message;



    }
  });