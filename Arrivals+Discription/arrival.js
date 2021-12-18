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

//shopping data
var shopping_data = [
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/B04437-4_400x.jpg?v=1629861881",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/B04437-3_400x.jpg?v=1629861881",
        name: "Virgin Mary Charm Bead Bracelet",
        cost: 1
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/N03875-78-3_400x.jpg?v=1629861160",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/N03875-78-5_400x.jpg?v=1629861160",
        name: "Rose Charm Necklace",
        cost: 1
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/B04427-28-2_400x.jpg?v=1629859993",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/B04427-28-3_400x.jpg?v=1629859993",
        name: "Multi-Charm Bangle Bracelet",
        cost: 1
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/A07245-47-8_400x.jpg?v=1629858915",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/A07245-47-10_400x.jpg?v=1629858915",
        name: "Multi-Design Animal Hair Brush",
        cost: 1
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/A07189-93-3_400x.jpg?v=1629858350",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/A07189-93-7_400x.jpg?v=1629858350",
        name: "Fruit Print Low-Cut Socks",
        cost: 1
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/H010199-9_400x.jpg?v=1629857329",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/H010199-2_400x.jpg?v=1629857329",
        name: "Fashion Pearl Jaw Clip",
        cost: 1
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/H010255-2_400x.jpg?v=1629857101",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/H010255-5_400x.jpg?v=1629857101",
        name: "36-Piece Black Thin Hair Ties",
        cost: 1
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/PawPawGiftSet-6_400x.jpg?v=1613077493",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/04_400x.jpg?v=1613077493",
        name: "Paw Paw Collection Gift Set",
        cost: 25.55
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/PM-set-detail1_37d7a703-b9c5-4e54-96e2-a90c20361616_400x.jpg?v=1613078809",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/043_400x.jpg?v=1613078809",
        name: "AOA Essential 24-Piece Brush Set",
        cost: 20
    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0882/6874/products/EyeCreamRod-0_400x.jpg?v=1624394126",
        image2: "https://cdn.shopify.com/s/files/1/0882/6874/products/Bundles240_400x.jpg?v=1624394126",
        name: "Bright Eyes Kit",
        cost: 10
    },
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
    },
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
];

//sending data to local storage
localStorage.setItem("shopping_data", JSON.stringify(shopping_data));

//Putting data to html section
const content = document.getElementById("content");
function shoppingPush() {
    shopping_data.forEach(function (item) {
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
        img3.src = "file:///C:/Users/Sumit%20Singh/Desktop/ftweb10/Major%20Project/Miss%20A/Images/rheart.png";
        const div1_2_3 = document.createElement("div");
        div1_2_3.className = "star";
        const img4 = document.createElement("img");
        img4.src = "https://lh3.googleusercontent.com/proxy/HuJcYwxa1FrJVcCE0gqz6wNy0AuoEUAohXCrdJCMQFCH8EIUXe4uxGxK7fRquQDYQcWuRhXOBU1f9I8P5jYFC4dbVXMwKzpoH8Pz9tzUziJ76raNDHd6cPWY4AdCrziaiJ9K2EsU8aNv_aDz7DMP7UYyjs4";
        div1_2_3.append(img4);
        div1_2_2_2.append(img3);
        div1_2_2.append(div1_2_2_1, div1_2_2_2);
        div1_2.append(div1_2_1, div1_2_2, div1_2_3);

        div1.append(div1_1, div1_2);
        content.append(div1);
    })
}
shoppingPush();

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


//sorting
const sort = document.getElementById("sortit");
sort.addEventListener("click", function () {
    const sorted = document.getElementById("sorted").value;
    if (sorted == "PHtoL") {
        LToH("High");
    } else {
        LToH("low");
    }
})

function LToH(x) {
    console.log("Hi");
    for (let i = 0; i < shopping_data.length; i++) {
        for (let j = i + 1; j < shopping_data.length; j++) {
            if (x === "low") {
                if (shopping_data[i].cost > shopping_data[j].cost) {
                    var temp = shopping_data[j];
                    shopping_data[j] = shopping_data[i];
                    shopping_data[i] = temp;
                }
            } else {
                if (shopping_data[i].cost < shopping_data[j].cost) {
                    var temp = shopping_data[j];
                    console.log(temp);
                    shopping_data[j] = shopping_data[i];
                    shopping_data[i] = temp;
                }
            }
        }
    }
    content.innerHTML = "";
    shoppingPush();
}
const fader = document.getElementsByClassName("fader")[7];
fader.addEventListener("click", function () {
    window.location.href = "Prod_display.html";
})