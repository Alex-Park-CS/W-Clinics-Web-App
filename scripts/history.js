function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            getAppointmentsInfo()
        } else {
            console.log("No user is signed in");
        }
    });
}
doAll();

// Function to get user appointments and display clinic information
// Assuming you have an array of appointments within a specific user document
// Function to get user appointments and display clinic information
// Function to get user appointments and display clinic information
function getAppointmentsInfo() {
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
                        var clinicName = clinicDoc.data().clinicName;
                        var clinicAddress = clinicDoc.data().clinicAddress;
                        var userAppmntDate = appointment.userAppmntDate;
                        var userAppmntTime = appointment.userAppmntTime;
                        var docID = clinicDoc.id;

                        // Create HTML elements for each appointment
                        var appointmentDiv = document.createElement("div");
                        appointmentDiv.innerHTML = `
                            <p>Clinic Name: ${clinicName}</p>
                            <p>Clinic Address: ${clinicAddress}</p>
                            <p>Appointment Date: ${userAppmntDate}</p>
                            <p>Appointment Time: ${userAppmntTime}</p>
                            <p>Clinic Document ID: ${docID}</p>
                            <hr>
                        `;

                        // Append the appointment information to the container
                        appointmentsContainer.appendChild(appointmentDiv);
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
    doAll();
};

