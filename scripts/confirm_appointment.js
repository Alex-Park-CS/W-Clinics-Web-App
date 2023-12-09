var clinicID = localStorage.getItem("clinicID");
console.log("clinic: " + clinicID);

function writeClinicName() {
    db.collection("clinics").doc(clinicID).get().then((thisClinic) => {
        if (thisClinic.exists) {
            clinicName = thisClinic.data().clinicName;
            clinicAddress = thisClinic.data().address;
            console.log("Clinic Name: " + clinicName);
            console.log("Clinic Address: " + clinicAddress);
            document.getElementById("clinic-name").innerHTML = clinicName;
            document.getElementById("clinic-address").innerHTML = clinicAddress;
        } else {
            console.error("Clinic document does not exist for ID: " + clinicID);
        }
    }).catch((error) => {
        console.error("Error getting clinic document:", error);
    });
}

writeClinicName();

function writeAppointmentInfo() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var userID = user.uid;
            console.log("User ID: " + userID);

            db.collection("users").doc(userID).get().then((thisUser) => {
                if (thisUser.exists) {
                    appointTime = thisUser.data().userAppmntTime;
                    appointDate = thisUser.data().userAppmntDate;
                    console.log("Appointment Time: " + appointTime);
                    console.log("Appointment Date: " + appointDate);
                    // document.getElementById("appointment-Date").innerHTML = "Date: " + appointDate;
                    // document.getElementById("appointment-Time").innerHTML = "Time: " + appointTime;
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
            // appointDate: appointDate,
            // appointTime: appointTime
        };

        // Save the appointment data to Firestore
        db.collection("users").doc(userID).update({
            // userAppmntDate: appointDate,
            // userAppmntTime: appointTime,
            appointmentData: appointmentData  // Save the whole appointmentData object
        }).then(() => {
            console.log("Appointment data saved successfully");
        }).catch((error) => {
            console.error("Error saving appointment data:", error);
        });
    } else {
        console.error("User is not signed in");
    }
}


// Function to display clinic information
function writeClinicName() {
    db.collection("clinics").doc(clinicID).get().then((thisClinic) => {
        clinicName = thisClinic.data().clinicName;
        clinicAddress = thisClinic.data().address;

        document.getElementById("clinic-name").innerHTML = clinicName;
        document.getElementById("clinic-address").innerHTML = clinicAddress;
    });
}

// Call the function to display clinic information
writeClinicName();


// for the next step
// Function to get appointment date dynamically
// function getAppointmentDate() {
  
//     return document.getElementById('appointmentDateInput').value;
// }
// Function to get appointment time dynamically
// function getAppointmentTime() {
   
//     return document.getElementById('appointmentTimeInput').value;
// }

// Assuming you have some way to get appointment date and time, replace these placeholders with your actual data
// var appointDate = getAppointmentDate();  
// var appointTime = getAppointmentTime();


// Call the function to save the appointment data
saveAppointmentData();
