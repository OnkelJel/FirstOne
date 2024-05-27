// Player class
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.emoji = '🦸'; // Hero emoji
  }

  // Show the player on the canvas
  show(context) {
    context.font = `${this.size}px Arial`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(this.emoji, this.x, this.y);
  }

  // Move the player
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

// Item class
class Item {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.emoji = '💎'; // Treasure chest emoji
  }

  // Show the item on the canvas
  show(context) {
    context.font = `${this.size}px Arial`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(this.emoji, this.x, this.y);
  }

  // Check if the item is collected by the player
  isCollected(player) {
    return this.x === player.x && this.y === player.y;
  }
}

// Game class
class Game {
  constructor(playerX, playerY) {
    this.canvas = document.getElementById('gameCanvas');
    this.context = this.canvas.getContext('2d');
    this.player = new Player(playerX, playerY);
    this.items = [new Item(100, 100), new Item(300, 300)];
    this.handleInput();
    this.run();
  }

  // Handle keyboard input
  handleInput() {
    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'w':
          this.player.move(0, -20);
          break;
        case 's':
          this.player.move(0, 20);
          break;
        case 'a':
          this.player.move(-20, 0);
          break;
        case 'd':
          this.player.move(20, 0);
          break;
      }
    });
  }
  run() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.show(this.context);
    this.items.forEach((item, index) => {
      item.show(this.context);
      if (item.isCollected(this.player)) {
        this.items.splice(index, 1);
        if (this.items.length === 0) {
          alert('All items collected! You win!');
        }
      }
    });
    requestAnimationFrame(() => this.run());
  }
}


new Game(20, 20);
