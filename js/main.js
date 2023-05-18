class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.width = 10;
    this.height = 10;
    this.domElement = null;

    this.createDomElement();
  }
  createDomElement() {
    // step1: create the element
    this.domElement = document.createElement("div");

    // step2: add content or modify (ex. innerHTML...)
    this.domElement.id = "player";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.innerText = "Michael Jordan in the paint";

    //step3: append to the dom: `parentElm.appendChild()`
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }

  moveLeft() {
    this.positionX = this.positionX - 5; // === this.position--
    this.domElement.style.left = this.positionX + "vw";
  }
  moveRight() {
    this.positionX = this.positionX + 5; // === this.position = this.postion +1
    this.domElement.style.left = this.positionX + "vw";
  }
}

const player = new Player();

class Obstacle {
  constructor() {
    this.positionX = 50;
    this.positionY = 100;
    this.width = 20;
    this.height = 10;

    this.domElement = null;

    this.createDomElement();
  }
  moveDown() {
    this.positionY--; // está a descer um de cada vez, se quiser mais depressa tem de ser por um numero maior
    this.domElement.style.bottom = this.positionY + "vh";
  }
  createDomElement() {
    // step1: create the element
    this.domElement = document.createElement("div");

    // step2: add content or modify (ex. innerHTML...)
    this.domElement.className = "obstacle"; // com .class porque vamos ter muitos, se fosse ID era especifico para cada um
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.innerText = "Charkles Barkley on defense";

    //step3: append to the dom: `parentElm.appendChild()`
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }
}

// const obstacleOne = new Obstacle();
const obstacleArr = []; // here, will store instances of the class Obstacle

// cria novos obstaculos
setInterval(() => {
  const newObstacle = new Obstacle();
  obstacleArr.push(newObstacle);
}, 4000);

//obstaculos a mexer
setInterval(() => {
  obstacleArr.forEach((obstacleInstance) => {
    obstacleInstance.moveDown();

    if (
      obstacleInstance.positionX < player.positionX + player.width &&
      obstacleInstance.positionX + obstacleInstance.width > player.positionX &&
      obstacleInstance.positionY < player.positionY + player.height &&
      obstacleInstance.height + obstacleInstance.positionY > player.positionY
    ) {
      console.log("game over");
    }
  });
}, 60);

// setInterval(() => {
//     obstaclesArr.forEach((obstacleInstance) => {

//         obstacleInstance.moveDown();

//         if (obstacleInstance.positionX < player.positionX + player.width &&
//             obstacleInstance.positionX + obstacleInstance.width > player.positionX &&
//             obstacleInstance.positionY < player.positionY + player.height &&
//             obstacleInstance.height + obstacleInstance.positionY > player.positionY) {
//             console.log("game over my fren");
//             location.href = './gameover.html';
//         }

//     });
// }, 60);
// attach event listeners...
document.addEventListener("keydown", (event) => {
  console.log("user pressed a key");
  console.log(event.key);

  if (event.code === "ArrowLeft") {
    player.moveLeft();
  } else if (event.code === "ArrowRight") {
    player.moveRight();
  }
});
