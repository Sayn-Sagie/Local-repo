let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let saveEl = document.getElementById("save-el")
let homeScore = 0
let guestScore = 0

function freethrowHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function twopointerHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function threepointerHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function freethrowGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function twopointerGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function threepointerGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function newGame() {
    let score = ("Home: " + homeScore) + " - " + ("Guest: " + guestScore)
    saveEl.textContent = "Game Score: " + score
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeScore = 0
    guestScore = 0
}