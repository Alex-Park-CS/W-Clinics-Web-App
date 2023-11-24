//Inez

//event handler

function displayAppointmentInfo() {
    let params = new URL(window.location.href);
    console.log("params is = ", params)
    
    let aptID = params.searchParams.get("docID");
    console.log(aptID);

    if (user) {
        var currentUser = db.collection("users").doc(user.uid);
        var userID = user.uid;
        console.log(userID)

        db.collection("users").add(
            // .doc("users")
            // .get()
            // .then(doc => 
                {
                userAppointment : doc.data(),
                userFirstNameAppmt : userAppointment.userFirstName,
                userMiddletNameAppmt : userAppointment.userMiddleName,
                userLasttNameAppmt : userAppointment.userLastName,
                userEmailAppmt : userAppointment.userEmail,
                userPhoneAppmt : userAppointment.userPhone,
                userDOBAppmt : userAppointment.userDOB,
                userGenderAppmt : userAppointment.userGender,
                // userGenderMaleAppmt = userAppointment.userGender["Male"];
                // userGenderOtherAppmt = userAppointment.userGender["Others"];
                userContactMethodAppmt : userAppointment.userContactMethod,
                // userContactMethodPhoneAppmt = userAppointment.userContactMethod["Phone"];
                userDateAppmt : userAppointment.userAppmntDate,
                userVisitReasonCold :userAppointment.userCold,
                userVisitReasonAllergies : userAppointment.userAllergies,
                userVisitReasonSkin : userAppointment.userSkin,
                userVisitReasonBack : userAppointment.userBack,
                userVisitReasonJoint : userAppointment.userJoint,
                userVisitReasonMental : userAppointment.userMental,
                userVisitReasonHead : userAppointment.userHead,
                userVisitReasonBlood : userAppointment.userBlood,
                userVisitReasonWell : userAppointment.userWell,
                userVisitReasonOthers : userAppointment.userOthers,

        })
    }
}
// displayAppointmentInfo();


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
        console.log(userID);
    
        // Get the document for the current user.
        await db.collection("users").add({
            
            userFirstName : userFirstNameAppmt,
            userMiddleName : userMiddletNameAppmt,
            userLastName : userLasttNameAppmt,
            userEmail : userEmailAppmt,
            userPhone : userPhoneAppmt,
            userDOB : userDOBAppmt,
            userGender : userGender,
            userContactMethod : userContactMethodAppmt,
            userAppmntDate: userDateAppmt,
            userAppmntTime : userTimeAppmt,
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

// clickSubmitAppointment();

var user = firebase.auth().currentUser;

// Call functions with the defined user
if (user) {
    displayAppointmentInfo();
    clickSubmitAppointment();
} else {
    console.log("User is not authenticated.");
}