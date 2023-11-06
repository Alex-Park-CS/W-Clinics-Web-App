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