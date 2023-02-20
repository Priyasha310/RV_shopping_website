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

// // function search() {
// //     let input = document.getElementById("search-input").value;
// //     input = input.toUpperCase();
// //     var searchStrings = str_needle.split(/\W/);
    
// //     let cards = document.querySelectorAll(".shop-item-title");
// //     for(var j=0, divsLen = cards.length; j<divsLen; j++){
// //         var match = 0;
// //         for(var i=0, len = searchStrings.length; i<len; i++){
// //             var curr = searchStrings[i].toUpperCase();
// //             if(input !== ""){
// //                 if(cards[j].textContent.toUpperCase().indexOf(curr) !== -1){
// //                     match++;
// //                 }
// //                 if(match == searchStrings.length){
// //                     cards[j].style.display = "block";
// //                 }
// //             }
// //         }
// //     }
// // }

// // function s(){
// //     var input = document.getElementById("search-input").value;
// //     input.toUpperCase();
// //     var match = 0;
// //     for(var i in items){
// //         if(input == items[i].name){
// //             match += 1;
// //             document.getElementById("")
// //         }
// //     }
// // }

// // function search(event) {
// //     var button = event.target;
// //     var wishedItem = button.parentElement;
// //     var id = wishedItem.getElementsByClassName("shop-item-id")[0].innerText;
// //     var title = wishedItem.getElementsByClassName("shop-item-title")[0].innerText;
// //     var price = wishedItem.getElementsByClassName("shop-item-price")[0].innerText;
// //     var imageSrc = wishedItem.getElementsByClassName("shop-item-image")[0].src;
// //     console.log(id, title, price, imageSrc);
// //     addToSearchResult(id, title, price, imageSrc);
// // }

// // function ready(){
// //     var searchButton = document.getElementsByClassName("btn-search");
// //     for (var i = 0; i < searchButton.length; i++) {
// //         var button = searchButton[i];
// //         button.addEventListener("click", searchButtonClicked);
// //     }
// // }

// function searchButtonClicked() {
//     var searchedItem = document.getElementById("search-input").value;
//     // console.log(searchedItem);

//     for(var i in items){
//         var title = items[i].name;
//         title = title.toLowerCase();
//         if(searchedItem == items[i].name){
//             var id = items[i].id;
//             var imageSrc = items[i].imgName;
//             var price = items[i].price;
//             console.log("matched");
//             searchDisplay(title, id, imageSrc, price);
//         }
//     }    
// }

// function searchDisplay(title, id, imageSrc, price) {
//     let res = document.createElement("div");
//     res.className = "match";
    
//     var container = document.getElementsByClassName("matches")[0];
    
//         var containerContents= `
//             <span class="shop-item-id">${id}</span>
//             <span class = "pname shop-item-title"><strong>${title}</strong></span>
//             <button class = "btn-wishlisted heart" type = "button" style="float: right">&#10084;</button>
//             <img class = "shop-item-image" src="photos/${imageSrc}">
//             <br>
//             <div class="shop-item-details">
//                 <span class = "shop-item-price">${price}></span>
//                 <button class="btn btn-primary shop-item-button btn-cart" type="button" style="float: right" >ADD TO CART </button>
//             </div> 
//         `
    
//     res.innerHTML = containerContents;
//     container.appendChild(res);
// }

