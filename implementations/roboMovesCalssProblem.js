class RobotMovement{
	constructor(){
		this.xCoordinate=0
		this.yCoordinate=0
	}
	moveUp(){
		this.yCoordinate++
	}
	moveDown(){
		this.yCoordinate--
	}
	moveRight(){
		this.xCoordinate++
	}
	moveLeft(){
		this.xCoordinate--
	}
}


let Num = 5
let arr=["up","down","right","right","left"]
let myRobotMove = new RobotMovement();
for (let index = 0; index  < Num; index ++) {
  let currentMovement = arr[index];
  if (currentMovement === "up") {
    myRobotMove.moveUp();
  } else if (currentMovement === "down") {
    myRobotMove.moveDown();
  } else if (currentMovement === "left") {
    myRobotMove.moveLeft();
  } else {
    myRobotMove.moveRight();
  }
}
console.log(myRobotMove.xCoordinate);
console.log(myRobotMove.yCoordinate);