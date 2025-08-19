var cartimg =document.getElementById("cartimg");
var dropdown =document.getElementById("dropdown");

var cartcount = document.getElementById("cart-count.innerHTML");
var emptycart=document.getElementById("empty-cart");  
var filledcart  =document.getElementById("filled-cart")

var mobile= document.getElementById("mobile");
var side = document.getElementById("side");
var close = document.getElementById("close");
var body = document.querySelector("body")

cartimg.onclick=function(){
   if (cartcount ===0){
filledcart.style.display="none"
}
else{
emptycart.style.display="none"
}
 dropdown.style.top="50px"
 
}

cartimg.onmouseover=function(){
    dropdown.style.top="-350px"
}

mobile.onclick = function () {
    side.style.left="0"
    //body.style.backgroundColor="rgba(255, 255, 255, 0.5)"
    body.style.opacity="0.3"

}

close.onclick = function(){
    side.style.left="-100%"
    //body.style.backgroundColor="#ffff"
    body.style.opacity="1"

}





