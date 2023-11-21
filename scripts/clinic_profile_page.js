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
            clinicHours = doc.data().hours
            clinicRating = doc.data().rating
            clinicWaitTime = doc.data().wait_time_minutes
            clinicWalkin = doc.data().walkin_availibility
            clinicCode = doc.data().code


            document.getElementById("clinicName").innerHTML = clinicName;
            document.getElementById("clinicAddress").innerHTML = "Address: " + clinicAddress;
            document.getElementById("clinic-hours").innerHTML = clinicHours
            document.getElementById("clinic-waittime").innerHTML = "Wait Time: " + clinicWaitTime + "min"
            document.getElementById("clinic-walkin").innerHTML = "Walkin Availibility: " + clinicWalkin
            document.getElementById("clinic-rating").innerHTML = "Rating: " + clinicRating
            let imgEvent = document.querySelector(".clinic-img");
            imgEvent.src = "../images/" + clinicCode + ".jpg";
            document.querySelector('i').id = 'save-'+ ID; // for assigning unique id to each element
            document.querySelector('i').onclick = ()=> updateBookmark(ID); 
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

// function displayCardsDynamically(collection) {
//     let cardTemplate = document.getElementById("clinicTemplate");

//     db.collection(collection).get()   //the collection called "hikes"
//     .then(allClinics=> {
//         //var i = 1;  //Optional: if you want to have a unique ID for each hike
//         allClinics.forEach(doc => { //iterate thru each doc
//             var clinicName = doc.data().clinicName;       // get value of the "clinicName" key
//             var details = doc.data().address;  // get value of the "address" key
//             var rating = doc.data().rating; // get value of the "rating" key
//                             var clinicCode = doc.data().clinicCode;    //get unique ID to each hike to be used for fetching right image
//             var hours = doc.data().hours; // get value of the "hours" key
//             var walkin_availibility = doc.data().walkin_availibility; // get value of the "walkin_availibility" key
//             var wait_time_minutes = doc.data().wait_time_minutes; // get value of the "wait_time_minutes" key                
//             var docID = doc.id;
//             let newcard = cardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.
            
//             //update title and text and image
//             newcard.querySelector('#clinicName').innerHTML = clinicName;
//             newcard.querySelector('#clinicAddress').innerHTML = address;
//             newcard.querySelector('#clinic-rating').innerHTML = rating;
//             newcard.querySelector('.clinic-img').src = `"../images/${clinicCode}.jpg"`;
//             newcard.querySelector('#clinic-hours').innerHTML = hours;
//             newcard.querySelector('#clinic-walkin').innerHTML = walkin_availibility;
//             newcard.querySelector('#clinic-waittime').innerHTML = wait_time_minutes;
//             newcard.querySelector('a').href = "clinic_profile_page.html?docID="+docID;
//             newcard.querySelector('i').id = 'save-'+docID; // for assigning unique id to each element
//             // newcard.querySelector('i').onclick = ()=> updateFavorite(docID); 
//             // newcard.querySelector('i').onclick = ()=> clickHeart(); 

//             currentUser.get().then(userDoc => {
//                 //get the user name
//                 var bookmarks = userDoc.data().bookmarks;
//                 if (bookmarks.includes(docID)) {
//                    document.getElementById('save-' + docID).innerText = 'favorite';
//                 }
//           })


//             //attach to gallery, Example: "clinics-go-here"
//             document.getElementById(collection + "-go-here").appendChild(newcard);
//         })
//     })
// }

// This function is called when the user clicks on the "favorite" icon, it adds the clinics to the "favorite" array.
// Then it will change the favorite icon from the unfilled to the solid version. 
// function saveBookmark(bookmark_clinicID) {
    
//     // Manage the backend process to store the hikeDocID in the database, recording which hike was bookmarked by the user.
// currentUser.update({
//                     // Use 'arrayUnion' to add the new bookmark ID to the 'bookmarks' array.
//             // This method ensures that the ID is added only if it's not already present, preventing duplicates.
//         bookmarks: firebase.firestore.FieldValue.arrayUnion(bookmark_clinicID)
//     })
//             // Handle the front-end update to change the icon, providing visual feedback to the user that it has been clicked.
//     .then(function () {
//         console.log("bookmark has been saved for" + bookmark_clinicID);
//         var iconID = 'save-' + bookmark_clinicID;
//         //console.log(iconID);
//                     //this is to change the icon of the hike that was saved to "filled"
//         document.getElementById(iconID).innerText = 'favorite';
//     });
    
// }


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