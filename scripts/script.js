// Wait for the document to be fully loaded before executing setup
$(document).ready(setup);

// Call this function when the "logout" button is clicked
function logout() {
    // Sign out the user using Firebase authentication
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("Logging out user");
    }).catch((error) => {
        // An error happened during sign-out.
        console.error("Error during sign-out:", error);
    });
}

// History

// Function to count clicks and update the clinic card title
function countClicks() {
    let count = 0;
    count++;
    console.log(count);
    // Update the clinic card title with the click count
    $(".clinic-card-title").text(count);
}

// Function to set up the click event on clinic card titles
function setup() {
    console.log("Setting up");

    // Add a click event listener to clinic card titles
    $(".clinic-card-title").click(countClicks);
}
