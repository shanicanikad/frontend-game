let flashcard = document.querySelector(".flashcard")
let flashcardInside = document.querySelector(".flashcardInside")
let whole = document.querySelector(".whole")
let title = document.querySelector(".title")
let button = document.querySelector(".button")
let start = document.querySelector(".start")
let dropdownContent = document.querySelector(".dropdown-content")
let dropbtn = document.querySelector(".dropbtn")

whole.style.opacity = 0;
button.addEventListener("click", function (){
    start.style.display = "none"
    whole.style.opacity = 100;
})


dropdownContent.style.opacity = 0;
dropbtn.addEventListener("click", function (){
dropdownContent.style.opacity = 100;
})

