// Import stylesheets
import './style.css';

const SEXY_MAN = new Image(50, 50);
SEXY_MAN.src =
  'https://image.shutterstock.com/shutterstock/photos/1162618336/display_1500/stock-photo-sexy-man-in-underwear-isolated-on-white-background-1162618336.jpg';

const playerOnePosition = new Array<number>(2);
let playerOneMovingRight = 1;
let playerOneMovingDown = 1;
playerOnePosition[0] = 1;
playerOnePosition[1] = 1;

function draw() {
  const canvas: HTMLCanvasElement = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    setInterval(() => {
      //Bouncing!
      if (playerOnePosition[0] > 285) {
        playerOneMovingDown = -1;
      }
      if (playerOnePosition[1] > 350) {
        playerOneMovingRight = -1;
      }
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
      ctx.moveTo(495, 485);
      while (i > 5) {
        ctx.lineTo(485, i);
        ctx.lineTo(495, i - 5);
        i -= 10;
      }
      ctx.moveTo(485, 5);
      i = 495;
      while (i > 5) {
        ctx.lineTo(i, 10);
        ctx.lineTo(i - 5, 20);
        i -= 10;
      }
      ctx.stroke();
    }, 0.033);
  }
}
draw();
