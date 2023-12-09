let currentUser;

function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = firebase.firestore().collection("users").doc(user.uid);
            getfavourites(user);
        } else {
            console.log("No user is signed in");
        }
    });
}

doAll();

function getfavourites(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {
            var favourites = userDoc.data().favourites;
            console.log(favourites);

            var clinicCardGroup = document.getElementById("ClinicCardGroup");

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

function updateBookmark(bookmark_clinicID) {
    // Ensure currentUser is defined before proceeding
    if (!currentUser) {
        console.error("currentUser is not defined");
        return;
    }

    currentUser.get().then(userDoc => {
        let favourites = (userDoc.data() && userDoc.data().favourites) || [];
        let iconID = `save-${bookmark_clinicID}`;
        let isBookmarked = favourites.includes(bookmark_clinicID);

        if (isBookmarked) {
            // Remove the bookmark if it already exists
            currentUser.update({
                favourites: firebase.firestore.FieldValue.arrayRemove(bookmark_clinicID)
            }).then(() => {
                console.log("Item was removed: " + bookmark_clinicID);
                document.getElementById(iconID).innerText = 'favorite_border'; // Change to unfilled heart icon
                $('#' + iconID).css('color', 'gray');
            });
        } else {
            // Add the bookmark if it doesn't exist
            currentUser.update({
                favourites: firebase.firestore.FieldValue.arrayUnion(bookmark_clinicID)
            }).then(() => {
                console.log("Item added to favourites: " + bookmark_clinicID);
                document.getElementById(iconID).innerText = 'favorite'; // Change to filled heart icon 
                $('#' + iconID).text('favorite').css('color', 'red');
            });
        }
    });
}
