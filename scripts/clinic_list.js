// display clinic lists dynamically

function displayClinicsDynamically(collection) {
    let clinicTemplate = document.getElementById("clinic-list-template"); // Retrieve the HTML element with the ID "hikeCardTemplate" and store it in the cardTemplate variable. 

    db.collection(collection).get()   //the collection called "hikes"
        .then(allClinics => {
            //var i = 1;  //Optional: if you want to have a unique ID for each hike
            allClinics.forEach(doc => { //iterate thru each doc
                var clinicName = doc.data().name;
                var distance = doc.data().distance_metres;
                var address = doc.data().address;

                let newcard = clinicTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.

                //update title and text and image
                newcard.querySelector('.clinic-name').innerHTML = clinicName;
                newcard.querySelector('.clinic-distance').innerHTML = distance + "m";
                newcard.querySelector('.clinic-address').innerHTML = address;
                newcard.querySelector('a').href = "clinic_profile_page.html?docID=" + docID;

                document.getElementById(collection + "-go-here").appendChild(newcard);

            })
        })
}

displayClinicsDynamically("clinics");  //input param is the name of the collection

