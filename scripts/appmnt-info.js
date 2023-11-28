//Inez
var clinicID = localStorage.getItem("clinicID");
console.log(clinicID);

function writeClinicName() {
    db.collection("clinics").doc(clinicID).get().then((thisClinic) => {
        clinicName = thisClinic.data().clinicName;
        document.getElementById("clinic-name").innerHTML = "Making an appointment with " + "<br>" + clinicName;
    });
}

writeClinicName();

function displayAppointmentInfo() {
    let params = new URL(window.location.href);
    console.log("params is = ", params);

    let aptID = params.searchParams.get("docID");
    console.log(aptID);

    firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var userID = user.uid;
        console.log(userID);

        db.collection("users").doc(userID).get().then((doc) => {
            if (doc.exists) {
                var userAppointment = doc.data();
                console.log(userAppointment);

                db.collection("users").doc(userID).update({
                    userAppointment: doc.data(),
                    userFirstNameAppmt: userAppointment.userFirstName,
                    userMiddletNameAppmt: userAppointment.userMiddleName,
                    userLasttNameAppmt: userAppointment.userLastName,
                    userEmailAppmt: userAppointment.userEmail,
                    userPhoneAppmt: userAppointment.userPhone,
                    userDOBAppmt: userAppointment.userDOB,
                    userGenderAppmt: userAppointment.userGender,
                    userContactMethodAppmt: userAppointment.userContactMethod,
                    userAppmntTime: userAppointment.userAppmntTime,
                    userDateAppmt: userAppointment.userAppmntDate,
                    userVisitReasonCold: userAppointment.userCold,
                    userVisitReasonAllergies: userAppointment.userAllergies,
                    userVisitReasonSkin: userAppointment.userSkin,
                    userVisitReasonBack: userAppointment.userBack,
                    userVisitReasonJoint: userAppointment.userJoint,
                    userVisitReasonMental: userAppointment.userMental,
                    userVisitReasonHead: userAppointment.userHead,
                    userVisitReasonBlood: userAppointment.userBlood,
                    userVisitReasonWell: userAppointment.userWell,
                    userVisitReasonOthers: userAppointment.userOthers,
                });
            }
        });
    }
});
}

// displayAppointmentInfo();

async function clickSubmitAppointment() {
    console.log("click submit button");

    firebase.auth().onAuthStateChanged(async function (user) {
        if (user) {
            var userID = user.uid;
            console.log(userID);

            let userFirstNameAppmt = document.getElementById("user-firstname").value;
            let userMiddletNameAppmt = document.getElementById("user-middlename").value;
            let userLasttNameAppmt = document.getElementById("user-lastname").value;
            let userEmailAppmt = document.getElementById("user-email").value;
            let userPhoneAppmt = document.getElementById("user-phone").value;
            let userDOBAppmt = document.getElementById("user-DOB").value;
            let userGender = document.getElementById("user-gender").value;
            let userContactMethodAppmt = document.getElementById("user-contact").value;
            let userDateAppmt = document.getElementById("user-appmtDate").value;
            let userTimeAppmt = document.getElementById("user-appmtTime").value;
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

            // Get the clinic information
            var clinicID = localStorage.getItem("clinicID");
            var clinicRef = db.collection("clinics").doc(clinicID);
            var clinicData = await clinicRef.get();
            console.log(clinicID);

            // Get the document for the current user.
            var userRef = db.collection("users").doc(userID);
            var userDoc = await userRef.get();

            if (userDoc.exists) {
                // Update existing user document with appointment information
                await userRef.update({
                    appointments: firebase.firestore.FieldValue.arrayUnion({
                        userFirstName: userFirstNameAppmt,
                        userMiddleName: userMiddletNameAppmt,
                        userLastName: userLasttNameAppmt,
                        userEmail: userEmailAppmt,
                        userPhone: userPhoneAppmt,
                        userDOB: userDOBAppmt,
                        userGender: userGender,
                        userContactMethod: userContactMethodAppmt,
                        userAppmntDate: userDateAppmt,
                        userAppmntTime: userTimeAppmt,
                        userCold: userVisitReasonCold,
                        userAllergies: userVisitReasonAllergies,
                        userSkin: userVisitReasonSkin,
                        userBack: userVisitReasonBack,
                        userJoint: userVisitReasonJoint,
                        userMental: userVisitReasonMental,
                        userHead: userVisitReasonHead,
                        userBlood: userVisitReasonBlood,
                        userWell: userVisitReasonWell,
                        userVisitOthers: userVisitReasonOthers,
                      
                    }),
                });
            } else {
                // Create a new user document with the first appointment
                await db.collection("users").doc(userID).set({
                    userFirstName: userFirstNameAppmt,
                    userMiddleName: userMiddletNameAppmt,
                    userLastName: userLasttNameAppmt,
                    userEmail: userEmailAppmt,
                    userPhone: userPhoneAppmt,
                    userDOB: userDOBAppmt,
                    userGender: userGender,
                    userContactMethod: userContactMethodAppmt,
                    appointments: [
                        {
                            userAppmntDate: userDateAppmt,
                            userAppmntTime: userTimeAppmt,
                            userCold: userVisitReasonCold,
                            userAllergies: userVisitReasonAllergies,
                            userSkin: userVisitReasonSkin,
                            userBack: userVisitReasonBack,
                            userJoint: userVisitReasonJoint,
                            userMental: userVisitReasonMental,
                            userHead: userVisitReasonHead,
                            userBlood: userVisitReasonBlood,
                            userWell: userVisitReasonWell,
                            userVisitOthers: userVisitReasonOthers,
                      
                        },
                    ],
                });
            }

            // Redirect to the thanks page
            window.location.href = "confirm_appointment.html";
        } else {
            console.log("User is not validated");
        }
    });
}

