var currentUser;

// Function to populate user information
function populateUserInfo() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // Go to the correct user document by referencing the user uid
            currentUser = db.collection("users").doc(user.uid);

            // Get the document for the current user
            currentUser.get()
                .then(userInfo => {
                    if (userInfo.exists) {
                        // Check if the user document exists
                        var data = userInfo.data();

                        // Get the data fields of the user
                        var userFirstName = data.userFirstName;
                        var userMiddleName = data.userMiddleName;
                        var userLastName = data.userLastName;
                        var userDOB = data.userDOB;
                        var userGender = data.userGender;
                        var userEmail = data.userEmail;
                        var userPhone = data.userPhone;
                        var historysRespi = data.userHistoryRespi;
                        var historyCardio = data.userHistoryCardio;
                        var historyVision = data.userHistoryVision;
                        var historyEar = data.userHistoryEar;
                        var historyInfection = data.userHistoryInfect;
                        var historyMental = data.userHistoryMental;
                        var historyJoint = data.userHistoryJont;
                        // Update form fields with user data
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
                        // Update medical history fields with user data
                        // why it works with s
                        if (historysRespi != null) { 
                            document.getElementById("history-respi").value = historysRespi;
                        }
                        if (historyCardio != null) {
                            document.getElementById("history-cardio").value = historyCardio;
                        }
                        if (historyVision != null) {
                            document.getElementById("history-vision").value = historyVision;
                        }
                        if (historyEar != null) {
                            document.getElementById("history-ear").value = historyEar;
                        }
                        if (historyInfection != null) {
                            document.getElementById("history-infection").value = historyInfection;
                        }
                        if (historyMental != null) {
                            document.getElementById("history-mental").value = historyMental;
                        }
                        if (historyJoint != null) {
                            document.getElementById("history-joint").value = historyJoint;
                        }
                        
                    } else {
                        console.log("New user!");
                        currentUser = db.collection("users").doc(user.uid);

                        // Additional logic for new user...
                        currentUser.get()
                            .then(userInfo => {
                                if (userInfo.exists) {
                                    // Check if the user document exists
                                    var data = userInfo.data();
                                    db.collection("users").add({

                                    userFirstName : FirstNameInput,
                                    userMiddleName : MiddleNameInput,
                                    userLastName : LastNameInput,
                                    userDOB : DateOfBirthInput,
                                    userGender : genderInput,
                                    userEmail :emailInput,
                                    userPhone : phoneInput,
                                    userHistoryRespi : history-respi,
                                    userHistoryCardio : history-cardio,
                                    userHistoryVision : history-vision,
                                    userHistoryEar : history-ear,
                                    userHistoryInfect : history-infection,
                                    userHistoryMental : history-mental,
                                    userHistoryJont : history-joint


                                    })
                                }
                            })
                            .catch(error => {
                                console.error("Error getting user document:", error);
                            });
                    }
                });
        } else {
            console.log("No user is signed in");
        }
    });
}

// Call the function to run it
populateUserInfo();

// Function to enable editing user information
function editUserInfo() {
    document.getElementById('personalInfoFields').disabled = false;
}

// Function to save user information
function saveUserInfo() {
    // Get entered information by the user
    var userFirstName = document.getElementById("FirstNameInput").value;
    var userMiddleName = document.getElementById("MiddleNameInput").value;
    var userLastName = document.getElementById("LastNameInput").value;
    var userDOB = document.getElementById("DateOfBirthInput").value;
    var userGender = document.getElementById("genderInput").value;
    var userEmail = document.getElementById("emailInput").value;
    var userPhone = document.getElementById("phoneInput").value;

    // Get medical history information
    var historyRespi = document.getElementById("history-respi").value;
    var historyCardio = document.getElementById("history-cardio").value;
    var historyVision = document.getElementById("history-vision").value;
    var historyEar = document.getElementById("history-ear").value;
    var historyInfection = document.getElementById("history-infection").value;
    var historyMental = document.getElementById("history-mental").value;
    var historyJoint = document.getElementById("history-joint").value;

    console.log("Medical history form:", historyRespi, historyCardio, historyVision, historyInfection, historyMental, historyJoint);

    // Check if the user document exists
    currentUser.get()
        .then(doc => {
            if (doc.exists) {
                // Update the existing user document in Firestore
                currentUser.update({
                    userFirstName: userFirstName,
                    userMiddleName: userMiddleName,
                    userLastName: userLastName,
                    userDOB: userDOB,
                    userGender: userGender,
                    userEmail: userEmail,
                    userPhone: userPhone,
                    userHistoryRespi: historyRespi,
                    userHistoryCardio: historyCardio,
                    userHistoryVision: historyVision,
                    userHistoryEar: historyEar,
                    userHistoryInfect: historyInfection,
                    userHistoryMental: historyMental,
                    userHistoryJont: historyJoint,
                })
                .then(() => {
                    console.log("Document successfully updated!");
                    window.location.href = "thanks_medical_history.html";
                })
                .catch(error => {
                    console.error("Error updating user document:", error);
                });
            } else {
        

                // For a new user, create a new document in Firestore
                currentUser.set({
                    userFirstName: userFirstName,
                    userMiddleName: userMiddleName,
                    userLastName: userLastName,
                    userDOB: userDOB,
                    userGender: userGender,
                    userEmail: userEmail,
                    userPhone: userPhone,
                    userHistoryRespi: historyRespi,
                    userHistoryCardio: historyCardio,
                    userHistoryVision: historyVision,
                    userHistoryEar: historyEar,
                    userHistoryInfect: historyInfection,
                    userHistoryMental: historyMental,
                    userHistoryJont: historyJoint,
                })
                .then(() => {
                    console.log("New user document created!");
                    window.location.href = "thanks_medical_history.html";
                })
                .catch(error => {
                    console.error("Error creating new user document:", error);
                });
            }
        })
        .catch(error => {
            console.error("Error getting user document:", error);
        });
}

// Function to save medical history and navigate to the next page
function saveMedicalHistory() {
    console.log("Save medical history");
    window.location.href = "thanks_medical_history.html";
}
