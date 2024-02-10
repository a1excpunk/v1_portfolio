const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray = [];
let hue = 0;

// in case user resizes window
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  animate();
});

const mouse = {
  x: undefined,
  y: undefined,
};

// canvas.addEventListener('click', function (event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     for(let i = 0; i < 20; i++){
//         particleArray.push(new Particle())
//     }
// })

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 10; i++) {
    particleArray.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsl(${hue},100%,50%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    // shrinks shapes
    if (this.size > 0.2) {
      this.size = this.size - 0.1;
    }
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// function init() {
//     // how many particles there shoud be, how many particle should be pushed in particleArray
//     for (let i = 0; i < 500; i++) {
//         particleArray.push(new Particle())
//     }
// }

// init()

// canvas is repainted every time new random particles are drawn
function handleParticles() {
  for (let i = 0; i < particleArray.length; i++) {
    // makes them move randomly, repaints
    particleArray[i].update();
    // draws particles randomly
    particleArray[i].draw();
    // if psrticle is small enough it is deleted from array
    if (particleArray[i].size <= 0.2) {
      particleArray.splice(i, 1);
      // console.log(particleArray.length);
      i--;
    }
  }
}

function animate() {
  // // clears canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "rgba(0,0,0,0.02)"
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  hue += 0.5;
  // requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
  // Note: Your callback routine must itself call requestAnimationFrame() again if you want to animate another frame at the next repaint. requestAnimationFrame() is 1 shot.
  requestAnimationFrame(animate);
}

animate();