// var user = firebase.auth().currentUser;

// // Call functions with the defined user
// if (user) {
//     displayAppointmentInfo();
// } else {
//     console.log("User is not authenticated."); // error messages?
// }

// if (user) {
//     clickSubmitAppointment();
// } else {
//     console.log("Submission failed."); // error messages?
// }


// //Inez
// //it keeps generate new users?
// var clinicID = localStorage.getItem("clinicID")
// console.log(clinicID)

// function writeClinicName() {
//     db.collection("clinics").doc(clinicID).get().then((thisClinic) => {
//         clinicName = thisClinic.data().clinicName;
//         document.getElementById("clinic-name").innerHTML = "Making an appointment with " + "<br>" + clinicName;
//     })
// }

// writeClinicName()

// function displayAppointmentInfo() {
//     let params = new URL(window.location.href);
//     console.log("params is = ", params)
    
//     let aptID = params.searchParams.get("docID");
//     console.log(aptID);

//     if (user) {
//         var currentUser = db.collection("users").doc(user.uid);
//         var userID = user.uid;
//         console.log(userID)

//         db.collection("users").update( //add or update
//                 {
//                 userAppointment : doc.data(),
//                 userFirstNameAppmt : userAppointment.userFirstName,
//                 userMiddletNameAppmt : userAppointment.userMiddleName,
//                 userLasttNameAppmt : userAppointment.userLastName,
//                 userEmailAppmt : userAppointment.userEmail,
//                 userPhoneAppmt : userAppointment.userPhone,
//                 userDOBAppmt : userAppointment.userDOB,
//                 userGenderAppmt : userAppointment.userGender,
//                 userContactMethodAppmt : userAppointment.userContactMethod,
//                 userAppmntTime: userAppointment.userAppmntTime, // might be different
//                 userDateAppmt : userAppointment.userAppmntDate, // might be different for each appointment
//                 userVisitReasonCold :userAppointment.userCold, // might be different for each appointment
//                 userVisitReasonAllergies : userAppointment.userAllergies, // might be different for each appointment
//                 userVisitReasonSkin : userAppointment.userSkin, // might be different for each appointment
//                 userVisitReasonBack : userAppointment.userBack, // might be different for each appointment
//                 userVisitReasonJoint : userAppointment.userJoint, // might be different for each appointment
//                 userVisitReasonMental : userAppointment.userMental, // might be different for each appointment
//                 userVisitReasonHead : userAppointment.userHead, // might be different for each appointment
//                 userVisitReasonBlood : userAppointment.userBlood, // might be different for each appointment
//                 userVisitReasonWell : userAppointment.userWell, // might be different for each appointment
//                 userVisitReasonOthers : userAppointment.userOthers, // might be different for each appointment

