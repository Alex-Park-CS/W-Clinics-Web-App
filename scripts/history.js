function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            getappointmentHistory(user)
        } else {
            console.log("No user is signed in");
        }
    });
}
doAll();

function getappointmentHistory(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {
            var appointments = userDoc.data().appointments;
            console.log(appointments);

            let newcardTemplate = document.getElementById("ClinicCardTemplate2");
            
            // Iterate through the ARRAY of appointments
            appointments.forEach(appointment => {
                console.log(appointment);
                var clinicDocumentID = appointment.clinicID; // Assuming you have clinicID in your appointment data
                db.collection("clinics").doc(clinicDocumentID).get().then(doc => {
                    var clinicName = appointment.clinicName;
                    var visitDate = appointment.userAppmntDate;
                    var visitTime = appointment.userAppmntTime;
                    var docID = clinicDocumentID;  // Clinic document ID
                    
                    //clone the new card
                    let clinicCard = newcardTemplate.content.cloneNode(true);
    
                    //update to display clinicName, address, rating, hours, walkin_availibility, wait_time_minutes, last_updated
                    clinicCard.querySelector('.clinic-name').innerHTML = clinicName;
                    console.log(clinicCard.querySelector('.clinic-name')); 
                    clinicCard.querySelector('.clinic-address').innerHTML = "Date: " + visitDate + "<br>Time: " + visitTime;
                    console.log(clinicCard.querySelector('.clinic-address')); 
                    clinicCard.querySelector('.clinic-card-title').href = "clinic_profile_page.html?docID=" + docID;

                    // Append the clinic card to the container
                    document.getElementById("clinics-go-here").appendChild(clinicCard);
                });
            });
        })
        .catch(error => {
            console.error("Error getting user document: ", error);
        });
}
