// display clinic lists dynamically
async function displayClinicsDynamically(collection, sortBy = "distance_metres") {
    document.getElementById("clinics-go-here").innerHTML = "";
    let clinicTemplate = document.getElementById("clinicCardTemplate");

    try {
        const allClinics = await db.collection(collection).orderBy(sortBy).get();

        allClinics.docs.forEach(async (doc) => {
            const docID = doc.id;
            console.log(docID)
            // Call ratingAverage for each clinic individually
            const rating = await ratingAverage(docID);
            console.log(rating)

            const clinicName = doc.data().clinicName;
            const distance = doc.data().distance_metres;
            const address = doc.data().address;
            const waitTime = doc.data().wait_time_minutes;
            const clinicCode = doc.data().clinicID;

            let newcard = clinicTemplate.content.cloneNode(true);

            newcard.querySelector('.clinic-name').innerHTML = clinicName;
            newcard.querySelector('.clinic-distance').innerHTML = distance + "m";
            newcard.querySelector('.clinic-address').innerHTML = address;
            newcard.querySelector('.clinic-rating').innerHTML = "Rating: " + rating + "/5";
            newcard.querySelector('.clinic-wait-time').innerHTML = "Wait Time: " + waitTime + " min";
            newcard.querySelector('a').href = "clinic_profile_page.html?docID=" + docID;

            document.getElementById(collection + "-go-here").appendChild(newcard);
        });
    } catch (error) {
        console.error("Error getting clinics: ", error);
    }
}
// Call the function
displayClinicsDynamically("clinics");  //input param is the name of the collection


document.getElementById('sort-select').addEventListener('change', function () {
    displayClinicsDynamically("clinics", this.value)
})


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


async function ratingAverage(clinicID) {
    try {
        const allReviews = await db.collection("reviews").where("clinicID", "==", clinicID).get();
        const reviews = allReviews.docs;

        let sumOfReviews = 0;
        let countOfReviews = reviews.length;

        reviews.forEach((doc) => {
            sumOfReviews += doc.data().rating;
        });

        const averageRating = countOfReviews > 0 ? sumOfReviews / countOfReviews : 0;
        console.log(typeof averageRating);
        console.log(averageRating);
        return averageRating;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return 0; // or handle the error in an appropriate way
    }
}