//         })
//     }
// }
// // displayAppointmentInfo();


// async function clickSubmitAppointment() {
//     console.log("click submit button");
   
//     let userFirstNameAppmt= document.getElementById("user-firstname").value;
//     let userMiddletNameAppmt = document.getElementById("user-middlename").value;
//     let userLasttNameAppmt = document.getElementById("user-lastname").value;
//     let userEmailAppmt = document.getElementById("user-email").value;
//     let userPhoneAppmt = document.getElementById("user-phone").value;
//     let userDOBAppmt = document.getElementById("user-DOB").value;
//     let userGender = document.getElementById("user-gender").value;
//     let userContactMethodAppmt = document.getElementById("user-contact").value;
//     let userDateAppmt = document.getElementById("user-appmtDate").value;
//     let userTimeAppmt = document.getElementById("user-appmtTime").value;
//     let userVisitReasonCold = document.getElementById("visit-coldflue").value;
//     let userVisitReasonAllergies = document.getElementById("visit-allergies").value;
//     let userVisitReasonSkin = document.getElementById("visit-skin").value;
//     let userVisitReasonBack = document.getElementById("visit-backpain").value;
//     let userVisitReasonJoint = document.getElementById("visit-jointpain").value;
//     let userVisitReasonMental = document.getElementById("visit-mental").value;
//     let userVisitReasonHead = document.getElementById("visit-headache").value;
//     let userVisitReasonBlood = document.getElementById("visit-bloodpressure").value;
//     let userVisitReasonWell = document.getElementById("visit-wellness").value;
//     let userVisitReasonOthers = document.getElementById("visit-others").value;


//     console.log("Form has been made by a user");

//     var user = firebase.auth().currentUser;
//     if (user) {
//         var currentUser = db.collection("users").doc(user.uid);
//         var userID = user.uid;
//         console.log(userID);

//         // Get the clinic information
//         var clinicID = localStorage.getItem("clinicID");
//         var clinicRef = db.collection("clinics").doc(clinicID);
//         var clinicData = await clinicRef.get();
//         console.log(clinicID);
    
//         // Get the document for the current user.
//         await db.collection("users").add({ // add or update?
            
//             userFirstName : userFirstNameAppmt,
//             userMiddleName : userMiddletNameAppmt,
//             userLastName : userLasttNameAppmt,
//             userEmail : userEmailAppmt,
//             userPhone : userPhoneAppmt,
//             userDOB : userDOBAppmt,
//             userGender : userGender,
//             userContactMethod : userContactMethodAppmt,
//             userAppmntDate: userDateAppmt,
//             userAppmntTime : userTimeAppmt,
//             userCold: userVisitReasonCold,
//             userAllergies: userVisitReasonAllergies,
//             userSkin: userVisitReasonSkin,
//             userBack: userVisitReasonBack,
//             userJoint: userVisitReasonJoint,
//             userMental: userVisitReasonMental,
//             userHead: userVisitReasonHead,
//             userBlood: userVisitReasonBlood,
//             userWell: userVisitReasonWell,
//             userVisitOthers: userVisitReasonOthers,
//             // userAppmnt,userAppmtDetail : user-appmtDetail,

//             // save appointment time
//             timestamp: firebase.firestore.FieldValue.serverTimestamp()
//         }).then(() => {
//             window.location.href = "confirm_appointment.html"; // Redirect to the thanks page
//         }).catch(error => {
//             console.error("Error occured.");
//         });
//     } else {
//         console.log("User is not validated");
//     }
// }

// var user = firebase.auth().currentUser;

// // Call functions with the defined user
// if (user) {
//     displayAppointmentInfo();
// } else {
//     console.log("User is not authenticated."); // error messges?
// }

// if (user) {
//     clickSubmitAppointment();
// } else {
//     console.log("Subission failed."); // error messages?
// }
