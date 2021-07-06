let countEL = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")

let count = 0

function increment(){
    count+=1
    countEL.textContent = count
}

function save(){
    let countStr = count+" - "
    saveEL.textContent += countStr
    count = 0
    countEL.textContent = count
}

// let username = "Gourob"
// let message = "You have three new notifications"
// let messageToUser = message+", "+ username+ "!"
// console.log(messageToUser)

// let name = "Gourob"
// let greeting = "Hi, my name is "

// let myGreeting =  greeting +name
// console.log(myGreeting)