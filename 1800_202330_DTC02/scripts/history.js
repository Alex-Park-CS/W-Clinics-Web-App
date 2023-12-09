// Function to retrieve and display user's appointments
function getAppointmentsInfo(currentUser) {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var userID = user.uid;

            // Get user document from Firestore
            db.collection("users").doc(userID).get().then(userDoc => {
                // Retrieve user's appointments from the document
                var appointments = userDoc.data().appointments;

                console.log("Appointments:", appointments);

                // Select the container where you want to append appointments
                var appointmentsContainer = document.getElementById("appointments-container");

                if (!appointmentsContainer) {
                    console.error("Appointments container not found");
                    return;
                }

                // Iterate through each appointment and display its information
                appointments.forEach(appointment => {
                    var clinicID = appointment.clinicID;

                    // Get clinic document from Firestore
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
            // Set the global currentUser variable to the current user's Firestore document
            var currentUser = firebase.firestore().collection("users").doc(user.uid);
            // Retrieve and display user's appointments
            getAppointmentsInfo(currentUser);
        } else {
            console.log("No user is signed in");
        }
    });
};
