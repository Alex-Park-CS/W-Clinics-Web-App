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
            clinicName = doc.data().name;
            clinicAddress = doc.data().address;


            // only populate title, and image
            document.getElementById("clinicName").innerHTML = clinicName;
            document.getElementById("clinicAddress").innerHTML = clinicAddress;
            let imgEvent = document.querySelector(".hike-img");
            imgEvent.src = "../images/" + clinicCode + ".jpg";
        });
}
displayClinicInfo();