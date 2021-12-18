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
    window.location.href = "./Login/login.html";
});
const wishlist = document.getElementById("wishlist");
wishlist.addEventListener("click", function () {
    window.location.href = "./Wishlist/Wishlist.html";
});

const arrivals = document.getElementById("arrivals");
arrivals.addEventListener("click", function () {
    window.location.href = "./Arrivals+Discription/arrival.html";
});
const missLogo = document.getElementById("missLogo");
missLogo.addEventListener("click", function () {
    window.location.href = "./Home.html";
});

//Adverts of pics
var Ad1 = [
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/AOA__6_400x.jpg?v=1613165902",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/050_400x.jpg?v=1613081251",
        name: "AOA Blender Vault Gift Set",
        cost: 7
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/IMG_0403_400x.jpg?v=1559569153",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/AOA-0016-1_400x.jpg?v=1559569153",
        name: "AOA Wonder Blender - Black Teardrop",
        cost: 1
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/3_400x_16d03181-cf68-43e9-b996-0d3196a0a5b9_400x.jpg?v=1611336560",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/AOA_400x.jpg?v=1611336560",
        name: "Paw Paw: Super Soft Wonder Blender - Teardrop",
        cost: 1.55
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/slide_400x.jpg?v=1613067379",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/slide_400x.jpg?v=1613067379",
        name: "A+ Silly Dip Blender Mint Teardrop",
        cost: 1.88
    }
]
var Ad2 = [
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/AOA__6_400x.jpg?v=1613165902",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/IMG_7505_400x.jpg?v=1592315695",
        name: "AOA Eyelash Applicator",
        cost: 1
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/AOA-057-11_400x.jpg?v=1559836665",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/AOA-057-11_400x.jpg?v=1559836665",
        name: "AOA Eyelash Curler",
        cost: 1
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/Alexis_400x.jpg?v=1568220618",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/ALEXIS_85f2b337-d42c-4db0-9510-abae841d737e_400x.jpg?v=1568220618",
        name: "AOA Studio Eyelashes - Alexis",
        cost: 1
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/060_400x.jpg?v=1613142802",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/060_400x.jpg?v=1613142802",
        name: "AOA Studio Eyelashes - Luella",
        cost: 5.80
    }
]

//appending process
function shoppingPush() {
    const ad1 = document.getElementById("ad1");
    Ad1.forEach(function (item) {
        const div1 = document.createElement("div");
        const div1_1 = document.createElement("div");
        div1_1.className = "fader";
        const img1 = document.createElement("img");
        img1.className = "bottom";
        img1.src = item.image1;
        const img2 = document.createElement("img");
        img2.className = "top";
        img2.src = item.image2;
        div1_1.append(img1, img2);
        const div1_2 = document.createElement("div");
        const div1_2_1 = document.createElement("div");
        div1_2_1.className = "head";
        div1_2_1.innerHTML = item.name;
        const div1_2_2 = document.createElement("div");
        div1_2_2.className = "heart";
        const div1_2_2_1 = document.createElement("div");
        div1_2_2_1.innerHTML = `$${item.cost}`;
        const div1_2_2_2 = document.createElement("div");
        const img3 = document.createElement("img");
        img3.src = "./Images/rheart.png";
        const div1_2_3 = document.createElement("div");
        div1_2_3.className = "star";
        const img4 = document.createElement("img");
        img4.src = "https://lh3.googleusercontent.com/proxy/HuJcYwxa1FrJVcCE0gqz6wNy0AuoEUAohXCrdJCMQFCH8EIUXe4uxGxK7fRquQDYQcWuRhXOBU1f9I8P5jYFC4dbVXMwKzpoH8Pz9tzUziJ76raNDHd6cPWY4AdCrziaiJ9K2EsU8aNv_aDz7DMP7UYyjs4";
        div1_2_3.append(img4);
        div1_2_2_2.append(img3);
        div1_2_2.append(div1_2_2_1, div1_2_2_2);
        div1_2.append(div1_2_1, div1_2_2, div1_2_3);

        div1.append(div1_1, div1_2);
        ad1.append(div1);
    })
}
shoppingPush();