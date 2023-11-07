<<<<<<< HEAD
=======
// function for reading userinfo 
function readUserfirstname(username) {
    db.collection("user-info").doc(username)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-firstname").innerHTML = whatgoeshere.data().userFirstName;

        }
        )
}
readUserfirstname("user-info-details");


function readUsermiddlename(usermiddlename) {
    db.collection("user-info").doc(usermiddlename)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-middlename").innerHTML = whatgoeshere.data().userMiddleName;

        }
        )
}
readUsermiddlename("user-info-details");

function readUserLastName(userlastname) {
    db.collection("user-info").doc(userlastname)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-lastname").innerHTML = whatgoeshere.data().userLastName;

        }
        )
}
readUserLastName("user-info-details");

function readUserDOB(userbirth) {
    db.collection("user-info").doc(userbirth)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-DOB").innerHTML = whatgoeshere.data().userDOB;

        }
        )
}
readUserDOB("user-info-details");

function readUserGender(usergender) {
    db.collection("user-info").doc(usergender)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-gender").innerHTML = whatgoeshere.data().userGender;

        }
        )
}
readUserGender("user-info-details");

function readUserPhone(userphone) {
    db.collection("user-info").doc(userphone)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-phone").innerHTML = whatgoeshere.data().userPhone;

        }
        )
}
readUserPhone("user-info-details");

function readUserEmail(useremail) {
    db.collection("user-info").doc(useremail)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-email").innerHTML = whatgoeshere.data().userEmail;

        }
        )
}
readUserEmail("user-info-details");

function readUserContactMethod(usercontactmethod) {
    db.collection("user-info").doc(usercontactmethod)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-contactmethod").innerHTML = whatgoeshere.data().userContactMethod;

        }
        )
}
readUserContactMethod("user-info-details");

//appointment history
function readUserClinicName(userclinicname) {
    db.collection("user-info").doc(userclinicname)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-clinicname").innerHTML = whatgoeshere.data().userAppointmentHistory["clinicName"];

        }
        )
}
readUserClinicName("user-info-details");

function readUserClinicLocation(usercliniclocation) {
    db.collection("user-info").doc(usercliniclocation)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-cliniclocation").innerHTML = whatgoeshere.data().userAppointmentHistory["clinicLocation"];

        }
        )
}
readUserClinicLocation("user-info-details");

function readUserVisitingDate(uservisitingdate) {
    db.collection("user-info").doc(uservisitingdate)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-visitingdate").innerHTML = whatgoeshere.data().userAppointmentHistory["clinicVisitingDate"];

        }
        )
}
readUserVisitingDate("user-info-details");


function readUserMyRatings(usermyratings) {
    db.collection("user-info").doc(usermyratings)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-myratings").innerHTML = whatgoeshere.data().userAppointmentHistory["clinicMyRatings"];

        }
        )
}
readUserMyRatings("user-info-details");


function readUserFavourite(userfavourite) {
    db.collection("user-info").doc(userfavourite)
        .onSnapshot(whatgoeshere => {
            console.log(whatgoeshere.data());
            document.getElementById("user-favourite").innerHTML = whatgoeshere.data().userAppointmentHistory["clinicFavourite"];

        }
        )
}
readUserFavourite("user-info-details");


// Entering in Clinics into the database
>>>>>>> refs/remotes/origin/main
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
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    reviewsRef.add({
        username: "Bob Marley",
        userid: "",
        clinicName: "Keefer Walk-In and Medical Clinic",
        rating: 3.2,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    reviewsRef.add({
        username: "Carly Anderson",
        userid: "",
        clinicName: "TELUS Health Care Centres",
        rating: 2.7,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
}

// pulling info from clinics database

function readClinicName(clinicName) {
    db.collection("clinics").doc(clinicName).onSnapshot(clinicData => {
        console.log(clinicData.data());
        nameOfClinic = clinicData.data().name;
        document.getElementById("clinicName").innerHTML = nameOfClinic;
        })
}
readClinicName("clinic-name");

