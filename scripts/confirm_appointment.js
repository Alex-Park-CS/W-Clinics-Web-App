// Retrieve clinicID from local storage
var clinicID = localStorage.getItem("clinicID");
console.log("clinic: " + clinicID);

// Function to write clinic name and address
function writeClinicInfo() {
    // Retrieve clinic information from Firestore
    db.collection("clinics").doc(clinicID).get().then((thisClinic) => {
        if (thisClinic.exists) {
            clinicName = thisClinic.data().clinicName;
            clinicAddress = thisClinic.data().address;

            // Display clinic name and address in HTML
            document.getElementById("clinic-name").innerHTML = clinicName;
            document.getElementById("clinic-address").innerHTML = clinicAddress;
        } else {
            console.error("Clinic document does not exist for ID: " + clinicID);
        }
    }).catch((error) => {
        console.error("Error getting clinic document:", error);
    });
}

// Call the function to write clinic information
writeClinicInfo();

// Function to write user appointment information
function writeAppointmentInfo() {
    // Check if the user is signed in
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var userID = user.uid;
            console.log("User ID: " + userID);

            // Retrieve user's appointment information from Firestore
            db.collection("users").doc(userID).get().then((thisUser) => {
                if (thisUser.exists) {
                    appointTime = thisUser.data().userAppmntTime;
                    appointDate = thisUser.data().userAppmntDate;

                    // Display appointment information in the console
                    console.log("Appointment Time: " + appointTime);
                    console.log("Appointment Date: " + appointDate);
                } else {
                    console.error("User document does not exist for ID: " + userID);
                }
            }).catch((error) => {
                console.error("Error getting user document:", error);
            });
        } else {
            console.error("User is not signed in");
        }
    });
}

// Call the function to write user appointment information
writeAppointmentInfo();

// Function to save appointment data to Firestore
function saveAppointmentData() {
    // Get the current user
    var user = firebase.auth().currentUser;

    if (user) {
        var userID = user.uid;

        // Create an object to store all the relevant data
        var appointmentData = {
            clinicID: clinicID,
            clinicName: clinicName,
            clinicAddress: clinicAddress,
        };

        // Save the appointment data to Firestore
        db.collection("users").doc(userID).update({
            appointmentData: appointmentData  // Save the whole appointmentData object
        }).then(() => {
            console.log("Appointment data saved successfully");
        }).catch((error) => {
            console.error("Error saving appointment data:", error);
        });
    } 
}

// Call the function to save appointment data
saveAppointmentData();
