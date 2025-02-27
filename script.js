// Step 1: Create an array of names
var names = ["John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Step 2: Create an empty variable to store the output
var output = "";

// Step 3: Loop through each name
for (var i = 0; i < names.length; i++) {
    // Get the first letter of the name (lowercase)
    var firstLetter = names[i].charAt(0).toLowerCase();
    
    // Check if the name starts with 'J'
    if (firstLetter === 'j') {
        output += "<p style='color: red;'>Goodbye " + names[i] + "</p>";
    } else {
        output += "<p style='color: green;'>Hello " + names[i] + "</p>";
    }
}

// Step 4: Display the output inside the webpage
document.getElementById("output").innerHTML = output;
