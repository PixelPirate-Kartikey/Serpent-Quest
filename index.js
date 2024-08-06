// Game Constants & Variables
let inputDir = {x: 0, y: 0};  // Direction of the snake's movement
const foodSound = new Audio('music/food.mp3');  // Sound for eating food
const gameOverSound = new Audio('music/gameover.mp3');  // Sound for game over
const moveSound = new Audio('music/move.mp3');  // Sound for moving the snake
const musicSound = new Audio('music/music.mp3');  // Background music
let speed = 5;  // Initial speed of the snake
let score = 0;  // Player's score
let lastPaintTime = 0;  // Time tracker for repainting the game
let snakeArr = [  // Initial position of the snake
    {x: 13, y: 15}
];

food = {x: 6, y: 7};  // Initial position of the food

// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);  // Continuously calls the main function
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){  // Control the speed of the snake
        return;
    }
    lastPaintTime = ctime;  // Update the last paint time
    gameEngine();  // Run the game engine
}

function isCollide(snake) {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){  // Check for self-collision
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0){  // Check for wall collision
        return true;
    }
        
    return false;
}

function gameEngine(){
    // Part 1: Updating the snake array & Food
    if(isCollide(snakeArr)){  // Check for collisions
        gameOverSound.play();  // Play game over sound
        musicSound.pause();  // Pause the music
        inputDir = {x: 0, y: 0};  // Reset the input direction
        alert("Game Over. Press any key to play again!");  // Show game over alert
        snakeArr = [{x: 13, y: 15}];  // Reset the snake's position
        musicSound.play();  // Play the music again
        score = 0;  // Reset the score
        speed = 5;  // Reset the speed
    }

    // If you have eaten the food, increment the score and regenerate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){  // Check if the snake has eaten the food
        foodSound.play();  // Play food sound
        if (score == 0)
            score++;
        else
            score *= 2;  // Increment the score
        if(score > hiscoreval){  // Update high score if necessary
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));  // Save high score to local storage
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval;  // Update high score display
        }
        scoreBox.innerHTML = "Score: " + score;  // Update score display
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});  // Grow the snake
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a) * Math.random()), y: Math.round(a + (b-a) * Math.random())};  // Generate new food position
        speed += 0.5;  // Increase the speed
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {  // Move the snake body
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;  // Move the snake's head
    snakeArr[0].y += inputDir.y;

    // Part 2: Display the snake and Food
    // Display the snake
    board.innerHTML = "";  // Clear the board
    snakeArr.forEach((e, index) => {  // Render the snake
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');  // Add head class to the snake's head
        } else {
            snakeElement.classList.add('snake');  // Add snake class to the snake's body
        }
        board.appendChild(snakeElement);  // Append the snake element to the board
    });
    // Display the food
    foodElement = document.createElement('div');  // Create food element
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');  // Add food class
    board.appendChild(foodElement);  // Append the food element to the board
}

// Main logic starts here
musicSound.play();  // Play background music
let hiscore = localStorage.getItem("hiscore");  // Get high score from local storage
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval));  // Initialize high score if not present
} else {
    hiscoreval = JSON.parse(hiscore);  // Parse high score
    hiscoreBox.innerHTML = "HiScore: " + hiscore;  // Display high score
}

window.requestAnimationFrame(main);  // Start the game loop
window.addEventListener('keydown', e => {  // Add event listener for keydown
    inputDir = {x: 0, y: 1};  // Start the game
    moveSound.play();  // Play move sound
    switch (e.key) {  // Change direction based on key press
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});
