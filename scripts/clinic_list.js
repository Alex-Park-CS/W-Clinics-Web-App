// Declare a global variable to store the user's location
let userLocation = [];
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

// Check if the Geolocation API is supported by the browser
async function getUserLocation() {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            // Get the current position
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // Extract latitude and longitude coordinates
                    userLocation = [position.coords.longitude, position.coords.latitude];
                    console.log("User's Location:", userLocation);

                    // Call the function here, inside the success callback
                    displayClinicsDynamically("clinics");

                    resolve();
                },
                (error) => {
                    console.error("Error getting user's location:", error.message);
                    reject(error);
                }
            );
        } else {
            // Geolocation is not supported by the browser
            console.error("Geolocation is not supported by this browser");
            reject(new Error("Geolocation is not supported"));
        }
    });
}


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
            updateClinicRating(docID)

            const clinicName = doc.data().clinicName;
            const address = doc.data().address;
            const waitTime = doc.data().wait_time_minutes;
            const lat = doc.data().lat;
            const lng = doc.data().lng;
            distancePreview = Number((distanceFromCurrent(userLocation[0], userLocation[1], lng, lat)).toFixed(2))
            updateDistance(docID, distancePreview)

            let newcard = clinicTemplate.content.cloneNode(true);

            newcard.querySelector('.clinic-name').innerHTML = clinicName;
            newcard.querySelector('.clinic-distance').innerHTML = "Distance: " + distancePreview + "km";
            newcard.querySelector('.clinic-address').innerHTML = address;
            newcard.querySelector('.clinic-rating').innerHTML = "Rating: " + rating.toFixed(1) + " / 5";
            newcard.querySelector('.clinic-wait-time').innerHTML = "Wait Time: " + waitTime + " min";
            newcard.querySelector('a').href = "clinic_profile_page.html?docID=" + docID;

            document.getElementById(collection + "-go-here").appendChild(newcard);
        });
    } catch (error) {
        console.error("Error getting clinics: ", error);
    }
}
// Call the function
// displayClinicsDynamically("clinics");  //input param is the name of the collection


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
        return averageRating;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return 0; // or handle the error in an appropriate way
    }
}

async function updateClinicRating(clinicID) {
    const averageRating = await ratingAverage(clinicID);

    const clinicRef = db.collection("clinics").doc(clinicID);

    try {
        await clinicRef.update({
            rating: averageRating,
        });
        console.log("Clinic rating updated successfully.");
    } catch (error) {
        console.error("Error updating clinic rating:", error);
    }
}

function distanceFromCurrent(current_x, current_y, clinicLng, clinicLat) {
    distance = (((111.320 * 0.555 * (current_x - clinicLng)) ** 2 + (110.574 * (current_y - clinicLat)) ** 2) ** 0.5)
    console.log(typeof distance)
    console.log(distance)
    return distance
}

async function updateDistance(clinicID, distance) {

    const clinicRef = db.collection("clinics").doc(clinicID);

    try {
        await clinicRef.update({
            distance_metres: distance,
        });
        console.log("Distance updated successfully.");
    } catch (error) {
        console.error("Error updating distance:", error);
    }
}

async function main() {
    try {
        // Wait for getUserLocation to complete before proceeding
        await getUserLocation();

        // Now you can use the userLocation variable
        console.log("User's Location (in main function):", userLocation);

    } catch (error) {
        console.error("Error in main function:", error);
    }
}
main();