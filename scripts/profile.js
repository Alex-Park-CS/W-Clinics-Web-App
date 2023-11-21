var currentUser;               //points to the document of the user who is logged in
function populateUserInfo() {
            firebase.auth().onAuthStateChanged(user => {
                // Check if user is signed in:
                if (user) {

                    //go to the correct user document by referencing to the user uid
                    currentUser = db.collection("users").doc(user.uid)
                    //get the document for current user.
                    currentUser.get()
                        .then(userInfo => {  
                            //get the data fields of the user
                            var userFirstName = userInfo.data().FirstName;
                            var userMiddleName = userInfo.data().MiddleName;
                            var userLastName = userInfo.data().LastName;
                            var userDOB = userInfo.data().DOB;
                            var userGender = userInfo.data().Gender;
                            var userEmail = userInfo.data().email;
                            var userPhone = userInfo.data().Phone;

                            //if the data fields are not empty, then write them in to the form.
                            if (userFirstName != null) {
                                document.getElementById("FirstNameInput").value = userFirstName;
                            }
                            if (userMiddleName != null) {
                                document.getElementById("MiddleNameInput").value = userMiddleName;
                            }
                            if (userLastName != null) {
                                document.getElementById("LastNameInput").value = userLastName;
                            }
                            if (userDOB != null) {
                                document.getElementById("DateOfBirthInput").value = userDOB;
                            }
                            if (userGender != null) {
                                document.getElementById("genderInput").value = userGender;
                            }
                            if (userEmail != null) {
                                document.getElementById("emailInput").value = userEmail;
                            }
                            if (userPhone != null) {
                                document.getElementById("phoneInput").value = userPhone;
                            }
                        })
                } else {
                    // No user is signed in.
                    console.log ("No user is signed in");
                }
            });
        }

//call the function to run it 
populateUserInfo();        

function editUserInfo() {
    document.getElementById('personalInfoFields').disabled = false;
 }

function saveUserInfo() {
    //get entered information by user
    userFirstName = document.getElementById("FirstNameInput").value;
    userMiddleName = document.getElementById("MiddleNameInput").value;
    userLastName = document.getElementById("LastNameInput").value;
    userDOB = document.getElementById("DateOfBirthInput").value;
    userGender = document.getElementById("genderInput").value;
    userEmail = document.getElementById("emailInput").value;
    userPhone = document.getElementById("phoneInput").value;

    console.log("medical history form");
    let historyRespi = document.getElementById("history-respi").value;
    let historyCardio = document.getElementById("history-cardio").value;
    let historyVision = document.getElementById("history-vision").value;
    let historyEar = document.getElementById("history-ear").value;
    let historyInfection = document.getElementById("history-infection").value;
    let historyMental = document.getElementById("history-mental").value;
    let historyJoint = document.getElementById("history-joint").value;


    console.log(historyRespi, historyCardio, historyVision, historyInfection, historyMental, historyJoint);



    // update the user document in firestore
    currentUser.update({
        FirstName: userFirstName,
        MiddleName: userMiddleName, 
        LastName: userLastName,
        DOB: userDOB,
        Gender: userGender,
        email: userEmail,
        Phone: userPhone,
        ContactMethod: userContactMethod,
        respitoryHistoryFB: historyRespi,
        cardioHistoryFB: historyCardio,
        visionHistoryFB: historyVision,
        earHistoryFB: historyEar,
        infectHistoryFB: historyInfection,
        mentalHistoryFB: historyMental,
        infectionHIstoryFB: historyInfection,
    })
    .then(() => {
        console.log("Document successfully updated!");
    })

}

//add medical history page
function saveUserInfo(){
    console.log("save user information")
    window.location.href = "thanks_medical_history.html";
}