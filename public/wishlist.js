if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}

let wishlist =  [];

function ready(){

    setCartCount();
        
    wishlist = JSON.parse(localStorage.getItem("productsInWishlist"));
    if (wishlist == null) {
        wishlist = [];
        localStorage.setItem("productsInWishlist", JSON.stringify(wishlist));
    }
    console.log("Initial wishlist on Load: ", wishlist);

    var addToWishlistButtons = document.querySelectorAll(`.btn-wishlisted`);
    for (var i = 0; i < addToWishlistButtons.length; i++) {
        var button = addToWishlistButtons[i];
        button.addEventListener("click", addToWishlistClicked);
        button.addEventListener("click", function(event){
            var buttonClicked = event.target;
            buttonClicked.style.color = "red";
        });
    }

    var removeWishlistItemButtons = document.getElementsByClassName("btn-cross");
    for (var i = 0; i < removeWishlistItemButtons.length; i++) {
        var button = removeWishlistItemButtons[i];
        button.addEventListener("click", removeWishlistItem);
    }

    if (window.location.pathname == "/wishlist") {
        setWishlistCount();
    }
}

function setCartCount(){
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    var quantity = 0;
    if(cartItems){
        for (var i = 0; i < cartItems.length; i++) {
            var q = parseInt(cartItems[i].quantity)
            quantity += q;
        }
    }
    if (quantity) {
        document.getElementById('cart-count').textContent = " " + quantity;
    } 
}

function setWishlistCount(){
    var wishlistItems = JSON.parse(localStorage.getItem("productsInWishlist"));
    if(wishlistItems){
        document.getElementById('wishlist-count').textContent = " " + wishlistItems.length + " wish";
    }
}

function addToWishlistClicked(event) {
    var button = event.target;
    var wishedItem = button.parentElement;
    var id = wishedItem.getElementsByClassName("shop-item-id")[0].innerText;
    var title = wishedItem.getElementsByClassName("shop-item-title")[0].innerText;
    var price = wishedItem.getElementsByClassName("shop-item-price")[0].innerText;
    var imageSrc = wishedItem.getElementsByClassName("shop-item-image")[0].src;
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

    let newWish = document.createElement("div");
    newWish.innerText = title;
    newWish.className = "wished-item";

    var wishedItems = document.getElementsByClassName("wished-items")[0];
    
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

    newWish.innerHTML = wishedContents;
    wishedItems.appendChild(newWish);

    console.log("displaying wishlist");
    
}
    
function removeWishlistItem(event) {
    var buttonClicked = event.target;
    var wishlistItems = JSON.parse(localStorage.getItem("productsInWishlist"));
    //console.log(buttonClicked.parentElement.className);
    var title = buttonClicked.parentElement.getElementsByClassName("wished-item-title")[0].innerText;
    title = title.replaceAll('"', "");
    // console.log("parent title", title);
    for (var i = 0; i < wishlistItems.length; i++) {
        if (wishlistItems[i].title == title) {
            wishlistItems.splice(i, 1);
            localStorage.setItem("productsInWishlist", JSON.stringify(wishlistItems));
            console.log("Updated wishlist (removed) : ", wishlistItems);
        }
    }
    buttonClicked.parentElement.remove();
}
