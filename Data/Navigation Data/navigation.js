let burgerbar = document.getElementById("burger-bar")
let navigationslider = document.getElementById("b-slider")

burgerbar.addEventListener("click", function(){
    navigationslider.classList.toggle("nav_element-addon")
})