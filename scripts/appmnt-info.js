// Inez



// directly from firebase
// const appointmentID = localStorage.getItem("appointmentID"); 

// //first name
// function readFirstname(userfirstname) {
//     db.collection("user-info").doc(userfirstname) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("user-firstname").innerHTML = whatgoeshere.data().userFirstname;

//     }
//     )
// }

// readFirstname("user-info-details");

// //middle name
// function readMiddlename(usermiddlename) {
//     db.collection("user-info").doc(usermiddlename) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("user-middlename").innerHTML = whatgoeshere.data().userMiddlename;

//     }
//     )
// }
// readMiddlename("user-info-details");

// //last name
// function readLastname(userlastname) {
//     db.collection("user-info").doc(userlastname) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("user-lastname").innerHTML = whatgoeshere.data().userLastename;

//     }
//     )
// }


// readLastname("user-info-details");


// //user email
// function readUserEmail(useremail) {
//     db.collection("user-info").doc(useremail) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("user-email").innerHTML = whatgoeshere.data().userEmail;

//     }
//     )
// }

// readUserEmail("user-info-details");


// //user phone
// function readUserPhone(userphone) {
//     db.collection("user-info").doc(userphone) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("user-phone").innerHTML = whatgoeshere.data().userPhone;

//     }
//     )
// }

// readUserPhone("user-info-details");

// //DOB

// function readUserDOB(userDOB) {
//     db.collection("user-info").doc(userDOB) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("user-DOB").innerHTML = whatgoeshere.data().userDOB;

//     }
//     )
// }

// readUserDOB("user-info-details");

// //user-gender

// function readuserGender(userGender) {
//     db.collection("user-info").doc(userGender) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         // document.getElementById("user-gender-male").innerHTML = whatgoeshere.data().userGender["Male"];
//         document.getElementById("user-gender").checked = whatgoeshere.data().userGender;



//     }
//     )
// }

// readuserGender("user-info-details");

// // contact method
// function readContactMethod(userContactmethod) {
//     db.collection("user-info").doc(userContactmethod) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         // document.getElementById("user-contact-phone").innerHTML = whatgoeshere.data().userContactMethod["Phone"];
//         document.getElementById("user-contact").checked = whatgoeshere.data().userContactMethod;
//     }
//     )
// }

// readContactMethod("user-info-details");


// //userAppmtTime
// function readAppointmentTime(userappmtTime) {
//     db.collection("user-info").doc(userappmtTime) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("user-appmtTime").innerHTML = whatgoeshere.data().userAppmntTime;

//     }
//     )
// }

// readAppointmentTime("user-info-details");

// function readAppointmentDate(userappmtDate) {
//     db.collection("user-info").doc(userappmtDate) 
//     .onSnapshot(whatgoeshere => {
//         console.log(whatgoeshere.data());
//         document.getElementById("user-appmtDate").innerHTML = whatgoeshere.data().userAppmntDate;

//     }
//     )
// }

// readAppointmentTime("user-info-details");

// reason for visit 
// visit-coldflue
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
            userGenderAppmt = userAppointment.userGender;
            // userGenderMaleAppmt = userAppointment.userGender["Male"];
            // userGenderOtherAppmt = userAppointment.userGender["Others"];
            userContactMethodAppmt = userAppointment.userContactMethod;
            // userContactMethodPhoneAppmt = userAppointment.userContactMethod["Phone"];
            userDateAppmt = userAppointment.userAppmntDate;
            userVisitReasonCold = userAppointment.userCold;
            userVisitReasonAllergies = userAppointment.userAllergies;
            userVisitReasonSkin = userAppointment.userSkin;
            userVisitReasonBack = userAppointment.userBack;
            userVisitReasonJoint = userAppointment.userJoint;
            userVisitReasonMental = userAppointment.userMental;
            userVisitReasonHead = userAppointment.userHead;
            userVisitReasonBlood = userAppointment.userBlood;
            userVisitReasonWell = userAppointment.userWell;
            userVisitReasonOthers = userAppointment.userOthers;

        });
}
displayAppointmentInfo();


async function clickSubmitAppointment() {
    console.log("click submit button");
   
    let userFirstNameAppmt= document.getElementById("user-firstname").value;
    let userMiddletNameAppmt = document.getElementById("user-middlename").value;
    let userLasttNameAppmt = document.getElementById("user-lastname").value;
    let userEmailAppmt = document.getElementById("user-email").value;
    let userPhoneAppmt = document.getElementById("user-phone").value;
    let userDOBAppmt = document.getElementById("user-DOB").value;
    let userGender = document.getElementById("user-gender").value;
    // let userGenderMaleAppmt = document.getElementById("user-gender-female").value;
    // let userGenderOtherAppmt = document.getElementById("user-gender-others").value;
    let userContactMethodAppmt = document.getElementById("user-contact").value;
    // let userContactMethodPhoneAppmt = document.getElementById("user-contact-phone").value;
    let userDateAppmt = document.getElementById("user-appmtDate").value;
    let userTimeAppmt = document.getElementById("user-appmtTime").value;
    // let userSpecialRequestAppmt = document.getElementById("user-appmtDetail").value;
    let userVisitReasonCold = document.getElementById("visit-coldflue").value;
    let userVisitReasonAllergies = document.getElementById("visit-allergies").value;
    let userVisitReasonSkin = document.getElementById("visit-skin").value;
    let userVisitReasonBack = document.getElementById("visit-backpain").value;
    let userVisitReasonJoint = document.getElementById("visit-jointpain").value;
    let userVisitReasonMental = document.getElementById("visit-mental").value;
    let userVisitReasonHead = document.getElementById("visit-headache").value;
    let userVisitReasonBlood = document.getElementById("visit-bloodpressure").value;
    let userVisitReasonWell = document.getElementById("visit-wellness").value;
    let userVisitReasonOthers = document.getElementById("visit-others").value;


    console.log("Form has been made by a user");

    var user = firebase.auth().currentUser;
    if (user) {
        var currentUser = db.collection("users").doc(user.uid);
        var userID = user.uid;
        console.log(userID)
    
        // Get the document for the current user.
        await db.collection("users").add({
            
            userFirstName : user-firstname,
            userMiddleName : user-middlename,
            userLastName : user-lastname,
            userEmail : user-email,
            userPhone : user-phone,
            userDOB : user-DOB,
            userGender : user-gender,
            userContactMethod : user-contact,
            userAppmntDate: user-appmtDate,
            userAppmntTime : user-appmtTime,
            userCold: visit-coldflue,
            userAllergies: visit-allergies,
            userSkin: visit-skin,
            userBack: visit-back,
            userJoint: visit-joint,
            userMental: visit-mental,
            userHead: visit-head,
            userBlood: visit-blood,
            userWell: visit-wellness,
            userVisitOthers: visit-others,
            // userAppmnt,userAppmtDetail : user-appmtDetail,

            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            window.location.href = "confirm_appointment.html"; // Redirect to the thanks page
        }).catch(error => {
            console.error("Error occured.");
        });
    } else {
        console.log("User is not validated");
    }
}
clickSubmitAppointment();
