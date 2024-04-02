var username1=document.getElementById("username");
var phone1=document.getElementById("phone");
var pwd1=document.getElementById("pwd");
var pwd2=document.getElementById("pwd2");
var btn1=document.getElementById("log");

btn1.onclick = function(event) {
    if (username1.value == "" || (phone1.value == "") || (pwd1.value == "") || pwd2.value == "") {
        alert("Please complete the information");  // Check if any required information is missing and display an alert
    }
    else if (pwd1.value == pwd2.value) {// If the contents of the two passwords are the same, then the user registration information is stored.
        localStorage.setItem('username1', username1.value);  
        localStorage.setItem('pwd1', pwd1.value);  
        alert("User Registration Successful\nPlease Login");  // Display a success message
        window.location.href = "login.html";  // Redirect to the login page
        event.preventDefault();//Blocking event default behaviour
    } else {
        alert("The contents of the two passwords do not match!\nPlease re-enter");  // Display an error message for password mismatch
    }
}

