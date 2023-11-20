// Inez
// function for appointment info
// directly from firebase
const appointmentID = localStorage.getItem("appointmentID"); 

//first name
function readFirstname(userfirstname) {
    db.collection("user-info").doc(userfirstname) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-firstname").innerHTML = whatgoeshere.data().userFirstname;

    }
    )
}

readFirstname("user-info-details");

//middle name
function readMiddlename(usermiddlename) {
    db.collection("user-info").doc(usermiddlename) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-middlename").innerHTML = whatgoeshere.data().userMiddlename;

    }
    )
}
readMiddlename("user-info-details");

//last name
function readLastname(userlastname) {
    db.collection("user-info").doc(userlastname) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-lastname").innerHTML = whatgoeshere.data().userLastename;

    }
    )
}


readLastname("user-info-details");


//user email
function readUserEmail(useremail) {
    db.collection("user-info").doc(useremail) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-email").innerHTML = whatgoeshere.data().userEmail;

    }
    )
}

readUserEmail("user-info-details");


//user phone
function readUserPhone(userphone) {
    db.collection("user-info").doc(userphone) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-phone").innerHTML = whatgoeshere.data().userPhone;

    }
    )
}

readUserPhone("user-info-details");

//DOB

function readUserDOB(userDOB) {
    db.collection("user-info").doc(userDOB) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-DOB").innerHTML = whatgoeshere.data().userDOB;

    }
    )
}

readUserDOB("user-info-details");

//user-gender

function readuserGenderMale(userGender) {
    db.collection("user-info").doc(userGender) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-gender-male").innerHTML = whatgoeshere.data().userGender["Male"];

    }
    )
}

readuserGenderMale("user-info-details");


function readUserGenderFemale(userGender) {
    db.collection("user-info").doc(userGender) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-gender-female").innerHTML = whatgoeshere.data().userGender["Female"];

    }
    )
}

readUserGenderFemale("user-info-details");

function readUserGenderOthers(userGender) {
    db.collection("user-info").doc(userGender) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-gender-others").innerHTML = whatgoeshere.data().userGender["Others"];

    }
    )
}

readUserGenderOthers("user-info-details");

// contact method
function readContactMethodPhone(userContactmethodPhone) {
    db.collection("user-info").doc(userContactmethodPhone) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-contact-phone").innerHTML = whatgoeshere.data().userContactMethod["Phone"];

    }
    )
}

readContactMethodPhone("user-info-details");

function readContactMethodEmail(userContactmethodEmail) {
    db.collection("user-info").doc(userContactmethodEmail) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-contact-email").innerHTML = whatgoeshere.data().userContactMethod["Email"];

    }
    )
}

readContactMethodEmail("user-info-details");


//userAppmtDate - only date
function readAppointmentDate(userappmtdate) {
    db.collection("user-info").doc(userappmtdate) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-appmtDate").innerHTML = whatgoeshere.data().userAppmnt["userAppmDateTime"];

    }
    )
}

readAppointmentDate("user-info-details");


//userAppmtTime - only time
function readAppointmentTime(userappmtTime) {
    db.collection("user-info").doc(userappmtTime) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-appmtTime").innerHTML = whatgoeshere.data().userAppmnt["userAppmDateTime"];

    }
    )
}

readAppointmentTime("user-info-details");


//user memo
function readUserApppointmentDetail(userappmtdetail) {
    db.collection("user-info").doc(userappmtdetail) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-appmtDetail").innerHTML = whatgoeshere.data().userAppmnt["userAppmDetail"];

    }
    )
}

readUserApppointmentDetail("user-info-details");

//reason for visit 
//visit-coldflue
// function readUserVisitCold(userVisitCold) {
//     db.collection("user-info").doc(userVisitCold) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("visit-coldflue").innerHTML = whatgoeshere.data().userVisitReason["userReasonCold"];
//     }
//     )
// }

// readUserVisitCold("user-info-details");


// //allergies
// function readUserVisitAllergies(userVisitAllergies) {
//     db.collection("user-info").doc(userVisitAllergies) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("visit-allergies").innerHTML = whatgoeshere.data().userVisitReason["userReasonAllergies"];
//     }
//     )
// }

// readUserVisitAllergies("user-info-details");

// //skin
// function readUserVisitSkin(userVisitSkin) {
//     db.collection("user-info").doc(userVisitSkin) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("visit-skin").innerHTML = whatgoeshere.data().userVisitReason["userVisitSkin"];
//     }
//     )
// }

// readUserVisitSkin("user-info-details");


// //backpain
// function readUserVisitBack(userVisitBack) {
//     db.collection("user-info").doc(userVisitBack) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("visit-backpain").innerHTML = whatgoeshere.data().userVisitReason["userVisitBack"];
//     }
//     )
// }

