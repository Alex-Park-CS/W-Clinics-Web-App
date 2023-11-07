// Entering in Clinics into the database
function writeClinics() {
    //define a variable for the collection you want to create in Firestore to populate data
    var clinicsRef = db.collection("clinics");

    clinicsRef.add({
        clinicName: "City Centre Urgent Primary Care Centre", //replace with your own city?
        address: "1290 Hornby St",
        contact: "604-416-1811",
        website: "seymourhealth.ca",
        rating: 4.0,
        hours: "Monday ~ Saturday: 8 a.m. - 5 p.m. \n Sunday: 9 a.m. - 5 p.m.",
        walkin_availibility: "yes",
        wait_time_minutes: 15,          //number value
        distance_metres: 120,       //number value
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    clinicsRef.add({
        clinicName: "Keefer Walk-In and Medical Clinic", //replace with your own city?
        address: "118 Keefer St",
        contact: "604-674-7403",
        website: "keefermed.ca",
        rating: 2.7,
        hours: "Monday ~ Saturday: 8:30 a.m. - 5 p.m. \n Sunday and Holidays: Closed",
        walkin_availibility: "yes",
        wait_time_minutes: 10,          //number value
        distance_metres: 210,       //number value
        last_updated: firebase.firestore.Timestamp.fromDate(new Date("March 10, 2022"))
    });
    clinicsRef.add({
        clinicName: "TELUS Health Care Centres", //replace with your own city?
        address: "808 Nelson St #101",
        contact: "604-681-2400",
        website: "https://www.telus.com/en/health/care-centres/locations/vancouver-hastings?utm_source=google&utm_medium=local&utm_campaign=google-local",
        rating: 3.9,
        hours: "Monday ~ Saturday: 7 a.m. - 4 p.m. \n Sunday and Holidays: Closed",
        walkin_availibility: "yes",
        wait_time_minutes: 7,          //number value
        distance_metres: 536,       //number value
        last_updated: firebase.firestore.Timestamp.fromDate(new Date("January 1, 2023"))
    });
}

// Entering in reviews into the database
function writeReviews() {
    //define a variable for the collection you want to create in Firestore to populate data
    var reviewsRef = db.collection("reviews");

    reviewsRef.add({
        username: "Andy Jones",
        userid: "",
        clinicName: "City Centre Urgent Primary Care Centre",
        rating: 4.0,
        comments: "good clinic",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    reviewsRef.add({
        username: "Bob Marley",
        userid: "",
        clinicName: "Keefer Walk-In and Medical Clinic",
        rating: 3.2,
        comments: "ok clinic",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    reviewsRef.add({
        username: "Carly Anderson",
        userid: "",
        clinicName: "TELUS Health Care Centres",
        rating: 2.7,
        comments: "bad clinic",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
}

// pulling info from clinics database

// function readClinicName(clinicName) {
//     db.collection("clinics").doc(clinicName).onSnapshot(clinicData => {
//         console.log(clinicData.data());
//         nameOfClinic = clinicData.data().name;
//         document.getElementById("clinicName").innerHTML = nameOfClinic;
//     })
// }
// readClinicName("clinic-name");

