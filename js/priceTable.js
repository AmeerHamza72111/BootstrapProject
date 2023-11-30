function toggleBallPosition() {
    var ball = document.querySelector(".ball");

    if (ball.classList.contains("left")) {
        ball.style.left = "calc(100% - 30px)";
        ball.classList.remove("left");
        ball.classList.add("right");
    } else {
        ball.style.left = "0";
        ball.classList.remove("right");
        ball.classList.add("left");
    }
}