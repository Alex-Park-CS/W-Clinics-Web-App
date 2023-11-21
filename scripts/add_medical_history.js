
function submitMedicalHistory() {
    console.log("medical history form");
    let historyRespi = document.getElementById("history-respi").value;
    let historyCardio = document.getElementById("history-cardio").value;
    let historyInfection = document.getElementById("history-infection").value;
    


    console.log(historyRespi, historyCardio, historyInfection);

    var user = firebase.auth().currentUser;
    if (user) {
        var currentUser = db.collection("user-info").doc(user.uid);
        var userID = user.uid;
        console.log(userID)

        // Get the document for the current user.
        db.collection("user-info").add({
            respitoryHistoryFB: historyRespi,
            cardioHistoryFB: historyCardio,
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
