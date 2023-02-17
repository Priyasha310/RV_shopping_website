if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}
var cartItems = [];

function ready(){

    setCartCount();

    cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems == null) {
        cartItems = [];
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    console.log("Initial Cart on Load: ", cartItems);

    
    var addToCartButtons = document.getElementsByClassName("wish-to-cart");
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
        // button.addEventListener("click", function(event){
        //     var buttonClicked = event.target;
        //     buttonClicked.innerText = "ADDED TO CART";
        //     buttonClicked.style.backgroundColor = "antiquewhite";
        // })
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

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    if(shopItem){
        var id = shopItem.getElementsByClassName("wished-item-id")[0].innerText;
        var title = shopItem.getElementsByClassName("wished-item-title")[0].innerText;
        var price = shopItem.getElementsByClassName("wished-item-price")[0].innerText;
        var imageSrc = shopItem.getElementsByClassName("wished-item-image")[0].src
    };
    //console.log(id, title, price, imageSrc);
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
        // console.log(id, title, price, imageSrc, quantity);
        addCartItemsDivs(id, title, price, imageSrc, quantity);
    }
    updateCartTotal();
}
function addCartItemsDivs(id, title, price, imageSrc, quantity) {
    var cartRow = document.createElement("div");
    cartRow.innerText = title;
    cartRow.classList.add("cart-row");

    var cartItems = document.getElementsByClassName("cart-items")[0];

    var cartRowContents = `
        <div class="cart-item cart-column">
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
