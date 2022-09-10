// Import stylesheets
import './style.css';

const SEXY_MAN = new Image(50, 50);
SEXY_MAN.src =
  'https://image.shutterstock.com/shutterstock/photos/1162618336/display_1500/stock-photo-sexy-man-in-underwear-isolated-on-white-background-1162618336.jpg';

const playerOnePosition = new Array<number>(2);
let playerOneMovingRight = 0;
let playerOneMovingDown = 0;
playerOnePosition[0] = 1;
playerOnePosition[1] = 1;

function draw() {
  const canvas: HTMLCanvasElement = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    function keyDownHandler(ev: KeyboardEvent) {
      console.log(ev.key);
      switch (ev.key) {
        case 'w':
          playerOneMovingDown = -1;
          break;
        case 'a':
          playerOneMovingRight = -1;
          break;
        case 's':
          playerOneMovingDown = 1;
          break;
        case 'd':
          playerOneMovingRight = 1;
          break;
      }
    }
    function keyUpHandler(ev: KeyboardEvent) {
      console.log(ev.key);
      switch (ev.key) {
        case 'w':
          if (playerOneMovingDown == -1) {
            playerOneMovingDown = 0;
          }
          break;
        case 'a':
          if (playerOneMovingRight == -1) {
            playerOneMovingRight = 0;
          }
          break;
        case 's':
          if (playerOneMovingDown == 1) {
            playerOneMovingDown = 0;
          }
          break;
        case 'd':
          if (playerOneMovingRight == 1) {
            playerOneMovingRight = 0;
          }
          break;
      }
    }
    window.addEventListener('keydown', keyDownHandler, false);
    window.addEventListener('keyup', keyUpHandler, false);

    setInterval(() => {
      // Clearing screen
      ctx.clearRect(0, 0, 1000, 1000);

      // Drawing and moving player
      ctx.drawImage(
        SEXY_MAN,
        playerOnePosition[0],
        playerOnePosition[1],
        100,
        200
      );
      playerOnePosition[0] += playerOneMovingRight;
      playerOnePosition[1] += playerOneMovingDown;
      ctx.font = '30px Helvetica';
      // Drawing player name
      ctx.strokeText(
        'Randy',
        playerOnePosition[0] + 15,
        playerOnePosition[1] - 10
      );
      ctx.beginPath();
      ctx.moveTo(10, 10);
      let i = 15;
      while (i < 495) {
        ctx.lineTo(20, i);
        ctx.lineTo(10, i + 5);
        i += 10;
      }
      i = 25;
      ctx.moveTo(20, 495);
      while (i < 495) {
        ctx.lineTo(i, 485);
        ctx.lineTo(i + 5, 495);
        i += 10;
      }
      ctx.moveTo(495, 495);
      while (i > 5) {
        ctx.lineTo(i, 485);
        ctx.lineTo(i + 5, 495);
        i -= 10;
      }
      ctx.stroke();
    }, 0.033);
  }
}
draw();
