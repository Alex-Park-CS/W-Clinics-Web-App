// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// Configuration for FirebaseUI
var uiConfig = {
    callbacks: {
        // Callback triggered when sign-in is successful
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            var user = authResult.user;
            
            // Check if the user is a new user
            if (authResult.additionalUserInfo.isNewUser) {
                // Add new user to Firestore
                db.collection("users").doc(user.uid).set({
                    userFirstName: user.displayName,
                    userEmail: user.email,
                }).then(function() {
                    console.log("New user added to Firestore");
                    window.location.assign("main.html"); // Redirect to the main page
                }).catch(function(error) {
                    console.log("Error adding new user: " + error);
                });
            } else {
                return true; // Continue with the default behavior for existing users
            }
            
            return false; // Prevent the default behavior
        },
        
        // Callback triggered when UI is shown
        uiShown: function() {
            document.getElementById('loader').style.display = 'none'; // Hide loader when UI is shown
        }
    },
    // Use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: "main.html", // URL to redirect to after successful sign-in
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID, // Enable Email/Password authentication
    ],
    // Terms of service URL.
    tosUrl: '<your-tos-url>', // Replace with your terms of service URL
    // Privacy policy URL.
    privacyPolicyUrl: '<your-privacy-policy-url>' // Replace with your privacy policy URL
};

// Start the FirebaseUI with the provided configuration
ui.start('#firebaseui-auth-container', uiConfig);
