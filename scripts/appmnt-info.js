// Inez
// function for appointment info
// directly from firebase

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

function readuserGender(userGender) {
    db.collection("user-info").doc(userGender) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-gender").innerHTML = whatgoeshere.data().userGender;

    }
    )
}

readUserGender("user-info-details");


//userAppmDateTime
function readAppointmentDateandTime(userappmtdateandtime) {
    db.collection("user-info").doc(userappmtdateandtime) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("user-appmtDateTime").innerHTML = whatgoeshere.data().userAppmnt["userAppmDateTime"];

    }
    )
}

readAppointmentDateandTime("user-info-details");

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

// cdp

$(document).ready(function () {
    $('input[type=submit]').click(function () {
      $('input[type=submit]').toggleClass('red');
    });
  });

// DOM
// step 2.5
function saveHikeDocumentIDAndRedirect(){
    let params = new URL(window.location.href) //get the url from the search bar
    let ID = params.searchParams.get("docID");
    localStorage.setItem('appointmentID', ID);
    window.location.href = 'appointment.html';
}

