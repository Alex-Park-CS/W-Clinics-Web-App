function displayClinicInfo() {
    let params = new URL(window.location.href); //get URL of search bar
    console.log("params is = ", params)
    let ID = params.searchParams.get("docID"); //get value for key "id"
    console.log(ID);

    // doublecheck: is your collection called "Reviews" or "reviews"?
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



            // only populate title, and image
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