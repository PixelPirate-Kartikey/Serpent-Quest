# Serpent-Quest

## Overview
Serpent-Quest is a modern rendition of the classic Snake game built using HTML, CSS, and JavaScript. The game is simple yet addictive, challenging players to navigate the snake to consume food and grow while avoiding collisions with the walls or itself.

## Features
- Smooth and responsive controls using arrow keys
- Realistic sound effects for eating food, moving, and game over
- Dynamic gameplay speed that increases as the score goes up
- Persistent high score stored in local storage
- Visually appealing design with a modern twist

## Installation
To get started with Serpent-Quest, simply clone the repository and open the `index.html` file in your web browser.

```bash
git clone https://github.com/yourusername/serpent-quest.git
cd serpent-quest
open index.html
```

## Gameplay
- Use the arrow keys to control the direction of the snake.
- The snake starts with an initial speed that increases as you score more points.
- Eat the food that appears on the board to grow the snake and increase your score.
- Avoid colliding with the walls or the snake itself to keep playing.
- If you collide, the game is over, and you can restart by pressing any key.

## High Score
- The game tracks and displays your high score, which is stored in your browser's local storage.
- Your high score is updated whenever you achieve a new personal best.

## Code Explanation
### Game Constants & Variables
- `inputDir`: Direction of the snake's movement.
- `foodSound`, `gameOverSound`, `moveSound`, `musicSound`: Audio objects for various game sounds.
- `speed`: Initial speed of the snake.
- `score`: Player's score.
- `lastPaintTime`: Time tracker for repainting the game.
- `snakeArr`: Array representing the snake's position.
- `food`: Object representing the food's position.

### Game Functions
- `main(ctime)`: Main game loop, called continuously to update the game state.
- `isCollide(snake)`: Checks for collisions with walls or itself.
- `gameEngine()`: Core game logic, including collision detection, updating the snake and food, and rendering the game board.

### Event Listeners
- The game listens for `keydown` events to change the direction of the snake based on arrow key presses.

## Files
- `index.html`: Main HTML file containing the structure of the game.
- `style.css`: CSS file for styling the game.
- `game.js`: JavaScript file containing the game logic.
- `music/`: Directory containing audio files for game sounds.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request with your improvements and bug fixes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements
- Inspired by the classic Snake game

Enjoy playing Serpent-Quest and aim for a high score! 🚀
