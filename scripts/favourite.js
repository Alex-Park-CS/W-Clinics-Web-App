// Declare a global variable to store the current user
let currentUser;

// Function to perform initial actions when the page loads
function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // Set the global currentUser variable to the current user's Firestore document
            currentUser = firebase.firestore().collection("users").doc(user.uid);
            // Retrieve and display the user's bookmarked clinics
            getFavourites(user);
        } else {
            console.log("No user is signed in");
        }
    });
}

// Call the function to perform initial actions
doAll();

// Function to retrieve and display user's bookmarked clinics
function getFavourites(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {
            // Retrieve the user's list of bookmarked clinics
            var favourites = userDoc.data().favourites;
            console.log(favourites);

            // Get the HTML element to display clinic cards
            var clinicCardGroup = document.getElementById("ClinicCardGroup");

            // Iterate through each bookmarked clinic and display its card
            favourites.forEach(savedClinics => {
                console.log(savedClinics);
                db.collection("clinics").doc(savedClinics).get().then(doc => {
                    var clinicName = doc.data().clinicName;
                    var clinicAddress = doc.data().address;
                    var clinicCode = doc.data().code;
                    var docID = doc.id;

                    // Create HTML elements for each bookmarked clinic
                    var clinicDiv = document.createElement("div");
                    clinicDiv.className = "card text-center";
                    clinicDiv.style.width = "18rem";
                    clinicDiv.innerHTML = `
                        <div class="card-body">
                            <div class="card-title"><h4>${clinicName}</h4></div>
                            <div class="card-text">${clinicAddress}</div>
                            <a href="clinic_profile_page.html?docID=${docID}" class="btn btn-success">To clinic page</a>
                            <br><br>
                            <i id="save-${docID}" class="material-icons unfilled align-self-end">favorite</i>
                        </div>
                    `;

                    // Append the clinic card to the group
                    clinicCardGroup.appendChild(clinicDiv);

                    // Update bookmark status on click
                    document.getElementById(`save-${docID}`).onclick = () => updateBookmark(docID);
                });
            });
        })
        .catch(error => {
            console.error("Error getting user document: ", error);
        });
}

// Function to update bookmark status on click
function updateBookmark(bookmarkClinicID) {
    // Ensure currentUser is defined before proceeding
    if (!currentUser) {
        console.error("currentUser is not defined");
        return;
    }

    currentUser.get().then(userDoc => {
        let favourites = (userDoc.data() && userDoc.data().favourites) || [];
        let iconID = `save-${bookmarkClinicID}`;
        let isBookmarked = favourites.includes(bookmarkClinicID);

        if (isBookmarked) {
            // Remove the bookmark if it already exists
            currentUser.update({
                favourites: firebase.firestore.FieldValue.arrayRemove(bookmarkClinicID)
            }).then(() => {
                console.log("Item was removed: " + bookmarkClinicID);
                document.getElementById(iconID).innerText = 'favorite_border'; // Change to unfilled heart icon
                $('#' + iconID).css('color', 'gray');
            });
        } else {
            // Add the bookmark if it doesn't exist
            currentUser.update({
                favourites: firebase.firestore.FieldValue.arrayUnion(bookmarkClinicID)
            }).then(() => {
                console.log("Item added to favourites: " + bookmarkClinicID);
                document.getElementById(iconID).innerText = 'favorite'; // Change to filled heart icon 
                $('#' + iconID).text('favorite').css('color', 'red');
            });
        }
    });
}
