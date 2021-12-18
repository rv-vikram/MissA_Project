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

//Account creation information
const createAcc = document.getElementById("createAcc");
createAcc.addEventListener("click", function () {
    const fnamee = document.getElementById("fname").value;
    const lnamee = document.getElementById("lname").value;
    const emaill = document.getElementById("email").value;
    const passwordd = document.getElementById("password").value;
    if (fnamee == "" || lnamee == "" || emaill == "" || passwordd == "") {
        alert("All fields are compulsory!");
    } else {
        const user_details = {
            fname: fnamee,
            lname: lnamee,
            email: emaill,
            password: passwordd
        };
        localStorage.setItem("UserDetails", JSON.stringify(user_details));
        window.location.href = "../Login/login.html";
    }
})

