function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
        if ( username == "datle" && password == "dat2003"){
            alert ("Chào mừng admin");
            window.location = "home.html"; // Redirecting to other page.
            return false;
        }
        else{
            window.location = "home.html"
    return false;
            }
        }