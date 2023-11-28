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

// function writeAppointmentInfo() {
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//             var userID = user.uid;
//             console.log("User ID: " + userID);

//             db.collection("users").doc(userID).get().then((thisUser) => {
//                 if (thisUser.exists) {
//                     appointTime = thisUser.data().userAppmntTime;
//                     appointDate = thisUser.data().userAppmntDate;
//                     console.log("Appointment Time: " + appointTime);
//                     console.log("Appointment Date: " + appointDate);
//                     document.getElementById("appointment-Date").innerHTML = "Date: " + appointDate;
//                     document.getElementById("appointment-Time").innerHTML = "Time: " + appointTime;
//                 } else {
//                     console.error("User document does not exist for ID: " + userID);
//                 }
//             }).catch((error) => {
//                 console.error("Error getting user document:", error);
//             });
//         } else {
//             console.error("User is not signed in");
//         }
//     });
// }

// writeAppointmentInfo();


// function writeAppointmentInfo() {
//     let params = new URL(window.location.href);
//     console.log("params is = ", params);

//     let aptID = params.searchParams.get("docID");
//     console.log(aptID);

//     if (aptID) {
//         db.collection("users").doc(aptID).get().then((thisUser) => {
//             if (thisUser.exists) {
//                 appointTime = thisUser.data().userAppmntTime;
//                 appointDate = thisUser.data().userAppmntDate;
//                 console.log("Appointment Time: " + appointTime);
//                 console.log("Appointment Date: " + appointDate);
//                 document.getElementById("appointment-Date").innerHTML = "Date: " + appointDate;
//                 document.getElementById("appointment-Time").innerHTML = "Time: " + appointTime;
//             } else {
//                 console.error("User document does not exist for ID: " + aptID);
//             }
//         }).catch((error) => {
//             console.error("Error getting user document:", error);
//         });
//     } else {
//         console.error("Appointment ID is null or empty");
//     }
// }
