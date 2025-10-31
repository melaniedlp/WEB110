// Melanie De La Paz Islas October 31st, 2025
/// Week 4 Project - Switch Statements

let favMonth = prompt("What is your favorite month?").toLowerCase();

switch (favMonth) {
  case "january":
    console.log("Happy New Year!");
    break;
  case "february":
    console.log("Happy Valentines Day!");
    break;
  case "march":
    console.log("Happy Saint Patrick's!");
    break;
  case "april":
    console.log("Happy Easter!");
    break;
  case "may":
    console.log("Happy Cinco de Mayo!");
    break;
  case "june":
    console.log("Summer time!");
    break;
  case "july":
    console.log("Happy 4th!");
    break;
  case "august":
    console.log("Back to school!");
    break;
  case "september":
    console.log("Get ready for fall!");
    break;
  case "october":
    console.log("Happy Halloween!");
    break;
  case "november":
    console.log("Happy Thanksgiving!");
    break;
  case "december":
    console.log("Merry Christmas!");
    break;
  default:
    console.log("Please enter a valid month!");
}

// Seasonal message
if (favMonth === "december" || favMonth === "january" || favMonth === "february") {
  console.log("You love the winter months!");
} else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
  console.log("You love the summer months!");
} else {
  console.log("Other months are interesting too!");
}