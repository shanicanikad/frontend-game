let flashcard = document.querySelector(".flashcard")
let flashcardInside = document.querySelectorAll(".flashcardInside")
let whole = document.querySelector(".whole")
let title = document.querySelector(".title")
let button = document.querySelector(".button")
let start = document.querySelector(".start")
let dropdownContent = document.querySelector(".dropdown-content")
let dropbtn = document.querySelector(".dropbtn")
let correct= document.querySelectorAll(".correctButton")
let incorrect= document.querySelectorAll(".incorrectButton")

whole.style.opacity = 0;
button.addEventListener("click", function (){
    start.style.display = "none"
    whole.style.opacity = 100;
})


dropdownContent.style.opacity = 0;
dropbtn.addEventListener("click", function (){
dropdownContent.style.opacity = 100;
})

for (let i = 0; i < flashcardInside.length; i++){
    let div = document.createElement("div");
    let button1 = document.createElement("button")
    let button2 = document.createElement("button")
    
    button1.innerText = "Good job! 😄 😜 🥳"
    button2.innerText = "Your not a true fan! 😠 😤 🤬 " 


    div.classList.add("goodOrBad")
    button1.classList.add("correctButton")
    button2.classList.add("incorrectButton")


    flashcardInside[i].appendChild(div)   
    let divs = document.querySelectorAll(".goodOrBad")
    divs[i].appendChild(button1)
    divs[i].appendChild(button2)
}

// let pointsCorrect = correct.innerText
// let pointsIncorrect = incorrect.innerText
// pointsCorrect = 0
// pointsIncorrect = 0 

for (let i = 0; i < correct.length; i++){
    correct[i].addEventListener("click", function(e){
        console.log("this works")
        let pointsCorrect = correct.innerText
        let pointsIncorrect = incorrect.innerText
        // pointsCorrect = 0
        // pointsIncorrect = 0 
        pointsCorrect +=10
    })   
}  

for (let i = 0; i < incorrect.length; i++){
    incorrect[i].addEventListener("click", function(e){
    pointsIncorrect -=10
    })
}

