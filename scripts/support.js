function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    console.log("inside support ticket");

    // Get form values
    let username = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userPhone = document.getElementById("phoneNum").value;
    let messageTitle = document.getElementById("title").value;
    let userMessage = document.getElementById("message").value;

    // Check if form is filled out completely
    if (!username || !userEmail || !userPhone || !messageTitle || !userMessage) {
        // If any field is empty, do not proceed
        alert("Please fill in all fields before submitting.");
        return;
    }

    // check if user is still authenticated
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // Get the document for the current user.
            db.collection("supportTicket").add({
                name: username,
                email: userEmail,
                phone: userPhone,
                title: messageTitle,
                message: userMessage,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }).then(() => {
                window.location.href = "thanks_support.html"; // Redirect to the thanks page
            });
        } else {
            // No user is signed in
            console.log("No user is signed in");
        }
    });
}

