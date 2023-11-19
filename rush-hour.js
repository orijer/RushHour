const space_key = '32', r_key = '82', escape_key = '27';
const EDGE_WIDTH = 25;

//The background color we use most of the time:
let mainBackgroundColor;
//The leangth of the sides of each block in the grid:
let blockLength;
//The current state of the program:
let state
//The list of vehicles in the current level:
let vehicles = [];
//The vehicle object that the user selected (or null if no vehivle is currrentl selected):
let chosenVehicle;
//The current level:
let currentLVL;

function setup() {
  createCanvas(700, 700);
  mainBackgroundColor = color(250, 243, 221);
  blockLength = (width - 2 * EDGE_WIDTH) / 6;
  state = "menu";
}

function draw() {  
  switch (state) {
    case "menu":
      drawMainMenuState();
      break;
    case "levelSelect":
      drawLevelSelectState();
      break;
      case "tutorial":
      drawTutorialState();
      break;
    case "victoryScreen_hide":
    case "game":
      drawGameState();
      break;
    case "victoryScreen_show":
      drawVictoryScreenState();
      break;
    case "credits":
      drawCreditsState();
      break;
  }
}

//Draws the Main Menu:
function drawMainMenuState() {
  //Main background color
  background(mainBackgroundColor);  
  
  //Main Title
  textSize(80); 
  fill(74, 124, 89);
  stroke(74, 124, 89);
  strokeWeight(3);
  text("Rush Hour", 150, 100);
  
  //Title Underline:
  strokeWeight(5); 
  stroke(74, 124, 89);
  line(135, 125 + 10 * sin(frameCount / 150), 560, 125 - 10 * sin(frameCount / 150));
  
  //Options Boxes:
  strokeWeight(1);
  fill(200, 213, 185); 
  rect(200, 225, 300, 80);
  rect(200, 345, 300, 80);
  rect(200, 465, 300, 80);
  
  //Options Text:
  textSize(40); 
  fill(40, 85, 53);
  noStroke();
  text("Level Selector", 225, 280);
  text("Tutorial", 280, 400);
  text("Credits", 285, 520);
}

//Draws the level select screen:
function drawLevelSelectState() {
  background(mainBackgroundColor);
  
  //Draws the level select title:
  textSize(70);
  fill(40, 85, 53);
  noStroke();
  text("Level Select", 150, 100);
  
  //Draw the circles of the levels:
  stroke(0);
  strokeWeight(1);
  let columns = 8;
  let rows = 5;
  
  for(let column = 0; column < columns; column++){
    for(let row = 0; row < rows; row++){
      let levelID = row * columns + column + 1;
      
      levelColor(levelID);
      ellipse(60 + column * 82, 200 + row * 100, 60);
      textSize(20);
      fill(0);
      
      if(levelID >= 10){
        //Draw the two digit levels text:
        text(levelID, 49 + column * 82, 208 + row * 100);
      }
      else{
        //Draw the single digit levels text:
        text(levelID, 55 + column * 82, 208 + row * 100);
      }
    }
  }
}

//Draws the game:
function drawGameState() {
  drawGrid();
  drawVehicles();
  
  //The restart level text:
  fill(0);
  textSize(20);
  text("Press R to restart the level", 232, 695);
  
  //Draws the difficulty on the top right corner:
  levelColor(currentLVL);
  text("LEVEL:  " + currentLVL, EDGE_WIDTH, 20);
  if(currentLVL < 11) {
    text("BEGINNER", 570, 20);
  }
  else if(currentLVL < 21) {
    text("INTERMEDIATE", 525, 20);
  }
  else if(currentLVL < 31) {
    text("ADVANCED", 565, 20);
  }
  else {
    text("EXPERT", 590, 20);
  }
  
  //Handle transitioning to the victory screen:
  if(state == "victoryScreen_hide") {
    state = "victoryScreen_show";
  }
}

//Draws the victory screen:
function drawVictoryScreenState() {
  fill(160);
  rect(0, height - EDGE_WIDTH, width, height);
  fill(0);
  noStroke();
  textSize(22);
  text("LEVEL COMPLETE!", 245, 18);
  text("PRESS SPACE TO START THE NEXT STAGE", 120, 695);
}

//Draws the credits:
function drawCreditsState() {
  background(mainBackgroundColor);
  
  //The Credits title:
  fill(40, 85, 53);
  textSize(50);
  text("Credits", 270, 100);
  stroke(74, 124, 89);
  strokeWeight(5);
  line(205, 115, 485, 118);
  
  //The Credits text:
  strokeWeight(3);
  textSize(30);
  noStroke();
  text("This is a digital adaptation of the popular ", 50, 200);
  text("board game 'Rush Hour'.", 50, 240);
  text("this adaptaion was created by orijer, using p5.js",50, 330);
  text("Press SPACE to go the the original creator site", 50, 370);
  text("and show your support.", 50, 410);
  
  textSize(25);
  text("Click anywhere on screen to return to the main menu.", 50, 520);
  
  textSize(30);
  text("last updated: 18/11/2023",50, 650);
}


