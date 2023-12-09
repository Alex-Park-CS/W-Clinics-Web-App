// Function to handle form submission
async function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    let messageTitle = document.getElementById("messageTitle").value;
    let userMessage = document.getElementById("message").value;

    // Check if user is authenticated
    firebase.auth().onAuthStateChanged(async function (user) {
        if (user) {
            var userID = user.uid;
            console.log(userID);

            var userRef = db.collection("users").doc(userID);

            try {
                // Update the user document with the support message using arrayUnion
                await userRef.update({
                    support: firebase.firestore.FieldValue.arrayUnion({
                        supportMessageTitle: messageTitle,
                        supportMessage: userMessage,
                    }),
                });

                window.location.href = "thanks_support.html"; // Redirect to the thanks page
            } catch (error) {
                console.error("Error updating user document:", error);
            }
        }
    });
}

var currentUser;

// Function to populate the user's information
function populateUserInfo() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // Reference the user document by uid
            currentUser = db.collection("users").doc(user.uid);

            // Get the document for the current user
            currentUser.get()
                .then(userInfo => {
                    if (userInfo.exists) {
                        // Check if the user document exists
                        var data = userInfo.data();

                        // Get user data fields
                        var userFirstName = data.userFirstName;
                        var userEmail = data.userEmail;
                        var userPhone = data.userPhone;

                        // Update form fields with user data
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
                                        userFirstName: user-firstname,
                                        userEmail: user-email,
                                        userPhone: user-phone,
                                    });
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

// Call the function to populate user information
populateUserInfo();
