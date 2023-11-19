const LAST_TUTORIAL_SCREEN = 13;

//The current tutorial screen index:
let tutorialScreen;

//Draws the tutorial:
function drawTutorialState() {
  background(mainBackgroundColor);
  
  //Draw the current screen:
  switch (tutorialScreen) {
    case 1:
      //Explain the grid and the vehicles:
      drawTutorialScreen1();
      break;
      
    case 2:
      //Show the grid for the first time:
      drawTutorialScreen2();
      break;
      
    case 3:
      //Show the exit block:
      drawTutorialScreen3();
      break;
      
    case 4:
      //Explain vehicles types, and vehicles facing either vertically or horizontally:
      drawTutorialScreen4();
      break;
      
    case 5:
      //Show vehicles types, and vehicles facing either vertically or horizontally:
      drawTutorialScreen5();
      break;
      
    case 6:
      //Explain vehicles movement:
      drawTutorialScreen6();
      break;
      
    case 7:
      //Show vehicles movment:
      drawTutorialScreen7();
      break;
      
    case 8:
      //Explain the example of the previous screen:
      drawTutorialScreen8();
      break;
      
    case 9:
      //Explain targeting and moving vehicles:
      drawTutorialScreen9();
      break;
      
    case 10:
      //Show and interact targeting and moving vehicles:
      drawTutorialScreen10();
      break;
      
    case 11:
      //Explain blocking vehicles:
      drawTutorialScreen11();
      break;
      
    case 12:
      //Show moving blocking vehicles:
      drawTutorialScreen12();
      break;
      
    case 13:
      //Explain goal and levels structure:
      drawTutorialScreen13();
      break;
  }
}

//Return true IFF we are currently in an interactive tutorial screen:
function isTutorialInteractiveScreen() {
  return (state == "tutorial" && (tutorialScreen == 10 || tutorialScreen ==12));
}

//What to do if a key is pressed during the tutorial:
function tutorialOnKeyPressed() {
  if(keyCode == space_key){ 
    if(tutorialScreen != LAST_TUTORIAL_SCREEN) {
      //If the user pressed SPACE and we still have a tutorial scrren to show, transition to it:
      tutorialScreen++;
      
      if(tutorialScreen == 10 || tutorialScreen == 12) { 
        //If the screen is an interactive tutorial screen, prepare it:
        vehicles = levelPreparer();
      }
    }
    
    else {
      //If we just finished the tutorial, go to main menu:
      state = "menu";
    }
  }
}


//Explain the grid and the vehicles:
function drawTutorialScreen1() {
  //The tutorial tital:
  textSize(50);
  stroke(40, 85, 53);
  strokeWeight(5);
  fill(40, 85, 53);
  line(205, 120, 485, 115);
  noStroke();
  text("Tutorial", 260, 100);
  
  //The text:
  textSize(25);
  strokeWeight(1);
  text("The game starts with a 6 by 6 grid.", 50, 200);
  text("On the grid there are different vehicles, which you will", 50, 240);
  text("interact with during the game.", 50, 280);
  text("Lets start by looking at the grid first.", 50, 320);
  text("Press SPACE to continue", 200, 550);
  text("You can return to the menu by pressing ESCAPE", 80, 650);
}

//Show the grid for the first time:
function drawTutorialScreen2() {
  drawGrid();
  
  fill(0);
  noStroke();
  text("Press SPACE to continue", 25, 20);
}

//Show the exit block:
function drawTutorialScreen3() {
  drawGrid();
  
  //The box:
  fill(180);
  rect(200, 220, 300, 150, 5); 
  
  fill(0);
  line(500, 310, 680, 300);
  line(630, 275, 680, 300);
  line(640, 335, 680, 300);
  
  
  noStroke();
  text("Press SPACE to continue", 25, 20);
  
  //The text inside the box:
  text("This red line marks the ", 220, 270);
  text("exit of the grid", 220, 300)
  text("Remember it!", 220, 330);
}

//Explain vehicles types, and vehicles facing either vertically or horizontally:
function drawTutorialScreen4() {
  text("Now, lets look at the vehicles.", 50, 200);
  text("There are 2 types of vehicles- Cars and Trucks.", 50, 240);
  text("As you will see, cars are shorter than trucks by one cell.", 50, 280);
  text("In addition, vehicles face one of two directions:", 50, 320);
  text("- Horizontally", 50, 380);
  text("- Vertically", 50, 420);
  text("Press SPACE to continue", 200, 550);
}

//Show vehicles types, and vehicles facing either vertically or horizontally:
function drawTutorialScreen5() {
  vehicles = 
    [
      new Vehicle([6, 5], 'rgba(0, 255, 128, 1)', 2, 2),
      new Vehicle([4, 3], 'rgba(255, 255, 102, 1)', 2, 3),
      new Vehicle([1, 5], 'rgba(153, 0, 153, 1)', 1, 3),
      new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2)
    ]
  
  drawGrid();
  drawVehicles();
  
  //The boxes for the information (without the text):
  fill(180);
  
  rect(485, 80, 120, 110, 5); //Yellow vertical truck
  rect(100, 110, 120, 105, 5); //Red horizontal car
  rect(90, 590, 300, 50, 5); //Purple horizontal truck
  rect(413, 384, 120, 110, 5); //Green vertical car
  
  
  //The arrows from the text boxes to the cars:
  fill(0);
  
  //Yellow vertical truck
  line(420, 220, 485, 190); 
  line(420, 220, 426, 200);
  line(420, 220, 435, 225);
  
  //Red horizontal car
  line(210, 215, 222, 285); 
  line(222, 285, 228, 270); 
  line(222, 285, 210, 273); 
  
  //Purple horizontal truck
  line(165, 590, 195, 520); 
  line(195, 520, 181, 525); 
  line(195, 520, 202, 530);
  
  //Green vertical car:
  line(533, 420, 610, 435);
  line(610, 435, 597, 422);
  line(610, 435, 595, 443);
  
  //The text of the information:
  noStroke();
  text("Press SPACE to continue", 25, 20);
  
  //Yellow vertical truck
  text("This is a", 495, 110); 
  text("Vertical", 501, 140); 
  text("Truck", 514, 170); 
  
  //Red horizontal car
  text("This is a", 112, 140); 
  text("Horizontal", 103, 170);
  text("Car", 140, 200);
  
  //Purple horizontal truck
  text("This is a Horizontal Truck", 100, 623); 
  
  //Green vertical car
  text("This is a", 423, 413); 
  text("Vertical", 431, 443);
  text("Car", 453, 473);
}

