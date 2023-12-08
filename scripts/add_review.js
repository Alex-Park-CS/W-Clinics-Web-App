// Retrieve clinicID from local storage
var clinicID = localStorage.getItem("clinicID");
console.log(clinicID);

// Function to write clinic name to the HTML
function writeClinicName() {
    db.collection("clinics").doc(clinicID).get().then((thisClinic) => {
        clinicName = thisClinic.data().clinicName;
        document.getElementById("clinic-name").innerHTML = "Review: <br>" + clinicName;
    });
}

// Call the function to write clinic name
writeClinicName();

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class name "star" and store them in the "stars" variable
    const stars = document.querySelectorAll('.star');

    // Iterate through each star element
    stars.forEach((star, index) => {
        // Add a click event listener to the current star
        star.addEventListener('click', () => {
            // Fill in clicked star and stars before it
            for (let i = 0; i <= index; i++) {
                // Change the text content of stars to 'star' (filled)
                document.getElementById(`star${i + 1}`).textContent = 'star';
            }
        });
    });
});

// Function to submit a review
function submitReview() {
    console.log("inside write review");

    // Get values from the HTML form
    let reviewTitle = document.getElementById("title").value;
    let reviewComment = document.getElementById("review-comment").value;
    let treated_On_Time = document.getElementById("treated-on-time").value;

    // Get star ratings
    const stars = document.querySelectorAll('.star');
    let clinicRating = 0;
    stars.forEach((star) => {
        if (star.textContent === 'star') {
            clinicRating++;
        }
    });

    // For debugging purpose
    console.log(reviewTitle, reviewComment, treated_On_Time, clinicRating); 

    var user = firebase.auth().currentUser;
    if (user) {
        var currentUser = db.collection("users").doc(user.uid);
        var userID = user.uid;
        console.log(userID);

        // Get the document for the current user and add a review to the "reviews" collection
        db.collection("reviews").add({
            clinicID: clinicID,
            userID: userID,
            title: reviewTitle,
            comment: reviewComment,
            treatedOnTime: treated_On_Time,
            rating: clinicRating, // Include the rating in the review
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            window.location.href = "thanks.html"; // Redirect to the thanks page
        });
    } else {
        console.log("No user is signed in");
    }
}

// Call the function to submit a review
submitReview();

