// var clinicID = localStorage.getItem("name")
// console.log(clinicID)

// function writeUserName() {
//     db.collection("user-info").doc().get().then((name) => {
//         clinicName = thisClinic.data().clinicName;
//         document.getElementById("history-name").innerHTML = name+'\'s s medical history';

//     })
// }

// writeUserName()

// document.addEventListener('DOMContentLoaded', () => {
//     // Select all elements with the class name "star" and store them in the "stars" variable
//     const stars = document.querySelectorAll('.star');

//     // Iterate through each star element
//     stars.forEach((star, index) => {
//         // Add a click event listener to the current star
//         star.addEventListener('click', () => {
//             // Fill in clicked star and stars before it
//             for (let i = 0; i <= index; i++) {
//                 // Change the text content of stars to 'star' (filled)
//                 document.getElementById(`star${i + 1}`).textContent = 'star';
//             }
//         });
//     });
// });


function submitMedicalHistory() {
    console.log("medical history form");
    let historyRespi = document.getElementById("history-respi").value;
    let historyCardio = document.getElementById("history-cardio").value;
    let historyInfection = document.getElementById("history-infection").value;
    
    // const stars = document.querySelectorAll('.star');
    // let clinicRating = 0;
    // stars.forEach((star) => {
    //     if (star.textContent === 'star') {
    //         clinicRating++;
    //     }
    // });

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
