function loadSkeleton() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {                   
            // If the pointer to "user" object is not null, then someone is logged in
            // User is signed in.
            console.log($('#navbarPlaceholder').load('./text/nav_after_login.html'));
            console.log($('#footerPlaceholder').load('./text/footer.html'));
        } else {
            // No user is signed in.
            console.log($('#navbarPlaceholder').load('./text/nav_before_login.html'));
            console.log($('#footerPlaceholder').load('./text/footer.html'));
        }
    });
}
loadSkeleton(); 