// document.querySelector('btn-search').addEventListener('click', (e) => {
//     e.preventDefault();
//     const searchInput = document.querySelector('#search-input').value.toLowerCase();
    
    
//     var searchedItem = document.getElementById("search-input").value;
//     for(var i in items){
//         if(items[i].name === searchedItem){
//             fetch('/', {
//                 method: 'POST',
//                 headers: {
//                     Authorization: 'Bearer abcdxyz',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     searchInput
//                 }),
//             })
//             .then((res) => {
//                 return res.json();
//             })
//             .then((data) => console.log(data));
//         }
//     }
//     // fetch('/', {
//     //     method: 'POST',
//     //     headers: {
//     //         Authorization: 'Bearer abcdxyz',
//     //         'Content-Type': 'application/json',
//     //     },
//     //     body: JSON.stringify({
//     //         searchInput
//     //     }),
//     // })
//     // .then((res) => {
//     //     return res.json();
//     // })
//     // .then((data) => console.log(data));
// });

    // var title = document.getElementsByClassName("shop-item-title")[0].innerText;

    // window.location = "/search" + input;
    // var container = document.getElementById("results")[0];
    // var containerContents = `
    //     <div class="product shop-item" >
    //         <span class="shop-item-id">${id}</span>
    //         <span class = "pname shop-item-title"><strong>${title}</strong></span>
    //         <button id="btn-heart-${id}" class = "btn-wishlisted heart" type = "button" style="float: right">&#10084;</button>
    //         <img class = "shop-item-image" src="${imageSrc}">
    //         <br>
    //         <div class="shop-item-details">
    //             <span class = "shop-item-price"> ${price}</span>
    //             <button class="btn btn-primary shop-item-button btn-cart" type="button" style="float: right" >ADD TO CART </button>
    //         </div> 
    //     </div>`
    
    // res.innerHTML = containerContents;
    // container.appendChild(res);
    // return false;
//way:
// let http = XMLHttpRequest();

// http.open('get', 'items.json', true);

// http.send();

// http.onload  = function search(){
//     if(this.readyState == 4 && this.status == 200){
//         let items = JSON.parse(this.responseText);

//         let output = "";

//         for(let item of items){
//             output += `
//             <div class="product shop-item match" >
//             <span class="shop-item-id">${item.id}</span>
//             <span class = "pname shop-item-title"><strong>${item.name}</strong></span>
//             <button id="btn-heart-${item.id}" class = "btn-wishlisted heart" type = "button" style="float: right">&#10084;</button>
//             <img class = "shop-item-image" src="photos/${item.imgName}">
//             <br>
//             <div class="shop-item-details">
//                 <span class = "shop-item-price"> ${item.price}</span>
//                 <button class="btn btn-primary shop-item-button btn-cart" type="button" style="float: right" >ADD TO CART </button>
//             </div> 
//         </div>`
//         }
//         document.querySelector(".matches").innerHTML = output;
//     }
// }

function search(){
    
    let matchItem = document.createElement("div");
    matchItem.className = "matched-item";

    var searchInput = document.getElementById("search-input").value.toLowerCase();
    var match_cnt = 0;
    var container = document.getElementsByClassName("matches")[0];

    for(var i in products){
        
        var id = products[i].id;
        var imgName = products[i].imgName;
        var title = products[i].name;
        var price = products[i].price;
        if (searchInput == title.toLowerCase()){
            match_cnt += 1;

            var containerContents = `
                <span id="match-item-id">${id}</span>
                <span id = "pname match-item-title"><strong>${name}</strong></span>
                <button id = "btn-wishlisted heart" type = "button" style="float: right">&#10084;</button>
                <img id = "match-item-image" src="photos/${imgName}">
                <br>
                <div class="match-item-details">
                    <span class = "match-item-price">${price}</span>
                    <button class="btn btn-primary shop-item-button btn-cart" type="button" style="float: right" >ADD TO CART </button>
                </div> 
            `
            matchItem.innerHTML = containerContents;
            container.appendChild(matchItem);
            
            console.log(id, price, title, imgName);
            // document.getElementById("match-item-id").innerText = products[i].id;
            // document.getElementById("match-item-name").innerText = products[i].name;
            // document.getElementById("match-item-image").src = "photos"+ awqproducts[i].imgName;
            // document.getElementById("match-item-price").innerText = products[i].price;
        }
        // else{
        //     container.innerText = "NO PRODUCTS";
        // }
    }
}
