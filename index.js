let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let countHome = 0
let countGuest = 0

function plusOne() {
    countHome += 1
    scoreHome.textContent = countHome
}

function plusTwo() {
    countHome += 2
    scoreHome.textContent = countHome
}

function plusThree() {
    countHome += 3
    scoreHome.textContent = countHome
}

function plusOone() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}

function plusTwwo() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}

function plusThhree() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}
