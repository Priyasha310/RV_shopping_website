let products = [
    {
        "id": 1,
        "name": "Casual T-shirt",
        "price": 199,
        "imgName": "tshirt.jpg",
        "inCart": 0
    },
    {
        "id": 2,
        "name": "Wide Leg Jeans",
        "price": 999,
        "imgName": "jeans.jpg",
        "inCart": 0
    },
    {
        "id": 3,
        "name": "Kurti and Leggings",
        "price": 1299,
        "imgName": "kurti.jpg",
        "inCart": 0
    },
    {
        "id": 4,
        "name": "Floral Saree",
        "price": 1499,
        "imgName": "saree.jpg",
        "inCart": 0
    },
    {
        "id": 5,
        "name": "Ritu Lehenga",
        "price": 2999,
        "imgName": "lehenga.jpg",
        "inCart": 0
    },
    {
        "id": 6,
        "name": "Brown Leather Dress",
        "price": 3599,
        "imgName": "leather.jpg",
        "inCart": 0
    },
    {
        "id": 7,
        "name": "Shirt Dress",
        "price": 1199,
        "imgName": "shirt_dress.webp",
        "inCart": 0
    },
    {
        "id": 8,
        "name": "Cowl Neck Top",
        "price": 1049,
        "imgName": "cowled_neck.webp",
        "inCart": 0
    },
    {
        "id": 9,
        "name": "Peach Hoodie",
        "price": 1199,
        "imgName": "h1.webp",
        "inCart": 0
    },
    {
        "id": 10,
        "name": "Mustard Hoodie",
        "price": 599,
        "imgName": "h2.webp",
        "inCart": 0
    },
    {
        "id": 11,
        "name": "Typography Hoodie",
        "price": 699,
        "imgName": "h3.jpg",
        "inCart": 0
    },
    {
        "id": 12,
        "name": "Brown Hoodie",
        "price": 1049,
        "imgName": "h4.webp",
        "inCart": 0
    },
    {
        "id": 13,
        "name": "Green Hoodie",
        "price": 649,
        "imgName": "h5.jpg",
        "inCart": 0
    },
    {
        "id": 14,
        "name": "Yellow Sweatshirt",
        "price": 1049,
        "imgName": "h6.jpg",
        "inCart": 0
    },
    {
        "id": 15,
        "name": "Striped Sweatshirt",
        "price": 1149,
        "imgName": "h7.jfif",
        "inCart": 0
    },
    {
        "id": 16,
        "name": "Woven Sweater",
        "price": 1049,
        "imgName": "h8.webp",
        "inCart": 0
    },
    {
        "id": 17,
        "name": "Cocktail Dress",
        "price": 2499,
        "imgName": "d1.jpg",
        "inCart": 0
    },
    {
        "id": 18,
        "name": "Pink Bodycon Dress",
        "price": 799,
        "imgName": "d2.jpg",
        "inCart": 0
    },
    {
        "id": 19,
        "name": "Green Dress",
        "price": 699,
        "imgName": "d3.webp",
        "inCart": 0
    },
    {
        "id": 20,
        "name": "A-line Dress",
        "price": 499,
        "imgName": "d4.jpg",
        "inCart": 0
    },
    {
        "id": 21,
        "name": "Cocktail Dress",
        "price": 1449,
        "imgName": "d5.jpg",
        "inCart": 0
    },
    {
        "id": 22,
        "name": "Sequined Dress",
        "price": 999,
        "imgName": "d6.jpg",
        "inCart": 0
    },
    {
        "id": 23,
        "name": "Bodycon Maxi Dress",
        "price": 749,
        "imgName": "d7.webp",
        "inCart": 0
    },
    {
        "id": 24,
        "name": "Party Dress",
        "price": 1599,
        "imgName": "d8.webp",
        "inCart": 0
    }
];

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}
var cartItems = [];