// readUserVisitBack("user-info-details");


// // jointpain
// function readUserVisitJoint(userVisitJoint) {
//     db.collection("user-info").doc(userVisitJoint) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("visit-jointpain").innerHTML = whatgoeshere.data().userVisitReason["userVisitJoint"];
//     }
//     )
// }

// readUserVisitJoint("user-info-details");


// // visit-mental
// function readUserVisitMental(userVisitMental) {
//     db.collection("user-info").doc(userVisitMental) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("visit-mental").innerHTML = whatgoeshere.data().userVisitReason["userVisitMental"];
//     }
//     )
// }

// readUserVisitMental("user-info-details");


// // Mental
// function readUserVisitHeadache(userVisitHeadache) {
//     db.collection("user-info").doc(userVisitHeadache) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("visit-headache").innerHTML = whatgoeshere.data().userVisitReason["userVisitHeadache"];
//     }
//     )
// }

// readUserVisitHeadache("user-info-details");


// // Blood Pressure
// function readUserVisitBlood(userVisitBlood) {
//     db.collection("user-info").doc(userVisitBlood) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("visit-bloodpressure").innerHTML = whatgoeshere.data().userVisitReason["userVisitBlood"];
//     }
//     )
// }

// readUserVisitBlood("user-info-details");

// //wellness
// function readUserVisitWellness(userVisitWellness) {
//     db.collection("user-info").doc(userVisitWellness) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("visit-wellness").innerHTML = whatgoeshere.data().userVisitReason["userVisitWellness"];
//     }
//     )
// }

// readUserVisitWellness("user-info-details");

// //Others
// function readUserVisitOthers(userVisitOthers) {
//     db.collection("user-info").doc(userVisitOthers) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("visit-wellness").innerHTML = whatgoeshere.data().userVisitReason["userVisitOthers"];
//     }
//     )
// }

// readUserVisitOthers("user-info-details");


function submitappmt() {
    document.getElementById("appmtsubmit").innerHTML = "thanks.html";
  }

// cdp

// $(document).ready(function () {
//     $('input[type=submit]').click(function () {
//       $('input[type=submit]').toggleClass('red');
//     });
//   });

// DOM
// step 2.5

//visible to all functions on this page
//event handler

function displayAppointmentInfo() {
    let params = new URL(window.location.href);
    console.log("params is = ", params)
    let aptID = params.searchParams.get("docID");
    console.log(aptID);


    db.collection("user-info")
        .doc("user-info-details")
        .get()
        .then(doc => {
            userAppointment = doc.data();
            userFirstNameAppmt= userAppointment.userFirstName;
            userMiddletNameAppmt = userAppointment.userMiddle;
            userLasttNameAppmt = userAppointment.userLastName;
            userEmailAppmt = userAppointment.userEmail;
            userPhoneAppmt = userAppointment.userPhone;
            userDOBAppmt = userAppointment.userDOB;
            userGenderFemaleAppmt = userAppointment.userGender["Female"];
            userGenderMaleAppmt = userAppointment.userGender["Male"];
            userGenderOtherAppmt = userAppointment.userGender["Others"];
            userContactMethodEmailAppmt = userAppointment.userContactMethod["Email"];
            userContactMethodPhoneAppmt = userAppointment.userContactMethod["Phone"];
            userDateAppmt = userAppointment.userAppmnt["Date"];
            userTimeAppmt = userAppointment.userAppmnt["Time"];
            userSpecialRequestAppmt = userAppointment.userAppmnt["userVisitReason"];
            


            document.getElementById("user-firstname").innerHTML = userFirstNameAppmt;
            // document.getElementById("user-middlename").innerHTML = "Address: " + clinicAddress;
            // document.getElementById("clinic-hours").innerHTML = clinicHours
            // document.getElementById("clinic-waittime").innerHTML = "Wait Time: " + clinicWaitTime + "min"
            // document.getElementById("clinic-walkin").innerHTML = "Walkin Availibility: " + clinicWalkin
            // document.getElementById("clinic-rating").innerHTML = "Rating: " + clinicRating
            let imgEvent = document.querySelector(".clinic-img");
        });
}
displayAppointmentInfo();

// function displayAppointmentInfo() {
//     let params = new URL(window.location.href);
//     let aptID = params.searchParams.get("docID");

//     localStorage.setItem('clinicID', aptID)
//     window.location.href = 'add_review.html';
// }


function submitAppointment() {
    // let params = new URL(window.location.href);
    // let submitID = params.searchParams.get("docID");
    
    // localStorage.setItem('clinicID', submitID)
    window.location.href = 'confirm_appointment.html';
    }

