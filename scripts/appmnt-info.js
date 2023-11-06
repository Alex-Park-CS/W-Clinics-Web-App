// function for appointment info
function readAppmtDate(appointmentdate) {
    db.collection("user-info").doc(appointmentdate) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("appmnt-date").innerHTML = whatgoeshere.data().apmtDate;

    }
    )
}

readAppmtDate("user-info-details");

function readAppmtTime(appointmenttime) {
    db.collection("user-info").doc(appointmenttime) 
    .onSnapshot(whatgoeshere => {
        console.log(whatgoeshere.data());
        document.getElementById("appmnt-time").innerHTML = whatgoeshere.data().apmtTime;

    }
    )
}

readAppmtTime("user-info-details");

//reason for visit