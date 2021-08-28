//Navigation sticky controller
const navBar = document.getElementById("nav_bar");
const blueStrip = document.getElementById("blueStrip");
const sticky = navBar.offsetTop;
window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        navBar.style.position = "fixed";
        navBar.style.top = "0";
    } else {
        navBar.style.position = "static";
        navBar.style.top = "40px";
    }
}

//calls
const user_login = document.getElementById("user_login");
user_login.addEventListener("click", function () {
    window.location.href = "file:///C:/Users/Sumit%20Singh/Desktop/ftweb10/Major%20Project/Miss%20A/Login/login.html";
});
const wishlist = document.getElementById("wishlist");
wishlist.addEventListener("click", function () {
    window.location.href = "file:///C:/Users/Sumit%20Singh/Desktop/ftweb10/Major%20Project/Miss%20A/Wishlist/Wishlist.html";
});

const arrivals = document.getElementById("arrivals");
arrivals.addEventListener("click", function () {
    window.location.href = "file:///C:/Users/Sumit%20Singh/Desktop/ftweb10/Major%20Project/Miss%20A/Arrivals+Discription/arrival.html";
});
const missLogo = document.getElementById("missLogo");
missLogo.addEventListener("click", function () {
    window.location.href = "file:///C:/Users/Sumit%20Singh/Desktop/ftweb10/Major%20Project/Miss%20A/Home.html";
});
const account = document.getElementById("account");
account.addEventListener("click", function () {
    window.location.href = "file:///C:/Users/Sumit%20Singh/Desktop/ftweb10/Major%20Project/Miss%20A/login/account.html";
});

//credentials check
const login = document.getElementById("login");
var user_details = JSON.parse(localStorage.getItem("UserDetails"));
login.addEventListener("click", function () {
    const emaill = document.getElementById("emaill").value;
    const passwordd = document.getElementById("passwordd").value;
    if (emaill !== user_details.email || passwordd !== user_details.password) {
        alert("Invalid Credentials. Please try again.");
    } else {
        window.location.href = "file:///C:/Users/Sumit%20Singh/Desktop/ftweb10/Major%20Project/Miss%20A/Home.html";
    }
})