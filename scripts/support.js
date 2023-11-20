function supportTicket() {
    console.log("inside support ticket");
    let username = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userPhone = document.getElementById("phoneNum").value;
    let messageTitle = document.getElementById("title").value;
    let userMessage = document.getElementById("message").value;


    console.log(username, userEmail, userPhone, messageTitle, message);

    var user = firebase.auth().currentUser;
    if (user) {
        var currentUser = db.collection("users").doc(user.uid);
        var userID = user.uid;
        console.log(userID)

        // Get the document for the current user.
        db.collection("supportTicket").add({
            name: username,
            email: userEmail,
            phone: userPhone,
            title: messageTitle,
            message: userMessage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            window.location.href = "thanks.html"; // Redirect to the thanks page
        });
    } else {
        console.log("No user is signed in");
    }
}
supportTicket();