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