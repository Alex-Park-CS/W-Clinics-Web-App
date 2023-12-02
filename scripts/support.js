async function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    let messageTitle = document.getElementById("messageTitle").value;
    let userMessage = document.getElementById("message").value;

    // Check if user is still authenticated
    firebase.auth().onAuthStateChanged(async function (user) {
        if (user) {
            var userID = user.uid;
            console.log(userID);

            var userRef = db.collection("users").doc(userID);

            try {
                // Update the document with the supportMessage using arrayUnion
                await userRef.update({
                    support: firebase.firestore.FieldValue.arrayUnion({
                        supportMessageTitle: messageTitle,
                        supportMessage: userMessage,
                    }),
                });

                // Update the document with the timestamp using serverTimestamp
                // await userRef.update({
                //     support: firebase.firestore.FieldValue.arrayUnion({
                //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                //     }),
                // });

                window.location.href = "thanks_support.html"; // Redirect to the thanks page
            } catch (error) {
                console.error("Error updating user document:", error);
            }
        }
    });
}




var currentUser;

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
                        var userEmail = data.userEmail;
                        var userPhone = data.userPhone;

                        if (userFirstName != null) {
                            document.getElementById("name").value = userFirstName;
                        }
                        if (userEmail != null) {
                            document.getElementById("email").value = userEmail;
                        }
                        if (userPhone != null) {
                            document.getElementById("phoneNum").value = userPhone;
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

                                    userFirstName : user-firstname,
                                    userEmail :user-email,
                                    userPhone : user-phone,
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