//Navigation sticky controller
const navBar = document.getElementById("nav_bar");
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
    window.location.href = "../Login/login.html";
});
const wishlist = document.getElementById("wishlist");
wishlist.addEventListener("click", function () {
    window.location.href = "../Wishlist/Wishlist.html";
});

const arrivals = document.getElementById("arrivals");
arrivals.addEventListener("click", function () {
    window.location.href = "../Arrivals+Discription/arrival.html";
});
const missLogo = document.getElementById("missLogo");
missLogo.addEventListener("click", function () {
    window.location.href = "../Home.html";
});


//no. of count
let count = 1;
const plus = document.getElementById("plus");
plus.addEventListener("click", makeplus);
const minus = document.getElementById("minus");
minus.addEventListener("click", makeminus);

function makeplus() {
    count++;
    const counting = document.getElementById("counting");
    counting.innerHTML = count;
    localStorage.setItem("setcount", count);
}
function makeminus() {
    count--;
    const counting = document.getElementById("counting");
    counting.innerHTML = count;
    localStorage.setItem("setcount", count);
}

const addtocart = document.getElementById("addtocart");
addtocart.addEventListener("click", function () {
    window.location.href = "../checkout/contact.html";
})