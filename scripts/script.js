$(document).ready(setup())
function sayHello() {
    
}
//sayHello();

//------------------------------------------------
// Call this function when the "logout" button is clicked
//-------------------------------------------------
function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("logging out user");
      }).catch((error) => {
        // An error happened.
      });
}

// History

function countClicks() {
    let count = 0;
      count++;
      console.log(count);
      document.getElementById(".clinic-card-title").innerHTML = count;
  };
  
  function setup() {
    console.log("setting up");
    $(".clinic-card-title").click(countClicks);
  }