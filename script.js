// Features-
// 1. Score increment
// 2. High score
// 3. Difficulty level- easy, med, hard
// 4. Sound effects: collision, background music, food, turns


const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");

easy.addEventListener("click", () => {
    difficultyLevel(500);
});
medium.addEventListener("click", () => {
    difficultyLevel(300);
});
hard.addEventListener("click", () => {
    difficultyLevel(100);
});

function difficultyLevel(speed){
    setInterval(fun, speed);
}
const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", () => {
            document.getElementById("BGsound").setAttribute("src", "game-music-loop-6-144641.mp3");
            document.getElementById("BGsound").play();
});

function foodSound(){
    document.getElementById("sound").setAttribute("src", "achievement-video-game-type-1-230515.mp3");
    document.getElementById("sound").play();
}

function turn(){
    document.getElementById("sound").setAttribute("src", "mixkit-arcade-game-jump-coin-216.wav");
    document.getElementById("sound").play();
}


function gameOver(){
    document.getElementById("BGsound").setAttribute("src", "");
    document.getElementById("sound").setAttribute("src", "game-over-arcade-6435.mp3");
    document.getElementById("sound").play();
}
let score = 0;
let previousScore = 0;
function scoreIncrement(){
    previousScore = score;
    if(eat()){
        score++;
    }
    const scoreBoard = document.getElementById("score");
    scoreBoard.innerText = score;
    
} 
function highestScore(){
    if(score > previousScore){
        const highScore = document.getElementById("highScore");
        highScore.innerText = score; 
    }
}



