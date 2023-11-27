function displayClinicInfo() {
    let params = new URL(window.location.href);
    console.log("params is = ", params)
    var ID = params.searchParams.get("docID");
    console.log(ID);


    db.collection("clinics")
        .doc(ID)
        .get()
        .then(doc => {
            thisClinic = doc.data();
            clinicCode = thisClinic.code;
            clinicName = doc.data().clinicName;
            clinicAddress = doc.data().address;
            clinicHours = doc.data().hours;
            clinicRating = doc.data().rating;
            clinicWaitTime = doc.data().wait_time_minutes;
            clinicWalkin = doc.data().walkin_availibility;
            clinicCode = doc.data().code;


            document.getElementById("clinicName").innerHTML = clinicName;
            document.getElementById("clinicAddress").innerHTML = "Address: " + clinicAddress;
            document.getElementById("clinic-hours").innerHTML = clinicHours;
            document.getElementById("clinic-waittime").innerHTML = "Wait Time: " + clinicWaitTime + "min"
            document.getElementById("clinic-walkin").innerHTML = "Walkin Availibility: " + clinicWalkin;
            document.getElementById("clinic-rating").innerHTML = "Rating: " + clinicRating + "/5";
            let imgEvent = document.querySelector(".clinic-img");
            imgEvent.src = "../images/" + clinicCode + ".jpg";
            document.querySelector('i').id = 'save-' + ID; // for assigning unique id to each element
            document.querySelector('i').onclick = () => updateBookmark(ID);
            // document.querySelector('i').onclick = ()=> clickHeart(); 

            currentUser.get().then(userDoc => {
                //get the user name
                let bookmarks = userDoc.data().bookmarks || [];
                if (bookmarks.includes(ID)) {
                    document.getElementById('save-' + ID).innerText = 'favorite';
                }
            })
        });
}
displayClinicInfo();

function clickHeart() {
    console.log("test")
}

function saveClinicIDAndRedirect() {
    let params = new URL(window.location.href);
    let ID = params.searchParams.get("docID");

    localStorage.setItem('clinicID', ID)
    window.location.href = 'add_review.html';
}

function populateReviews() {
    console.log("test");
    let clinicReviewTemplate = document.getElementById("reviewCardTemplate");
    let clinicReviewGroup = document.getElementById("reviewCardGroup");

    let params = new URL(window.location.href); // Get the URL from the search bar
    let clinicID = params.searchParams.get("docID");
    console.log(clinicID)

    // Double-check: is your collection called "Reviews" or "reviews"?
    db.collection("reviews")
        .where("clinicID", "==", clinicID)
        .orderBy("timestamp", "desc")
        .get()
        .then((allReviews) => {
            reviews = allReviews.docs;
            console.log(reviews);
            reviews.forEach((doc) => {
                var reviewTitle = doc.data().title;
                var treatedOnTime = doc.data().treatedOnTime;
                var description = doc.data().comment;
                var time = doc.data().timestamp.toDate();
                var rating = doc.data().rating; // Get the rating value
                console.log(rating)

                console.log(time);

                let reviewCard = clinicReviewTemplate.content.cloneNode(true);
                reviewCard.querySelector(".review-title").innerHTML = reviewTitle;
                reviewCard.querySelector(".time").innerHTML = "Written on: " + new Date(
                    time
                ).toLocaleString();
                reviewCard.querySelector(".treated-on-time").innerHTML = `Treated on Time: ${treatedOnTime}`;
                reviewCard.querySelector(".description").innerHTML = `Comment: ${description}`;

                // Populate the star rating based on the rating value

                // Initialize an empty string to store the star rating HTML
                let starRating = "";
                // This loop runs from i=0 to i<rating, where 'rating' is a variable holding the rating value.
                for (let i = 0; i < rating; i++) {
                    starRating += '<span class="material-icons">star</span>';
                }
                // After the first loop, this second loop runs from i=rating to i<5.
                for (let i = rating; i < 5; i++) {
                    starRating += '<span class="material-icons">star_outline</span>';
                }
                reviewCard.querySelector(".star-rating").innerHTML = starRating;

                clinicReviewGroup.appendChild(reviewCard);
            });
        });
}

populateReviews();


//appointment button
function makeAnAppointment() {
    let params = new URL(window.location.href);
    let ID = params.searchParams.get("docID");

    localStorage.setItem('clinicID', ID)
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
            // displayCardsDynamically("clinics");
        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "login.html";
        }
    });
}
doAll();

function updateBookmark(bookmark_clinicID) {
    currentUser.get().then(userDoc => {
        let bookmarks = userDoc.data().bookmarks || [];
        let iconID = 'save-' + bookmark_clinicID;
        let isBookmarked = bookmarks.includes(bookmark_clinicID);

        if (isBookmarked) {
            // Remove the bookmark if it already exists
            currentUser.update({
                bookmarks: firebase.firestore.FieldValue.arrayRemove(bookmark_clinicID)
            }).then(() => {
                console.log("Item was removed: " + bookmark_clinicID);
                document.getElementById(iconID).innerText = 'favorite_border'; // Change to unfilled heart icon
            });
        } else {
            // Add the bookmark if it doesn't exist
            currentUser.update({
                bookmarks: firebase.firestore.FieldValue.arrayUnion(bookmark_clinicID)
            }).then(() => {
                console.log("Item added to bookmarks: " + bookmark_clinicID);
                document.getElementById(iconID).innerText = 'favorite'; // Change to filled heart icon
            });
        }
    });
}