function ready(){

    var searchButtons = document.getElementsByClassName("btn-search");
    for (var i = 0; i < searchButtons.length; i++) {
        var button = searchButtons[i];
        button.addEventListener("click", search);
    }

    var addToCartButtons = document.getElementsByClassName("shop-item-button");
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
        // button.addEventListener("click", function(event){
        //     var buttonClicked = event.target;
        //     buttonClicked.innerText = "ADDED TO CART";
        //     buttonClicked.style.backgroundColor = "antiquewhite";
        // })
    }

    var addToWishlistButtons = document.querySelectorAll(`.btn-wishlisted`);
    for (var i = 0; i < addToWishlistButtons.length; i++) {
        var button = addToWishlistButtons[i];
        button.addEventListener("click", addToWishlistClicked);
        button.addEventListener("click", function(event){
            var buttonClicked = event.target;
            buttonClicked.style.color = "red";
        });
    }
}


function search(){
    let matchItem = document.createElement("div");
    matchItem.className = "matched-item";

    var searchInput = document.getElementById("search-input").value.toUpperCase();
    // var match_cnt = 0;
    var container = document.getElementsByClassName("matches")[0];

    for(var i in products){

        var id = products[i].id;
        var imgName = products[i].imgName;
        var title = products[i].name;
        var price = products[i].price;
        if (searchInput == title.toUpperCase()){
            // match_cnt += 1;

            var containerContents = `
                <span id="match-item-id" style = "font-size: 0">${id}</span>
                <span id = "pname match-item-title"><strong>${title}</strong></span>
                <button id = "btn-wishlisted heart" type = "button" style="float: right">&#10084;</button>
                <img id = "match-item-image" src="photos/${imgName}">
                <br>
                <div class="match-item-details">
                    <span class = "match-item-price">${price}</span>
                    <button class="btn btn-primary shop-item-button btn-cart" type="button" style="float: right" >ADD TO CART </button>
                </div> 
            `
            // hc.innerHTML = '';
            matchItem.innerHTML = containerContents;
            container.appendChild(matchItem);

            console.log(id, price, title, imgName);
        }
    }
}

function addToWishlistClicked(event) {
    var button = event.target;
    var wishedItem = button.parentElement;
    var id = wishedItem.getElementsByClassName("match-item-id")[0].innerText;
    var title = wishedItem.getElementsByClassName("match-item-title")[0].innerText;
    var price = wishedItem.getElementsByClassName("match-item-price")[0].innerText;
    var imageSrc = wishedItem.getElementsByClassName("match-item-image")[0].src;
    console.log(id, title, price, imageSrc);
    addItemToWishlist(id, title, price, imageSrc);
}

function addItemToWishlist(id, title, price, imageSrc) {
    var alreadyInWishlist = false;
    //check if item is present in the cart
    var wishlistItemsOld = JSON.parse(localStorage.getItem("productsInWishlist"));
    console.log("wishlist items old: ", wishlistItemsOld);
    if (wishlistItemsOld != null) {
        for (var i = 0; i < wishlistItemsOld.length; i++) {
            if (wishlistItemsOld[i].id == id) {
                alert("Item already in Wishlist!.");
                alreadyInWishlist = true;
                return;
            }
        }
    }
    if (alreadyInWishlist == false) {
        wishlist.push({id, title, price, imageSrc });
        localStorage.setItem("productsInWishlist", JSON.stringify(wishlist));
        console.log("Updated Wishlist: ", wishlist);
        // setCartCount();
        //do the dom manipulation after this to add the item to the cart
    }
}

if (window.location.pathname == "/wishlist") {
    //do stuff
    console.log("in wishlist.html");
    addWishlistItemsToDOM();
}

function addWishlistItemsToDOM() {
    var wishlistItems = JSON.parse(localStorage.getItem("productsInWishlist"));

    console.log("wishlist items: ", wishlistItems);

    for (var i = 0; i < wishlistItems.length; i++) {
        var id = wishlistItems[i].id;
        var title = wishlistItems[i].title;
        var price = wishlistItems[i].price;
        var imageSrc = wishlistItems[i].imageSrc;
        console.log(id, title, price, imageSrc);
        wishlistItemsDivs(id, title, price, imageSrc);
    }
}

