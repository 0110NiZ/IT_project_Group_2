var users = [{name:'aaa', pwd:'111'}, {name:'bbb', pwd:'222'}, {name:'ccc', pwd:'333'}];// An array of predefined user objects with their names and passwords
var username = document.getElementById("username");// Get the input field for the username
var pwd = document.getElementById("pwd");// Get the input field for the password
var btn = document.getElementById("log");// Get the button element

btn.onclick = function(event) { //Event triggered after clicking the button
    let ret = users.some(function(value) { //Iterate through the users array
        return value.name == username.value && value.pwd == pwd.value;
    });

    if (username.value == localStorage.getItem('username1') && pwd.value == localStorage.getItem('pwd1')) {//Check if it is a registered account
        alert("Login Successful!");
        window.location.href = "firstpage.html";
        event.preventDefault();
    } else if (ret) {//Check if it is a predefined account
        alert("Login Successful");
        window.location.href = "firstpage.html";
        event.preventDefault();
    } else {
        alert("Please enter the correct username and password");
    }
}