// alert("welcome");

var wishlistButtons = document.getElementsByClassName("heart");

for(var i=0; i<wishlistButtons.length; i++){
    var button = wishlistButtons[i];
    button.addEventListener("click", function(event){
        var buttonClicked = event.target;
        buttonClicked.style.color = "red";
    })
}
// function changeColor() {
//     document.getElementsByClassName("heart ").style.color = "red";
// }
