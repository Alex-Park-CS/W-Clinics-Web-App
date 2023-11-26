// function for reading userinfo 
function readUserfirstname(username) {
    db.collection("users").doc(username) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-firstname").innerHTML = whatgoeshere.data().userFirstName;

    }
    )
}
readUserfirstname("user-info-details");


function readUsermiddlename(usermiddlename) {
    db.collection("users").doc(usermiddlename) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-middlename").innerHTML = whatgoeshere.data().userMiddleName;

    }
    )
}
readUsermiddlename("user-info-details");

function readUserLastName(userlastname) {
    db.collection("users").doc(userlastname) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-lastname").innerHTML = whatgoeshere.data().userLastName;

    }
    )
}
readUserLastName("user-info-details");

function readUserDOB(userbirth) {
    db.collection("users").doc(userbirth) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-DOB").innerHTML = whatgoeshere.data().userDOB;

    }
    )
}
readUserDOB("user-info-details");

function readUserGender(usergender) {
    db.collection("users").doc(usergender) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-gender").innerHTML = whatgoeshere.data().userGender;

    }
    )
}
readUserGender("user-info-details");

function readUserPhone(userphone) {
    db.collection("users").doc(userphone) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-phone").innerHTML = whatgoeshere.data().userPhone;

    }
    )
}
readUserPhone("user-info-details");

function readUserEmail(useremail) {
    db.collection("users").doc(useremail) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-email").innerHTML = whatgoeshere.data().userEmail;

    }
    )
}
readUserEmail("user-info-details");

function readUserContactMethod(usercontactmethod) {
    db.collection("users").doc(usercontactmethod) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-contactmethod").innerHTML = whatgoeshere.data().userContactMethod;

    }
    )
}
readUserContactMethod("user-info-details");

//appointment history
function readUserClinicName(userclinicname) {
    db.collection("users").doc(userclinicname) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-clinicname").innerHTML = whatgoeshere.data().userAppointmentHistory["clinicName"];

    }
    )
}
readUserClinicName("user-info-details");

function readUserClinicLocation(usercliniclocation) {
    db.collection("users").doc(usercliniclocation) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-cliniclocation").innerHTML = whatgoeshere.data().userAppointmentHistory["clinicLocation"];

    }
    )
}
readUserClinicLocation("user-info-details");

function readUserVisitingDate(uservisitingdate) {
    db.collection("users").doc(uservisitingdate) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-visitingdate").innerHTML = whatgoeshere.data().userAppointmentHistory["clinicVisitingDate"];

    }
    )
}
readUserVisitingDate("user-info-details");


function readUserMyRatings(usermyratings) {
    db.collection("users").doc(usermyratings) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-myratings").innerHTML = whatgoeshere.data().userAppointmentHistory["clinicMyRatings"];

    }
    )
}
readUserMyRatings("user-info-details");


function readUserFavourite(userfavourite) {
    db.collection("users").doc(userfavourite) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-favourite").innerHTML = whatgoeshere.data().userAppointmentHistory["clinicFavourite"];

    }
    )
}
readUserFavourite("user-info-details"); 