function wishlistItemsDivs(id, title, price, imageSrc) {
    var wishlistItems = JSON.parse(localStorage.getItem("productsInWishlist"));

    let newWish = document.createElement("div");
    newWish.innerText = title;
    newWish.className = "wished-item";

    var wishedItems = document.getElementsByClassName("wished-items")[0];
    // var nowishedItems = document.getElementsByClassName("no-wished-items")[0];

    if(wishlistItems.length > 0){
        var wishedContents = `
            <span class="wished-item-id" style = "font-size:0">${id}</span>
            <span class = "wname wished-item-title"><strong>${title}</strong></span>
            <button class = "btn-cross" type = "button" style="float: right"> &#10006; </button>
            <img class = "wished-item-image" src="${imageSrc}">
            <br>
            <div class="wished-item-details">
                <span class = "wished-item-price">  ${price}</span>
                <button  class="btn btn-primary wish-to-cart btn-cart" type="button" style="float: right" >ADD TO CART </button>
            
        </div>`;

        const myNode = document.getElementById("no-wish");
        myNode.innerHTML = '';
        newWish.innerHTML = wishedContents;
        wishedItems.appendChild(newWish);

        console.log("displaying wishlist");
    }

}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    if(shopItem){
        var id = shopItem.getElementsByClassName("match-item-id")[0].innerText;
        var title = shopItem.getElementsByClassName("match-item-title")[0].innerText;
        var price = shopItem.getElementsByClassName("match-item-price")[0].innerText;
        var imageSrc = shopItem.getElementsByClassName("match-item-image")[0].src;
    }
    //console.log(title, price, imageSrc);
    addItemToCart(id, title, price, imageSrc);
    updateCartTotal();
}

// use localstorage to add the item to the cart
function addItemToCart(id, title, price, imageSrc, quantity = 1) {
    var alreadyInCart = false;
    //check if item is present in the cart
    var cartItemsOld = JSON.parse(localStorage.getItem("cartItems"));
    //console.log("cart items old: ", cartItemsOld);
    if (cartItemsOld != null && cartItemsOld.length > 0) {
        for (var i = 0; i < cartItemsOld.length; i++) {
            if (cartItemsOld[i].id == id) {
                alert("Item already in cart! Increasing quantity by one.");
                cartItemsOld[i].quantity += 1;
                localStorage.setItem("cartItems", JSON.stringify(cartItemsOld));
                alreadyInCart = true;
                return;
            }
        }
    }
    if (alreadyInCart == false) {
        cartItems.push({id, title, price, imageSrc, quantity });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log("Updated cart: ", cartItems);

        //do the dom manipulation after this to add the item to the cart
    }
}

if (window.location.pathname == "/cart") {
    //do stuff
    console.log("in cart.html");
    addCartItemsToDOM();
}

function addCartItemsToDOM() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    // console.log("cart items: ", cartItems);

    for (var i = 0; i < cartItems.length; i++) {
        var id = cartItems[i].id;
        var title = cartItems[i].title;
        var price = cartItems[i].price;
        var imageSrc = cartItems[i].imageSrc;
        var quantity = cartItems[i].quantity;
        // console.log(title, price, imageSrc, quantity);
        addCartItemsDivs(id, title, price, imageSrc, quantity);
    }
    updateCartTotal();
}
function addCartItemsDivs(id, title, price, imageSrc, quantity) {

    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");

    var cartItems = document.getElementsByClassName("cart-items")[0];

    var cartRowContents = 
        `<div class="cart-item cart-column col-1">
            <span class="cart-item-id" style = "font-size:0">${id}</span>
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">&nbsp; ${price}</span>
        <div class="cart-quantity cart-column">
            <input class = "cart-item-quantity"  type = "number" value = ${quantity}>
            <button class="btn-remove"  type = "button">REMOVE</button>
        </div>`;

    cartRow.innerHTML = cartRowContents;
    cartItems.appendChild(cartRow);
    cartRow.getElementsByClassName("btn-remove")[0].addEventListener("click", removeCartItem);
    cartRow.getElementsByClassName("cart-item-quantity")[0].addEventListener("change", quantityChanged);

}