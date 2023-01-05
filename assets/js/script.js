// Wait for the DOM finishing load before starting the game.
document.addEventListener("DOMContentLoaded", function () {
    // hidde info box on DOM Load
    document.getElementById("rules").style.display = "none";
    let info = document.getElementById("info");
    info.addEventListener("click", showInfoBox);

    let close = document.getElementById("closeInfo");
    close.addEventListener("click", closeInfoBox);

    // hide user details form
    document.getElementById("user").style.display = "none";
    let user = document.getElementById("start");
    user.addEventListener("click", getName);

    // hide game box
    document.getElementById("questionsBox").style.display = "none";
    let openGame = document.getElementById("user");
    openGame.addEventListener("submit", startGame);




});


/** showes the info & rules box after click "How to play game?" */
function showInfoBox() {
    document.getElementById("rules").style.display = "block";
}

/** hides the info & rules box after click "Understand!*/
function closeInfoBox() {
    document.getElementById("rules").style.display = "none";
}

/** shows user details form after click "Start Game" */
function getName() {
    document.getElementById("user").style.display = "block";
    document.getElementById("rules").style.display = "none";
}

/** this function shows game box */
function startGame(event) {

    event.preventDefault();

    document.getElementById("name").textContent = document.getElementById("userDetails").value;

    document.getElementById("questionsBox").style.display = "block";
}