//Draws the grid:
function drawGrid() {
  //The edge rectangles:
  strokeWeight(1);
  background(255);
  fill(160);
  noStroke();
  rect(0, 0, EDGE_WIDTH, height);
  rect(0, 0, width, EDGE_WIDTH);
  rect(0, height - EDGE_WIDTH, width, height);
  rect(width - EDGE_WIDTH, 0, width, EDGE_WIDTH + blockLength *2);
  rect(width - EDGE_WIDTH, EDGE_WIDTH + blockLength * 2, width, height);
  
  //The red exit rectangle:
  fill(255, 0, 0);
  rect(width - EDGE_WIDTH, EDGE_WIDTH + 2*blockLength, width, blockLength);
  stroke(30);
  
  //Vertical lines:
  for(let i = 0; i <= 6; i++) {
    line(EDGE_WIDTH + blockLength * i, EDGE_WIDTH, EDGE_WIDTH + blockLength * i, height - EDGE_WIDTH); 
  }
  
  //Horizontal lines:
  for(let j = 0; j <= 6; j++) {
    line(EDGE_WIDTH, EDGE_WIDTH + blockLength * j, width - EDGE_WIDTH, EDGE_WIDTH + blockLength * j);
  }
}

//Draws all the vehicles of the level on the grid:
function drawVehicles() {
  for(let i = 0; i < vehicles.length; i++){
      vehicles[i].show();
  }
}

//Return true IFF the cell at column x, row y is free (= no car occupies it):
function freeCell(x, y) {
  for(let i = 0; i < vehicles.length; i++) {
    if(vehicles[i].isOccupingCell(x, y)) {
      return false;
    }
  }
  
  return true;
}

//Changes the fill depending on the range of the given level:
function levelColor(level) {
  if(level < 11) { 
    //Levels 1-10: green
    fill(0, 204, 0);
  }
  else if(level < 21) { 
    //Levels 11-20: orange
    fill(255, 153, 51);
  }
  else if(level < 31) { 
    //Levels 21-30: blue
    fill(51, 51, 255);
  }
  else { 
    //Levels 31-40: red
    fill(255, 0, 0);
  }
}

//Determines what should happen when the mouse is pressed:
function mousePressed() {
  if(state == "menu") { 
    //In the main menu- enter either level select, tutorial or credits:
    
    if(200 < mouseX && mouseX < 500) {
      //All the buttons are between 200 and 500 in the X axis.
      
      if(225 < mouseY && mouseY < 305) {
        state = "levelSelect";
        currentLVL = 0;
      }
      
      else if(345 < mouseY && mouseY < 425) {
        state = "tutorial";
        tutorialScreen = 1;
      }
      
      else if(465 < mouseY && mouseY < 545) {
        state = "credits";
      }
    }
  }
  
  else if(state == "levelSelect") { 
    //In the level select- find the clicked level and prepare it:
    let columns = 8;
    let rows = 5;
    
    let column = -1;
    let row = -1;
    
    //Find the correct column:
    for(let columnIndex = 0; columnIndex < columns; columnIndex++) {
      if((30 + columnIndex * 82) < mouseX && mouseX < (90 + columnIndex * 82)) {
        column = columnIndex;
        break;
      }
    }
    
    for(let rowIndex = 0; rowIndex < rows; rowIndex++) {
      if((170 + rowIndex * 100) < mouseY && mouseY < (230 + rowIndex * 100)) {
        row = rowIndex;
        break;
      }
    }
    
    if(column != -1 && row != -1) {
      //The user clicked on a circle level:
      currentLVL = row * columns + column + 1;
      vehicles = levelPreparer();
    }
  }
  
  else if(state == "game" || isTutorialInteractiveScreen()) { 
    //In the game (including tutorial levels):
    
    let gridSize = 6; //The grid contains 6 blocks on each row and column.
    
    let gridColumn = -1;
    let gridRow = -1;
    
    //Find the column of the clicked cell:
    for(let columnIndex = 0; columnIndex < gridSize; columnIndex++) { 
      if((25 + blockLength * columnIndex) < mouseX && mouseX < (25 + blockLength * (columnIndex + 1))) {
        gridColumn = columnIndex + 1;
        break;
      }
    }
    
    //Find the row of the clicked cell:
    for(let rowIndex = 0; rowIndex < gridSize; rowIndex++) { 
      if((25 + blockLength * rowIndex) < mouseY && mouseY < (25 + blockLength * (rowIndex+1))) {
        gridRow = rowIndex + 1;
        break;
      }
    }
    
    
    if(gridColumn != -1 && gridRow != -1) { 
      //If an actual cell was clicked:
      
      if(chosenVehicle != null && freeCell(gridColumn, gridRow)) { 
        //And we have chosen a vehicle, and the target cell is free:
        chosenVehicle.tryMove(gridColumn, gridRow);
      }
      
      else {
        //Maybe the user tried to choose a new vehicle:
        gridPressed(gridColumn, gridRow);
      }
    }
  }
  
  else if(state == "credits") { 
    //In credits- just return to the main menu
    state = "menu";
  }
}

//What to do when a key is pressed:
function keyPressed() {
  if(keyCode == escape_key) {
    //Whenever the user presses escape, return to the main menu:
    state = "menu";
  }
  
  if(state == "victoryScreen_show") { 
    //The user pressed a key in the victory screen:
    
    if(keyCode == space_key) { 
      //Go to the next level:
      currentLVL++;
      vehicles = levelPreparer();
      state = "game"; 
    }
  }
  
  else if(state == "game") {
    //The user pressed a key during the game:
    
    if(keyCode == r_key) {
      //Restart the same level:
      vehicles = levelPreparer();
    }
  }
  
  else if(state == "tutorial") { 
    //The user pressed a key during the tutorial:
    tutorialOnKeyPressed();
  }
  
  else if (state == "credits") { 
    //The user pressed a key in credits: 
    
    if(keyCode == space_key) {
      //Go to Rush Hour's official website:
      window.open("https://www.thinkfun.com/products/rush-hour/");
    }
  }
}

//Every vehicle should check if they need to update after the user clicked the cell at the given column, row:
function gridPressed(column, row) { 
  for(let i = 0; i < vehicles.length; i++) {
    vehicles[i].checkClicked(column, row);
  }
}

