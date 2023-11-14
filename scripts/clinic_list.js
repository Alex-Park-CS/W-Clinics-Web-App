// display clinic lists dynamically

function displayClinicsDynamically(collection) {
    let clinicTemplate = document.getElementById("clinicCardTemplate"); // Retrieve the HTML element with the ID "hikeCardTemplate" and store it in the cardTemplate variable. 

    db.collection(collection).get()
        .then(allClinics => {
            allClinics.forEach(doc => {
                var clinicName = doc.data().clinicName;
                var distance = doc.data().distance_metres;
                var address = doc.data().address;
                var clinicCode = doc.data().clinicID;
                var docID = doc.id;

                let newcard = clinicTemplate.content.cloneNode(true); 

                //update title and text and image
                newcard.querySelector('.clinic-name').innerHTML = clinicName;
                newcard.querySelector('.clinic-distance').innerHTML = distance + "m";
                newcard.querySelector('.clinic-address').innerHTML = address;
                newcard.querySelector('a').href = "clinic_profile_page.html?docID="+docID;
                let imgEvent = document.querySelector(".clinic-image");
                // imgEvent.src = "../images/" + clinicCode + ".jpg";

                document.getElementById(collection + "-go-here").appendChild(newcard);

            })
        })
}

displayClinicsDynamically("clinics");  //input param is the name of the collection


//calling appointment html
<<<<<<< HEAD
function saveAppmntDocumentIDAndRedirect(){
    let params = new URL(window.location.href) //get the url from the search bar
    let appointmentdoc = params.searchParams.get("docID");
    
    localStorage.setItem('appointmentID', appointmentdoc);
    window.location.href = 'appointment.html';
}

=======
// saveHikeDocumentIDAndRedirect()
>>>>>>> refs/remotes/origin/main
