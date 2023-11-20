var currentUser;               //points to the document of the user who is logged in
function populateUserInfo() {
            firebase.auth().onAuthStateChanged(user => {
                // Check if user is signed in:
                if (user) {

                    //go to the correct user document by referencing to the user uid
                    currentUser = db.collection("user-info").doc(user.uid)
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
                            var userContactMethod = userInfo.data().ContactMethod;

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
                            if (userContactMethod != null) {
                                document.getElementById("blank").value = userContactMethod;
                                document.getElementById("email").value = userContactMethod;
                                document.getElementById("PhoneNumber").value = userContactMethod;
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
    userContactMethod = document.getElementById("blank").id;
    userContactMethod = document.getElementById("email").id;
    userContactMethod = document.getElementById("PhoneNumber").id;

    // update the user document in firestore
    currentUser.update({
        FirstName: userFirstName,
        MiddleName: userMiddleName, 
        LastName: userLastName,
        DOB: userDOB,
        Gender: userGender,
        email: userEmail,
        Phone: userPhone,
        ContactMethod: userContactMethod
    })
    .then(() => {
        console.log("Document successfully updated!");
    })

}