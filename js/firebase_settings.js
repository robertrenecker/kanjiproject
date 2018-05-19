//Firebase functions taken from documentation from Google Firebase API Documentation.
//Last Updated: May 19, 2018


//retrieve current signed in user
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });




  //Show to create an account
function submitClick() {
    document.getElementById('popup-btn').style.display= 'block';
  }
  window.addEventListener("DOMContentLoaded", function () {
  
  
    //Form submit values -- quick example check
    var form = document.getElementById("form-id");
    document.getElementById("submitBtn").addEventListener("click", function () {
      form.submit();
      var x = document.getElementById("name").value;
      var y = document.getElementById("text").value;
      var firebaseRef = firebase.database().ref();
      firebaseRef.child(x).set(y);
    });
    //Don't know what this is yet -- recheck
    var myButton = document.querySelector('button');
  });

document.getElementById("hide-jumbo").addEventListener("click", function () {

    document.getElementById('popup-btn').style.display= 'none';
  
  });
  



//click login function --
function loginsbt(){
    var userEmail = document.getElementById('email_field').value;
    var userPassword = document.getElementById('password_field').value;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      window.alert("Error: " + errorMessage);
      window.alert("Error code: " + errorCode);
  
    });
  }

  //logout
  function logout(){
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
    window.alert("Error: " + error);
  });
  }


  //create a new user
  function createUser(){
    var userEmail = document.getElementById('email_field').value;
    var userPassword = document.getElementById('password_field').value;
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("Error: " + errorMessage);
  });
  }
  