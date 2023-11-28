// var clinicID = localStorage.getItem("clinicID")
// console.log(clinicID)

// function writeClinicName() {
//     db.collection("users").doc(userID).get().then((thisUser) => {
//         appDate = thisUser.data().userAppmntDate;
//         document.getElementById("date").innerHTML = appDate;
//     })
// }

// writeClinicName()

// display clinic lists dynamically

function displayClinicsDynamically(collection, sortBy = "distance_metres") {
    document.getElementById("clinics-go-here").innerHTML = ""
    let clinicTemplate = document.getElementById("clinicCardTemplate");

    db.collection(collection)
        .orderBy(sortBy) // Order the clinics by distance
        .get()
        .then(allClinics => {
            allClinics.forEach(doc => {
                var clinicName = doc.data().clinicName;
                var address = doc.data().address;
                // var rating = doc.data().rating;
                // var waitTime = doc.data().wait_time_minutes
                var clinicCode = doc.data().clinicID;
                var docID = doc.id;

                let newcard = clinicTemplate.content.cloneNode(true);

                newcard.querySelector('.clinic-name').innerHTML = clinicName;
                newcard.querySelector('.clinic-address').innerHTML = address;
                // newcard.querySelector('.clinic-rating').innerHTML = "Rating: " + rating;
                // newcard.querySelector('.clinic-wait-time').innerHTML = "Wait Time: " + waitTime + " min";
                // newcard.querySelector('a').href = "clinic_profile_page.html?docID=" + docID;

                // Assuming the clinic image URL is based on the clinic code
                // let imgEvent = newcard.querySelector(".clinic-image");
                // imgEvent.src = "../images/" + clinicCode + ".jpg";

                document.getElementById(collection + "-go-here").appendChild(newcard);
            });
        })
        .catch(error => {
            console.error("Error getting clinics: ", error);
        });
}

displayClinicsDynamically("clinics");  //input param is the name of the collection

// Event listener for sort select dropdown
document.getElementById('sort-select').addEventListener('change', function () {
    displayClinicsDynamically("clinics", this.value);
});
// document.getElementById('sort-select-users').addEventListener('change', function () {
//     displayClinicsDynamically("users", this.value)
// })

//calling appointment html
function saveAppmntDocumentIDAndRedirect() {
    let params = new URL(window.location.href) //get the url from the search bar
    let appointmentdoc = params.searchParams.get("docID");

    localStorage.setItem('appointmentID', appointmentdoc);
    window.location.href = 'appointment.html';
}

//Global variable pointing to the current user's Firestore document
var currentUser;   

//Function that checks if a user is logged in in clinics
function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid); //global
            console.log(currentUser);
        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "login.html";
        }
    });
}
doAll();