//Explain vehicles movement:
function drawTutorialScreen6() {
  text("All the vehicles can move in the direction that", 50, 200);
  text("they are facing, so:", 50, 240);
  text("- Horizontal vehicles can move right and left.", 50, 280);
  text("- Vertical vehicles can move up and down.", 50, 310);
  text("The other restriction is that the path has to be clear.", 50, 360);
  text("Lets look at an example.", 50, 400);
  text("Press SPACE to continue", 200, 550);
}

//Show vehicles movment:
function drawTutorialScreen7() {
  vehicles = 
    [
      new Vehicle([5, 3], 'rgba(255, 255, 102, 1)', 2, 3), //yellow truck
      new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2) //red car
    ]
  
  drawGrid();
  drawVehicles();
  
  fill(0);
  noStroke();
  text("Press SPACE to continue", 25, 20);
}

//Explain the example of the previous screen:
function drawTutorialScreen8() {
  vehicles = 
    [
      new Vehicle([5, 3], 'rgba(255, 255, 102, 1)', 2, 3), //yellow truck
      new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2) //red car
    ]
  
  drawGrid();
  drawVehicles();
  
  fill(180);
  rect(150, 410, 410, 200);
  fill(0);
  
  //Left arrow
  line(290, 410, 80, 300);
  line(80, 300, 83, 320);
  line(80, 300, 98, 293);
  
  //Right arrow
  line(310, 410, 410, 300);
  line(410, 300, 393, 300);
  line(410, 300, 412, 315);
  
  noStroke();
  text("The red car is Horizontal.", 160, 440);
  text("therfore, it can only go left and right", 160, 470);
  text("You can see that the yellow truck", 160, 500);
  text("is blocking the way.", 160, 530);
  text("So, the red car can only move to", 160, 560);
  text("this two cells.", 160, 590);
  text("Press SPACE to continue", 25, 20);
}

//Explain targeting and moving vehicles:
function drawTutorialScreen9() {
  text("In order to move a vehicle you will first have to target it", 50, 200);
  text("by clicking on it. It will then begin fading in and out,", 50, 240);
  text("thus signaling that it is chosen.", 50, 280);
  text("Next, you will need to click on the cell that you wish", 50, 320);
  text("to move to. Depending on whether the move is possible", 50, 360);
  text("or not, the vehicle will move.", 50, 400);
  text("Lets test it out.", 50, 460);
  text("Press SPACE to continue", 200, 550);
}

//Show and interact targeting and moving vehicles:
function drawTutorialScreen10() {
  drawGrid();
  drawVehicles();
  
  //The box for the text:
  fill(180);
  rect(150, 200, 400, 200);
  
  //The text inside the box:
  fill(0);
  noStroke();
  text("Click on the green car to target it.", 160, 230);
  text("You can now see that it is fading.", 160, 260);
  text("Now you can click to the left / right", 160, 290);
  text("of the car to move it.", 160, 320);
  text("You can click on the car again to", 160, 350);
  text("stop targeting it. ", 160, 380);
  text("Press SPACE to continue", 25, 20);
}

//Explain blocking vehicles:
function drawTutorialScreen11() {
  text("Now, lets look at moving vehicles while other", 50, 200);
  text("vehicles are blocking the path.", 50, 230);
}

//Show moving blocking vehicles:
function drawTutorialScreen12() {
  drawGrid();
  drawVehicles();
  
  //The box for the text:
  fill(180);
  rect(40, 40, 300, 275);
  
  //The text inside the box:
  fill(0);
  noStroke();
  text("Try to move the green car.", 47, 65);
  text("As you can see, it doesnt", 50, 95);
  text("move to the right even", 49, 125);
  text("though it has enough", 50, 155);
  text("space there, becaue the", 50, 185);
  text("blue truck is blocking the", 50, 215);
  text("way. Try moving the blue", 50, 245);
  text("truck first, and then move", 50, 275);
  text("the green car.", 50, 305);
  text("Press SPACE to continue", 25, 20);
}

//Explain goal and levels structure:
function drawTutorialScreen13() {
  text("The goal of the game is to move the red car to the exit", 50, 200);
  text("The red car's path is never free so you will have to", 50, 230);
  text("figure out when and where to move each vehicle.", 50, 260);
  text("The game itself has 40 levels:", 50, 290);
  text("1-10: Beginner Levels", 50, 320);
  text("11-20: Intermediate Levels", 50, 350);
  text("21-30: Advanced Levels", 50, 380);
  text("31-40: Expert Levels", 50, 410);
  text("Good Luck!", 50, 600);
}
