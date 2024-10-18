const searchicon = document.querySelector(".search-icon");
const searchform = document.querySelector(".search-form");

searchicon.addEventListener("click",() => {
    searchform.classList.add("active");
    searchform.classList.remove("active");

})

const carticon = document.querySelector(".search-icon");
const cartitemscontainer = document.querySelector(".search-form");

carticon.addEventListener("click",() => {
    cartitemscontainer.classList.add("active");
    searchform.classList.remove("active");

});