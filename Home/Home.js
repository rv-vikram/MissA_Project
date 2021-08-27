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
    window.location.href = "C:\Users\Sumit Singh\Desktop\ftweb10\Major Project\MISS A\Login\login.html";
});
const wishlist = document.getElementById("wishlist");
wishlist.addEventListener("click", function () {
    window.location.href = "Major Project\MISS A\wishlist\wishlist.html";
});