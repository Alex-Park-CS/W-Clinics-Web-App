function getAppointmentsInfo(currentUser) {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var userID = user.uid;

            db.collection("users").doc(userID).get().then(userDoc => {
                var appointments = userDoc.data().appointments;

                console.log("Appointments:", appointments);

                // Select the container where you want to append appointments
                var appointmentsContainer = document.getElementById("appointments-container");

                if (!appointmentsContainer) {
                    console.error("Appointments container not found");
                    return;
                }

                appointments.forEach(appointment => {
                    var clinicID = appointment.clinicID;

                    db.collection("clinics").doc(clinicID).get().then(clinicDoc => {
                        // For debugging
                        console.log("Clinic Data:", clinicDoc.data()); 

                        // Actual code
                        var clinicName = clinicDoc.data().clinicName;
                        var clinicAddress = clinicDoc.data().address;
                        var userAppmntDate = appointment.userAppmntDate;
                        var userAppmntTime = appointment.userAppmntTime;
                        var docID = clinicDoc.id;

                        // Create HTML elements for each appointment
                        var appointmentDiv = document.createElement("div");
                        appointmentDiv.className = "card text-center";
                        appointmentDiv.style.width = "18rem";
                        appointmentDiv.innerHTML = `
                            <div class="card-body">
                                <div class="card-title"><h4>${clinicName}</h4></div>
                                <div class="card-text">${clinicAddress}</div>
                                <p>Appointment Date: <br>${userAppmntDate}</p>
                                <p>Appointment Time: <br>${userAppmntTime}</p>
                                <a href="clinic_profile_page.html?docID=${docID}" class="btn btn-success">To clinic page</a>
                                <br><br>
                            <i id="save-${docID}" class="material-icons unfilled align-self-end">favorite</i>
                            </div>
                        `;

                        // Append the appointment information to the container
                        appointmentsContainer.appendChild(appointmentDiv);

                        // Update bookmark status on click
                        document.getElementById(`save-${docID}`).onclick = () => updateBookmark(currentUser, docID);
                    }).catch(error => {
                        console.error("Error getting clinic document: ", error);
                    });
                });
            }).catch(error => {
                console.error("Error getting user document: ", error);
            });
        } else {
            console.log("No user is signed in");
        }
    });
}

// Call the function when the page is loaded
window.onload = function () {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = firebase.firestore().collection("users").doc(user.uid);
            getAppointmentsInfo(currentUser);
        } else {
            console.log("No user is signed in");
        }
    });
};

// bookmarks

function updateBookmark(currentUser, bookmark_clinicID) {
    // Ensure currentUser is defined before proceeding
    if (!currentUser) {
        console.error("currentUser is not defined");
        return;
    }

    currentUser.get().then(userDoc => {
        let bookmarks = (userDoc.data() && userDoc.data().bookmarks) || [];
        let iconID = `save-${bookmark_clinicID}`;
        let isBookmarked = bookmarks.includes(bookmark_clinicID);

        if (isBookmarked) {
            // Remove the bookmark if it already exists
            currentUser.update({
                bookmarks: firebase.firestore.FieldValue.arrayRemove(bookmark_clinicID)
            }).then(() => {
                console.log("Item was removed: " + bookmark_clinicID);
                document.getElementById(iconID).innerText = 'favorite_border'; // Change to unfilled heart icon
                $('#' + iconID).css('color', 'gray');
            });
        } else {
            // Add the bookmark if it doesn't exist
            currentUser.update({
                bookmarks: firebase.firestore.FieldValue.arrayUnion(bookmark_clinicID)
            }).then(() => {
                console.log("Item added to bookmarks: " + bookmark_clinicID);
                document.getElementById(iconID).innerText = 'favorite'; // Change to filled heart icon 
                $('#' + iconID).text('favorite').css('color', 'red');
            });
        }
    });
}
