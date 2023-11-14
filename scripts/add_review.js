var clinicID = localStorage.getItem("clinicID")
console.log(clinicID)

function writeClinicName() {
    db.collection("clinics").doc(clinicID).get().then((thisClinic) => {
        clinicName = thisClinic.data().clinicName;
        document.getElementById("clinic-name").innerHTML = "Review: <br>" + clinicName;

    })
}

writeClinicName();