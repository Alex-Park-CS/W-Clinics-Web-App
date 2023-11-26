
function submitMedicalHistory() {
    console.log("medical history form");
    let historyRespi = document.getElementById("history-respi").value;
    let historyCardio = document.getElementById("history-cardio").value;
    let historyVision = document.getElementById("history-vision").value;
    let historyEar = document.getElementById("history-ear").value;
    let historyInfection = document.getElementById("history-infection").value;
    let historyMental = document.getElementById("history-mental").value;
    let historyJoint = document.getElementById("history-joint").value;

    console.log(historyRespi, historyCardio, historyVision, historyInfection, historyMental, historyJoint);

    var user = firebase.auth().currentUser;
    if (user) {
        var currentUser = db.collection("users").doc(user.uid);
        var userID = user.uid;
        console.log(userID)

        // Get the document for the current user.
        db.collection("users").add({
            respitoryHistoryFB: historyRespi,
            cardioHistoryFB: historyCardio,
            visionHistoryFB: historyVision,
            earHistoryFB: historyEar,
            infectHistoryFB: historyInfection,
            mentalHistoryFB: historyMental,
            infectionHIstoryFB: historyInfection,
            

        }).then(() => {
            window.location.href = "thanks_medical_history.html"; // Redirect to the thanks page
        });
    } else {
        console.log("No user is signed in");
        // window.location.href = 'add_review.html';
    }
}
submitMedicalHistory();
