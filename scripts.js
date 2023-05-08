function LoginForm() {}
//Get  form data 
var username = document.getElementbyId ("username").value;
var password = document.getElementbyId ("password").value;

//Retrieve login data fromsession storage
var savedUsername = sessionStorage.getItem("username");
var savedPassword = sessionStorage.getItem("password");

// Check if login data matches form data
if (username)
