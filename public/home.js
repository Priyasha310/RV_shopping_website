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

function ready(){
    
    var searchButtons = document.getElementsByClassName("btn-search");
    for (var i = 0; i < searchButtons.length; i++) {
        var button = searchButtons[i];
        button.addEventListener("click", search);
    }
}

function search(){
    
    let matchItem = document.createElement("div");
    matchItem.className = "matched-item";

    var searchInput = document.getElementById("search-input").value.toUpperCase();
    var match_cnt = 0;
    var container = document.getElementsByClassName("matches")[0];
    var hc = document.getElementsByClassName("home-content")[0];

    for(var i in products){
        
        var id = products[i].id;
        var imgName = products[i].imgName;
        var title = products[i].name;
        var price = products[i].price;
        if (searchInput == title.toUpperCase()){
            match_cnt += 1;

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
