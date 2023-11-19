const HORIZONTAL = 1;
const VERTICAL = 2;

//The class for all the vehicles the game uses:
class Vehicle {
  //The constructor:
  //pos: an array of size to such that pos[0] is the column, pos[1] is the row.
  //vehicleColor: the color of this vehicle.
  //dir: the direction this vehicle is facing (1 = horizontal, 2 = vertical).
  //length: the length of this vehicle in blocks (2 = car, 3 = truck).
  constructor(pos, vehicleColor, dir, length) {
    this.pos = pos;
    this.vehicleColor = vehicleColor;
    this.dir = dir
    this.length = length;
    
    //Handle the information of the red car:
    this.isRed = false;
    if(this.vehicleColor =='rgba(255, 0, 0, 1)') {
      this.isRed = true;
    }
  }
  
  //Try to move this vehicle to the given column and row:
  tryMove(column, row) {
    if(this.dir == HORIZONTAL && this.pos[1] == row) { 
      //Moving horizontally:
      
      if(column > this.pos[0]){
        //Moving right:
        this.tryMovingRight(column);
      }
      
      else{ 
        //Moving left:
        this.tryMovingLeft(column);
      }
    }
    
    else if (this.dir == VERTICAL && this.pos[0] == column) { 
      //Moving vertically:
      if(row < this.pos[1]){ 
        //Moving up
        this.tryMovingUp(row);
      }
      
      else{ 
        //Moving down
        this.tryMovingDown(row);
      }
    }
  }
      
  //Tries to move this vehicle horizontally to the right:
  tryMovingRight(toColumn) {
    //Check if the path is free:
    for(let i = this.length; i < (toColumn - this.pos[0]); i++) {
      if(!freeCell(this.pos[0] + i, this.pos[1])) {
        return;
      }
    }
    
    //Move this vehicle to the new position:
    this.pos[0] = toColumn - this.length + 1;
    
    //Handle Red car exiting:
    if(this.isRed && this.pos[0] == 5) {
      state = "victoryScreen_hide";
    }
  }
      
  //Tries to move this vehicle horizontally to the left:
  tryMovingLeft(toColumn) {
    //Check if the path is free:
    for(let i = 1; i < (this.pos[0] - toColumn); i++) {
      if(!freeCell(this.pos[0] - i, this.pos[1])) {
        return;
      }
    }
      
    //Move this to the new position:
    this.pos[0] = toColumn;
  }
    
  //Tries to move this vehicle vertically up:
  tryMovingUp(toRow) {
    //Check if the path is free:
    for(let i = this.length;i < (this.pos[1] - toRow); i++) {
      if(!freeCell(this.pos[0], this.pos[1] - i)) {
        return;
      }
    }
    
    //Move this to the new position:
    this.pos[1] = toRow + this.length - 1;
  }
    
  //Tries to move this vehicle vertically down:
  tryMovingDown(toRow) {
    //Check if the path is free:
    for(let i = 1; i < (toRow - this.pos[1]); i++) {
      if(!freeCell(this.pos[0], this.pos[1] + i)) {
        return
      }
    }
      
    //Move this to the new position:
    this.pos[1] = toRow;
  }
    
  //The functions used to calculate the alpha (= the transparency) of the chosen vehicle:
  alphaFunction() {
    return (2 - sin(frameCount / 50)) / 3;
  }
  
  //Draws this vehicle on the screen:
  show() {
    if(this == chosenVehicle) { 
      //if this is the chosen/targeted vehicle, calculate the alpha:
      this.vehicleColor = this.vehicleColor.substring(0, this.vehicleColor.lastIndexOf(',') + 1);
      this.vehicleColor += this.alphaFunction() + ')';
    }
    
    fill(this.vehicleColor);
    
    //Drawing the vehicle itself:
    rectMode(CORNERS);
    if(this.dir == HORIZONTAL) {
      let x1 = 45 + blockLength * (this.pos[0] - 1);
      let y1 = 45 + blockLength * (this.pos[1] - 1);
      let x2 = x1 + blockLength * this.length - 20 * 2;
      let y2 = y1 + blockLength - 40
      rect(x1,y1,x2,y2, 10);
    }
    
    else if(this.dir == VERTICAL) {
      let x1 = 45 + blockLength * (this.pos[0] - 1);
      let y1 = 5 + blockLength + blockLength * (this.pos[1] - 1);
      let x2 = x1 + blockLength - 40;
      let y2 = y1 - blockLength * this.length + 20 * 2;
      rect(x1,y1,x2,y2, 10);
    }
    
    
    rectMode(CORNER);
  }
  
  //Return true IFF this vehicle occupies the cell at the given column and row:
  isOccupingCell(column, row) {
    if(this.dir == HORIZONTAL) {
      //Check horizontally:
      
      for(let i = 0; i < this.length; i++) {
        if(this.pos[0] + i == column && this.pos[1] == row) {
          return true;
        }
      }
    }
    
    else if(this.dir == VERTICAL) {
      //Check vertically:
      
      for(let i = 0; i < this.length; i++) {
        if(this.pos[0] == column && this.pos[1] - i == row) {
          return true;
        }
      }
    }
    
    //No match found:
    return false;
  }
  
  //Check if something needs to happen with this vehicle after the user clicked on the block in the given         column and row:
  checkClicked(column, row) {     
    if(this.isOccupingCell(column, row)) {
      if(chosenVehicle != null) {
        //If we have a chosen vehicle already, reset it's color:
        let stopAt = chosenVehicle.vehicleColor.lastIndexOf(',') + 1;
        chosenVehicle.vehicleColor = chosenVehicle.vehicleColor.substring(0, stopAt) + '1)';
      }
      
      if(this == chosenVehicle) {
      //If the user chose the chosen vehicle again, unchoose it:
      chosenVehicle = null;  
      }
      
      else {
        //The user chose a new vehicle:
        chosenVehicle = this;
      }
    }
  }
}