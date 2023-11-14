function displayClinicInfo() {
    let params = new URL(window.location.href);
    console.log("params is = ", params)
    let ID = params.searchParams.get("docID");
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
        });
}
displayClinicInfo();

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