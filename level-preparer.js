//Prepares the vehicles list to have all relevent vehicle of the current level.
//Also sets the state of the program to "game" if we aren't in the tutorial.
function levelPreparer() { 
  if(state == "tutorial") { 
    //Prepare the tutorial levels:
    
    if(tutorialScreen == 10) {
      return [new Vehicle([2, 5], 'rgba(0, 255, 128, 1)', 1, 2)];
    }
    
    else if(tutorialScreen == 12) {
      let lightGreenCar = new Vehicle([2, 5], 'rgba(0, 255, 128, 1)', 1, 2);
      let blueTruck = new Vehicle([4, 6], 'rgba(0, 0, 153, 1)', 2, 3);
      return [lightGreenCar, blueTruck];
    }
  }
  
  let redCar, yellowCar, purpleCar, lightBlueCar, lightGreenCar, armyGreenCar, darkGreenCar, greyCar, brownCar, orangeCar, pinkCar, yellowTruck, purpleTruck, blueTruck, greenTruck;
  
  switch (currentLVL) {
    case 1:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      yellowTruck = new Vehicle([6, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      purpleTruck = new Vehicle([1, 4], 'rgba(153, 0, 153, 1)', 1, 3);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      blueTruck = new Vehicle([4, 4], 'rgba(0, 0, 153, 1)', 2, 3);
      orangeCar = new Vehicle([1, 6], 'rgba(255, 153, 51, 1)', 2, 2);
      lightBlueCar = new Vehicle([5, 5], 'rgba(153, 204, 255, 1)', 1, 2);
      greenTruck = new Vehicle([3, 6], 'rgba(0, 255, 128, 1)', 1, 3);
      state = "game";
      return [lightGreenCar, yellowTruck, purpleTruck, redCar, blueTruck, orangeCar, lightBlueCar,         greenTruck];
      
    case 2:
      lightGreenCar = new Vehicle([1, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      yellowTruck = new Vehicle([4, 1], 'rgba(255, 255, 102, 1)', 1, 3);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      orangeCar = new Vehicle([4, 3], 'rgba(255, 153, 51, 1)', 2, 2);
      purpleTruck = new Vehicle([6, 4], 'rgba(153, 0, 153, 1)', 2, 3);
      lightBlueCar = new Vehicle([5, 4], 'rgba(153, 204, 255, 1)', 2, 2);
      blueTruck = new Vehicle([1, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      purpleCar = new Vehicle([5, 5], 'rgba(153, 0, 153, 1)', 1, 2);
      pinkCar = new Vehicle([3, 6], 'rgba(255, 153, 204, 1)', 2, 2);
      darkGreenCar = new Vehicle([1, 6], 'rgba(0, 100, 0, 1)', 1, 2);
      greyCar = new Vehicle([4, 6], 'rgba(32, 32, 32, 1)', 1, 2);
      state = "game";
      return [lightGreenCar, yellowTruck, redCar, orangeCar, purpleTruck, lightBlueCar, blueTruck, purpleCar, pinkCar, darkGreenCar, greyCar];
      
    case 3:
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      lightGreenCar = new Vehicle([2, 4], 'rgba(0, 255, 128, 1)', 1, 2);
      yellowTruck = new Vehicle([4, 5], 'rgba(255, 255, 102, 1)', 2, 3);
      orangeCar = new Vehicle([2, 6], 'rgba(255, 153, 51, 1)', 2, 2);
      lightBlueCar = new Vehicle([3, 6], 'rgba(153, 204, 255, 1)', 1, 2);
      purpleTruck = new Vehicle([6, 6], 'rgba(153, 0, 153, 1)', 2, 3);
      state = "game";
      return [redCar, lightGreenCar, yellowTruck, orangeCar, lightBlueCar, purpleTruck];
    
    case 4:
      yellowTruck = new Vehicle([1, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      purpleTruck = new Vehicle([4, 3], 'rgba(153, 0, 153, 1)', 2, 3);
      blueTruck = new Vehicle([4, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      lightGreenCar = new Vehicle([3, 5], 'rgba(0, 255, 128, 1)', 2, 2);
      greenTruck = new Vehicle([3, 6], 'rgba(0, 255, 128, 1)', 1, 3);
      orangeCar = new Vehicle([6, 6], 'rgba(255, 153, 51, 1)', 2, 2);
      state = "game";
      return [yellowTruck, redCar, purpleTruck, blueTruck, lightGreenCar, greenTruck, orangeCar];
      
    case 5:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      purpleTruck = new Vehicle([1, 4], 'rgba(153, 0, 153, 1)', 2, 3);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      yellowTruck = new Vehicle([4, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      orangeCar = new Vehicle([6, 2], 'rgba(255, 153, 51, 1)', 2, 2);
      greenTruck = new Vehicle([2, 4], 'rgba(0, 255, 128, 1)', 1, 3);
      blueTruck = new Vehicle([5, 4], 'rgba(0, 0, 153, 1)', 2, 3);
      greyCar = new Vehicle([6, 4], 'rgba(32, 32, 32, 1)', 2, 2);
      pinkCar = new Vehicle([1, 6], 'rgba(255, 153, 204, 1)', 2, 2);
      purpleCar = new Vehicle([5, 5], 'rgba(153, 0, 153, 1)', 1, 2);
      darkGreenCar = new Vehicle([5, 6], 'rgba(0, 100, 0, 1)', 1, 2);
      state = "game";
      return [lightGreenCar, purpleTruck, redCar, yellowTruck, orangeCar, greenTruck, blueTruck, greyCar, pinkCar, purpleCar, darkGreenCar];
    
    case 6:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      lightBlueCar = new Vehicle([1, 2], 'rgba(153, 204, 255, 1)', 1, 2);
      orangeCar = new Vehicle([4, 2], 'rgba(255, 153, 51, 1)', 2, 2);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      pinkCar = new Vehicle([1, 4], 'rgba(255, 153, 204, 1)', 1, 2);
      yellowTruck = new Vehicle([5, 4], 'rgba(255, 255, 102, 1)', 2, 3);
      purpleTruck = new Vehicle([6, 4], 'rgba(153, 0, 153, 1)', 2, 3);
      purpleCar = new Vehicle([3, 5], 'rgba(153, 0, 153, 1)', 2, 2);
      blueTruck = new Vehicle([4, 5], 'rgba(0, 0, 153, 1)', 2, 3);
      darkGreenCar = new Vehicle([1, 6], 'rgba(0, 100, 0, 1)', 2, 2);
      greenTruck = new Vehicle([4, 6], 'rgba(0, 255, 128, 1)', 1, 3);
      state = "game";
      return [lightGreenCar, lightBlueCar, orangeCar, redCar, pinkCar, yellowTruck, purpleTruck, purpleCar, blueTruck, darkGreenCar, greenTruck];
      
    case 7:
      orangeCar = new Vehicle([3, 1], 'rgba(255, 153, 51, 1)', 1, 2);
      lightGreenCar = new Vehicle([2, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      lightBlueCar = new Vehicle([5, 2], 'rgba(153, 204, 255, 1)', 2, 2);
      pinkCar = new Vehicle([6, 2], 'rgba(255, 153, 204, 1)', 2, 2);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      purpleCar = new Vehicle([4, 3], 'rgba(153, 0, 153, 1)', 2, 2);
      yellowCar = new Vehicle([3, 4], 'rgba(255, 255, 102, 1)', 1, 2);
      darkGreenCar = new Vehicle([6, 4], 'rgba(0, 100, 0, 1)', 2, 2);
      brownCar = new Vehicle([4, 6], 'rgba(51, 25, 0, 1)', 2, 2);
      state = "game";
      return [orangeCar, lightGreenCar, lightBlueCar, pinkCar, redCar, purpleCar, yellowCar, darkGreenCar, brownCar];
      
    case 8:
      lightGreenCar = new Vehicle([4, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      orangeCar = new Vehicle([3, 2], 'rgba(255, 153, 51, 1)', 1, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      lightBlueCar = new Vehicle([5, 3], 'rgba(153, 204, 255, 1)', 2, 2);
      yellowTruck = new Vehicle([6, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      darkGreenCar = new Vehicle([1, 4], 'rgba(0, 100, 0, 1)', 1, 2);
      pinkCar = new Vehicle([3, 4], 'rgba(255, 153, 204, 1)', 2, 2);
      purpleCar = new Vehicle([4, 4], 'rgba(153, 0, 153, 1)', 2, 2);
      greyCar = new Vehicle([5, 4], 'rgba(32, 32, 32, 1)', 1, 2);
      brownCar = new Vehicle([1, 5], 'rgba(51, 25, 0, 1)', 1, 2);
      armyGreenCar = new Vehicle([1, 6], 'rgba(51, 51, 0, 1)', 1, 2);
      yellowCar = new Vehicle([3, 6], 'rgba(255, 255, 102, 1)', 2, 2);
      purpleTruck = new Vehicle([4, 5], 'rgba(153, 0, 153, 1)', 1, 3);
      blueTruck = new Vehicle([4, 6], 'rgba(0, 0, 153, 1)', 1, 3);
      state = "game";
      return [lightGreenCar, orangeCar, redCar, lightBlueCar, yellowTruck, darkGreenCar, pinkCar, purpleCar, greyCar, brownCar, armyGreenCar, yellowCar, purpleTruck, blueTruck];
    
    case 9:
      orangeCar = new Vehicle([3, 1], 'rgba(255, 153, 51, 1)', 1, 2);
      lightBlueCar = new Vehicle([5, 1], 'rgba(153, 204, 255, 1)', 1, 2);
      lightGreenCar = new Vehicle([2, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      purpleCar = new Vehicle([5, 2], 'rgba(153, 0, 153, 1)', 1, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      pinkCar = new Vehicle([4, 3], 'rgba(255, 153, 204, 1)', 2, 2);
      blueTruck = new Vehicle([2, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      darkGreenCar = new Vehicle([6, 4], 'rgba(0, 100, 0, 1)', 2, 2);
      yellowTruck = new Vehicle([5, 5], 'rgba(255, 255, 102, 1)', 2, 3);
      purpleTruck = new Vehicle([1, 6], 'rgba(153, 0, 153, 1)', 2, 3);
      greyCar = new Vehicle([3, 6], 'rgba(32, 32, 32, 1)', 2, 2);
      brownCar = new Vehicle([6, 6], 'rgba(51, 25, 0, 1)', 2, 2);
      state = "game";
      return [orangeCar, lightBlueCar, lightGreenCar, purpleCar, redCar, pinkCar, blueTruck, darkGreenCar, yellowTruck, purpleTruck, greyCar, brownCar];
      
    case 10:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      lightBlueCar = new Vehicle([5, 1], 'rgba(153, 204, 255, 1)', 1, 2);
      pinkCar = new Vehicle([1, 2], 'rgba(255, 153, 204, 1)', 1, 2);
      orangeCar = new Vehicle([3, 2], 'rgba(255, 153, 51, 1)', 2, 2);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      blueTruck = new Vehicle([2, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      yellowTruck = new Vehicle([6, 4], 'rgba(255, 255, 102, 1)', 2, 3);
      purpleTruck = new Vehicle([1, 5], 'rgba(153, 0, 153, 1)', 2, 3);
      darkGreenCar = new Vehicle([5, 5], 'rgba(0, 100, 0, 1)', 1, 2);
      greyCar = new Vehicle([1, 6], 'rgba(32, 32, 32, 1)', 1, 2);
      purpleCar = new Vehicle([4, 6], 'rgba(153, 0, 153, 1)', 2, 2);
      brownCar = new Vehicle([5, 6], 'rgba(51, 25, 0, 1)', 1, 2);
      state = "game";
      return [lightGreenCar, lightBlueCar, pinkCar, orangeCar, redCar, blueTruck, yellowTruck, purpleTruck, darkGreenCar, greyCar, purpleCar, brownCar];
      
    case 11:
      lightGreenCar = new Vehicle([2, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      yellowTruck = new Vehicle([1, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      purpleTruck = new Vehicle([4, 3], 'rgba(153, 0, 153, 1)', 2, 3);
      blueTruck = new Vehicle([4, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      orangeCar = new Vehicle([3, 5], 'rgba(255, 153, 51, 1)', 2, 2);
      greenTruck = new Vehicle([3, 6], 'rgba(0, 255, 128, 1)', 1, 3);
      purpleCar = new Vehicle([6, 6], 'rgba(153, 0, 153, 1)', 2, 2);
      state = "game";
      return [lightGreenCar, yellowTruck, redCar, purpleTruck, blueTruck, orangeCar, greenTruck, purpleCar];
      
    case 12:
      orangeCar = new Vehicle([2, 1], 'rgba(255, 153, 51, 1)', 1, 2);
      lightGreenCar = new Vehicle([1, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      yellowTruck = new Vehicle([6, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      purpleCar = new Vehicle([3, 4], 'rgba(153, 0, 153, 1)', 2, 2);
      blueTruck = new Vehicle([4, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      greenTruck = new Vehicle([1, 6], 'rgba(0, 255, 128, 1)', 1, 3);
      lightBlueCar = new Vehicle([5, 6], 'rgba(153, 204, 255, 1)', 2, 2);
      state = "game";
      return [orangeCar, lightGreenCar, redCar, yellowTruck, purpleCar, blueTruck, greenTruck, lightBlueCar];
      
    case 13:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      orangeCar = new Vehicle([3, 1], 'rgba(255, 153, 51, 1)', 1, 2);
      lightBlueCar = new Vehicle([5, 2], 'rgba(153, 204, 255, 1)', 2, 2);
      pinkCar = new Vehicle([3, 3], 'rgba(255, 153, 204, 1)', 2, 2);
      redCar = new Vehicle([4, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      purpleCar = new Vehicle([2, 4], 'rgba(153, 0, 153, 1)', 2, 2);
      darkGreenCar = new Vehicle([4, 4], 'rgba(0, 100, 0, 1)', 1, 2);
      yellowTruck = new Vehicle([6, 4], 'rgba(255, 255, 102, 1)', 2, 3);
      brownCar = new Vehicle([5, 5], 'rgba(51, 25, 0, 1)', 1, 2);
      purpleTruck = new Vehicle([1, 6], 'rgba(153, 0, 153, 1)', 2, 3);
      yellowCar = new Vehicle([2, 6], 'rgba(255, 255, 102, 1)', 1, 2);
      greyCar = new Vehicle([4, 6], 'rgba(32, 32, 32, 1)', 2, 2);
      armyGreenCar = new Vehicle([5, 6], 'rgba(51, 51, 0, 1)', 1, 2);
      state = "game";
      return [lightGreenCar, orangeCar, lightBlueCar, pinkCar, redCar, purpleCar, darkGreenCar, yellowTruck, brownCar, purpleTruck, yellowCar, greyCar, armyGreenCar];
    
    case 14:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      orangeCar = new Vehicle([3, 2], 'rgba(255, 153, 51, 1)', 2, 2);
      lightBlueCar = new Vehicle([5, 2], 'rgba(153, 204, 255, 1)', 1, 2);
      redCar = new Vehicle([3, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      pinkCar = new Vehicle([1, 4], 'rgba(255, 153, 204, 1)', 2, 2);
      purpleCar = new Vehicle([2, 4], 'rgba(153, 0, 153, 1)', 2, 2);
      darkBlueCar = new Vehicle([3, 4], 'rgba(0, 0, 153, 1)', 1, 2);
      darkGreenCar = new Vehicle([5, 4], 'rgba(0, 100, 0, 1)', 2, 2);
      greyCar = new Vehicle([6, 4], 'rgba(32, 32, 32, 1)', 2, 2);
      brownCar = new Vehicle([5, 5], 'rgba(51, 25, 0, 1)', 1, 2);
      armyGreenCar = new Vehicle([1, 6], 'rgba(51, 51, 0, 1)', 1, 2);
      yellowCar = new Vehicle([3, 6], 'rgba(255, 255, 102, 1)', 2, 2);
      state = "game";
      return [lightGreenCar, orangeCar, lightBlueCar, redCar, pinkCar, purpleCar, darkBlueCar, darkGreenCar, greyCar, brownCar, armyGreenCar, yellowCar];
      
    case 15:
      lightGreenCar = new Vehicle([2, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      orangeCar = new Vehicle([4, 1], 'rgba(255, 153, 51, 1)', 1, 2);
      lightBlueCar = new Vehicle([1, 2], 'rgba(153, 204, 255, 1)', 1, 2);
      pinkCar = new Vehicle([3, 2], 'rgba(255, 153, 204, 1)', 1, 2);
      redCar = new Vehicle([3, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      yellowTruck = new Vehicle([5, 4], 'rgba(255, 255, 102, 1)', 2, 3);
      purpleTruck = new Vehicle([6, 4], 'rgba(153, 0, 153, 1)', 2, 3);
      blueTruck = new Vehicle([1, 5], 'rgba(0, 0, 153, 1)', 2, 3);
      greenTruck = new Vehicle([2, 5], 'rgba(0, 255, 128, 1)', 2, 3);
      purpleCar = new Vehicle([3, 5], 'rgba(153, 0, 153, 1)', 2, 2);
      darkGreenCar = new Vehicle([4, 5], 'rgba(0, 100, 0, 1)', 2, 2);
      greyCar = new Vehicle([5, 5], 'rgba(32, 32, 32, 1)', 1, 2);
      brownCar = new Vehicle([2, 6], 'rgba(51, 25, 0, 1)', 1, 2);
      yellowCar = new Vehicle([4, 6], 'rgba(255, 255, 102, 1)', 1, 2);
      state = "game";
      return [lightGreenCar, orangeCar, lightBlueCar, pinkCar, redCar, yellowTruck, purpleTruck, blueTruck, greenTruck, purpleCar, darkGreenCar, greyCar, brownCar, yellowCar];
      
    case 16:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      orangeCar = new Vehicle([3, 1], 'rgba(255, 153, 51, 1)', 1, 2);
      purpleCar = new Vehicle([3, 2], 'rgba(153, 0, 153, 1)', 1, 2);
      lightBlueCar = new Vehicle([5, 2], 'rgba(153, 204, 255, 1)', 2, 2);
      pinkCar = new Vehicle([1, 3], 'rgba(255, 153, 204, 1)', 2, 2);
      redCar = new Vehicle([4, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      yellowTruck = new Vehicle([6, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      darkGreenCar = new Vehicle([2, 4], 'rgba(0, 100, 0, 1)', 2, 2);
      blueTruck = new Vehicle([4, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      purpleTruck = new Vehicle([3, 5], 'rgba(153, 0, 153, 1)', 2, 3);
      greyCar = new Vehicle([1, 6], 'rgba(32, 32, 32, 1)', 1, 2);
      state = "game";
      return [lightGreenCar, orangeCar, purpleCar, lightBlueCar, pinkCar, redCar, yellowTruck, darkGreenCar, blueTruck, purpleTruck, greyCar];
      
    case 17:
      yellowTruck = new Vehicle([2, 1], 'rgba(255, 255, 102, 1)', 1, 3);
      lightGreenCar = new Vehicle([1, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      orangeCar = new Vehicle([3, 2], 'rgba(255, 153, 51, 1)', 1, 2);
      lightBlueCar = new Vehicle([5, 2], 'rgba(153, 204, 255, 1)', 1, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      purpleCar = new Vehicle([1, 4], 'rgba(153, 0, 153, 1)', 1, 2);
      pinkCar = new Vehicle([3, 4], 'rgba(255, 153, 204, 1)', 2, 2);
      blueTruck = new Vehicle([1, 5], 'rgba(0, 0, 153, 1)', 1, 3);
      greenTruck = new Vehicle([1, 6], 'rgba(0, 255, 128, 1)', 1, 3);
      purpleTruck = new Vehicle([4, 6], 'rgba(153, 0, 153, 1)', 2, 3);
      darkGreenCar = new Vehicle([5, 6], 'rgba(0, 100, 0, 1)', 2, 2);
      greyCar = new Vehicle([6, 6], 'rgba(32, 32, 32, 1)', 2, 2);
      state = "game";
      return [yellowTruck, lightGreenCar, orangeCar, lightBlueCar, redCar, purpleCar, pinkCar, blueTruck, greenTruck, purpleTruck, darkGreenCar, greyCar];
      
    case 18:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      lightBlueCar = new Vehicle([1, 2], 'rgba(153, 204, 255, 1)', 1, 2);
      orangeCar = new Vehicle([3, 2], 'rgba(255, 153, 51, 1)', 2, 2);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      yellowTruck = new Vehicle([4, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      blueTruck = new Vehicle([2, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      purpleTruck = new Vehicle([1, 5], 'rgba(153, 0, 153, 1)', 2, 3);
      pinkCar = new Vehicle([2, 5], 'rgba(255, 153, 204, 1)', 1, 2);
      greenTruck = new Vehicle([1, 6], 'rgba(0, 255, 128, 1)', 1, 3);
      state = "game";
      return [lightGreenCar, lightBlueCar, orangeCar, redCar, yellowTruck, blueTruck, purpleTruck, pinkCar, greenTruck];
    
    case 19:
      orangeCar = new Vehicle([4, 1], 'rgba(255, 153, 51, 1)', 1, 2);
      lightGreenCar = new Vehicle([3, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      redCar = new Vehicle([3, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      brownCar = new Vehicle([5, 3], 'rgba(51, 25, 0, 1)', 2, 2);
      pinkCar = new Vehicle([2, 4], 'rgba(255, 153, 204, 1)', 2, 2);
      purpleCar = new Vehicle([3, 4], 'rgba(153, 0, 153, 1)', 1, 2);
      yellowTruck = new Vehicle([2, 5], 'rgba(255, 255, 102, 1)', 1, 3);
      darkGreenCar = new Vehicle([5, 5], 'rgba(0, 100, 0, 1)', 2, 2);
      state = "game";
      return [orangeCar, lightGreenCar, redCar, brownCar, pinkCar, purpleCar, yellowTruck, darkGreenCar];
      
    case 20:
      yellowTruck = new Vehicle([4, 1], 'rgba(255, 255, 102, 1)', 1, 3);
      lightGreenCar = new Vehicle([1, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      orangeCar = new Vehicle([2, 2], 'rgba(255, 153, 51, 1)', 1, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      lightBlueCar = new Vehicle([4, 3], 'rgba(153, 204, 255, 1)', 2, 2);
      pinkCar = new Vehicle([3, 4], 'rgba(255, 153, 204, 1)', 2, 2);
      darkGreenCar = new Vehicle([4, 5], 'rgba(0, 100, 0, 1)', 1, 2);
      purpleTruck = new Vehicle([6, 5], 'rgba(153, 0, 153, 1)', 2, 3);
      purpleCar = new Vehicle([3, 6], 'rgba(153, 0, 153, 1)', 2, 2);
      blueTruck = new Vehicle([4, 6], 'rgba(0, 0, 153, 1)', 1, 3);
      state = "game";
      return [yellowTruck, lightGreenCar, orangeCar, redCar, lightBlueCar, pinkCar, darkGreenCar, purpleTruck, purpleCar, blueTruck];
      
    case 21:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      orangeCar = new Vehicle([3, 2], 'rgba(255, 153, 51, 1)', 2, 2);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      yellowTruck = new Vehicle([4, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      purpleTruck = new Vehicle([1, 4], 'rgba(153, 0, 153, 1)', 2, 3);
      blueTruck = new Vehicle([2, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      greenTruck = new Vehicle([4, 6], 'rgba(0, 255, 128, 1)', 1, 3);
      state = "game";
      return [lightGreenCar, orangeCar, redCar, yellowTruck, purpleTruck, blueTruck, greenTruck];
      
    case 22:
      yellowTruck = new Vehicle([4, 1], 'rgba(255, 255, 102, 1)', 1, 3);
      lightGreenCar = new Vehicle([3, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      lightBlueCar = new Vehicle([5, 2], 'rgba(153, 204, 255, 1)', 1, 2);
      orangeCar = new Vehicle([1, 3], 'rgba(255, 153, 51, 1)', 2, 2);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      purpleTruck = new Vehicle([4, 4], 'rgba(153, 0, 153, 1)', 2, 3);
      purpleCar = new Vehicle([5, 4], 'rgba(153, 0, 153, 1)', 1, 2);
      pinkCar = new Vehicle([2, 5], 'rgba(255, 153, 204, 1)', 2, 2);
      greyCar = new Vehicle([3, 5], 'rgba(32, 32, 32, 1)', 1, 2);
      darkGreenCar = new Vehicle([1, 6], 'rgba(0, 100, 0, 1)', 2, 2);
      blueTruck = new Vehicle([2, 6], 'rgba(0, 0, 153, 1)', 1, 3);
      brownCar = new Vehicle([6, 6], 'rgba(51, 25, 0, 1)', 2, 2);
      state = "game";
      return [yellowTruck, lightGreenCar, lightBlueCar, orangeCar, redCar, purpleTruck, purpleCar, pinkCar, greyCar, darkGreenCar, blueTruck, brownCar];
      
    case 23:
      yellowTruck = new Vehicle([3, 1], 'rgba(255, 255, 102, 1)', 1, 3);
      orangeCar = new Vehicle([4, 2], 'rgba(255, 153, 51, 1)', 1, 2);
      lightGreenCar = new Vehicle([3, 3], 'rgba(0, 255, 128, 1)', 2, 2);
      redCar = new Vehicle([4, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      purpleTruck = new Vehicle([6, 3], 'rgba(153, 0, 153, 1)', 2, 3);
      purpleCar = new Vehicle([5, 4], 'rgba(153, 0, 153, 1)', 1, 2);
      lightBlueCar = new Vehicle([3, 5], 'rgba(153, 204, 255, 1)', 2, 2);
      pinkCar = new Vehicle([4, 5], 'rgba(255, 153, 204, 1)', 2, 2);
      darkGreenCar = new Vehicle([5, 5], 'rgba(0, 100, 0, 1)', 1, 2);
      blueTruck = new Vehicle([3, 6], 'rgba(0, 0, 153, 1)', 1, 3);
      state = "game";
      return [yellowTruck, orangeCar, lightGreenCar, redCar, purpleTruck, purpleCar, lightBlueCar, pinkCar, darkGreenCar, blueTruck];
    
    case 24:
      orangeCar = new Vehicle([4, 1], 'rgba(255, 153, 51, 1)', 1, 2);
      lightGreenCar = new Vehicle([3, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      lightBlueCar = new Vehicle([2, 3], 'rgba(153, 204, 255, 1)', 2, 2);
      redCar = new Vehicle([3, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      pinkCar = new Vehicle([1, 4], 'rgba(255, 153, 204, 1)', 2, 2);
      darkGreenCar = new Vehicle([2, 4], 'rgba(0, 100, 0, 1)', 1, 2);
      purpleCar = new Vehicle([5, 4], 'rgba(153, 0, 153, 1)', 2, 2);
      yellowTruck = new Vehicle([1, 5], 'rgba(255, 255, 102, 1)', 1, 3);
      brownCar = new Vehicle([1, 6], 'rgba(51, 25, 0, 1)', 1, 2);
      greyCar = new Vehicle([5, 6], 'rgba(32, 32, 32, 1)', 2, 2);
      state = "game";
      return [orangeCar, lightGreenCar, lightBlueCar, redCar, pinkCar, darkGreenCar, purpleCar, yellowTruck ,brownCar, greyCar];
      
    case 25:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      lightBlueCar = new Vehicle([5, 1], 'rgba(153, 204, 255, 1)', 1, 2);
      pinkCar = new Vehicle([1, 2], 'rgba(255, 153, 204, 1)', 1, 2);
      orangeCar = new Vehicle([3, 2], 'rgba(255, 153, 51, 1)', 2, 2);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      blueTruck = new Vehicle([2, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      purpleCar = new Vehicle([5, 4], 'rgba(153, 0, 153, 1)', 2, 2);
      yellowTruck = new Vehicle([6, 4], 'rgba(255, 255, 102, 1)', 2, 3);
      purpleTruck = new Vehicle([1, 5], 'rgba(153, 0, 153, 1)', 2, 3);
      brownCar = new Vehicle([5, 5], 'rgba(51, 25, 0, 1)', 1, 2);
      darkGreenCar = new Vehicle([2, 6], 'rgba(0, 100, 0, 1)', 2, 2);
      greyCar = new Vehicle([4, 6], 'rgba(32, 32, 32, 1)', 2, 2);
      yellowCar = new Vehicle([5, 6], 'rgba(255, 255, 102, 1)', 1, 2);
      state = "game";
      return [lightGreenCar, lightBlueCar, pinkCar, orangeCar, redCar, blueTruck, purpleCar, yellowTruck, purpleTruck, brownCar, darkGreenCar, greyCar, yellowCar];
      
    case 26:
      yellowTruck = new Vehicle([4, 1], 'rgba(255, 255, 102, 1)', 1, 3);
      lightGreenCar = new Vehicle([2, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      orangeCar = new Vehicle([1, 3], 'rgba(255, 153, 51, 1)', 2, 2);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      lightBlueCar = new Vehicle([4, 3], 'rgba(153, 204, 255, 1)', 2, 2);
      greenTruck = new Vehicle([2, 4], 'rgba(0, 255, 128, 1)', 1, 3);
      purpleTruck = new Vehicle([5, 4], 'rgba(153, 0, 153, 1)', 2, 3);
      pinkCar = new Vehicle([6, 4], 'rgba(255, 153, 204, 1)', 2, 2);
      purpleCar = new Vehicle([1, 5], 'rgba(153, 0, 153, 1)', 2, 2);
      darkGreenCar = new Vehicle([3, 6], 'rgba(0, 100, 0, 1)', 2, 2);
      brownCar = new Vehicle([4, 6], 'rgba(51, 25, 0, 1)', 1, 2);
      greyCar = new Vehicle([6, 6], 'rgba(32, 32, 32, 1)', 2, 2);
      state = "game";
      return [yellowTruck, lightGreenCar, orangeCar, redCar, lightBlueCar, greenTruck, purpleTruck, pinkCar, purpleCar, darkGreenCar, brownCar, greyCar];
      
    case 27:
      orangeCar = new Vehicle([2, 1], 'rgba(255, 153, 51, 1)', 1, 2);
      lightGreenCar = new Vehicle([1, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      lightBlueCar = new Vehicle([2, 2], 'rgba(153, 204, 255, 1)', 1, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      yellowTruck = new Vehicle([4, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      pinkCar = new Vehicle([3, 4], 'rgba(255, 153, 204, 1)', 2, 2);
      purpleCar = new Vehicle([4, 4], 'rgba(153, 0, 153, 1)', 1, 2);
      purpleTruck = new Vehicle([6, 5], 'rgba(153, 0, 153, 1)', 2, 3);
      darkGreenCar = new Vehicle([3, 6], 'rgba(0, 100, 0, 1)', 2, 2);
      greenTruck = new Vehicle([4, 6], 'rgba(0, 255, 128, 1)', 1, 3);
      state = "game";
      return [orangeCar, lightGreenCar, lightBlueCar, redCar, yellowTruck, pinkCar, purpleCar, purpleTruck, darkGreenCar, greenTruck];
      
    case 28:
      yellowTruck = new Vehicle([1, 1], 'rgba(255, 255, 102, 1)', 1, 3);
      lightGreenCar = new Vehicle([4, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      orangeCar = new Vehicle([5, 2], 'rgba(255, 153, 51, 1)', 1, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      purpleTruck = new Vehicle([3, 4], 'rgba(153, 0, 153, 1)', 2, 3);
      purpleCar = new Vehicle([4, 4], 'rgba(153, 0, 153, 1)', 1, 2);
      lightBlueCar = new Vehicle([1, 5], 'rgba(153, 204, 255, 1)', 2, 2);
      pinkCar = new Vehicle([2, 5], 'rgba(255, 153, 204, 1)', 2, 2);
      greenTruck = new Vehicle([3, 5], 'rgba(0, 255, 128, 1)', 1, 3);
      darkGreenCar = new Vehicle([1, 6], 'rgba(0, 100, 0, 1)', 1, 2);
      greyCar = new Vehicle([3, 6], 'rgba(32, 32, 32, 1)', 1, 2);
      blueTruck = new Vehicle([6, 6], 'rgba(0, 0, 153, 1)', 2, 3);
      state = "game";
      return [yellowTruck, lightGreenCar, orangeCar, redCar, purpleTruck, purpleCar, lightBlueCar, pinkCar, greenTruck, darkGreenCar, greyCar, blueTruck];
    
    case 29:
      yellowTruck = new Vehicle([1, 1], 'rgba(255, 255, 102, 1)', 1, 3);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      lightGreenCar = new Vehicle([3, 3], 'rgba(0, 255, 128, 1)', 2, 2);
      purpleTruck = new Vehicle([5, 3], 'rgba(153, 0, 153, 1)', 2, 3);
      pinkCar = new Vehicle([2, 4], 'rgba(255, 153, 204, 1)', 1, 2);
      purpleCar = new Vehicle([4, 4], 'rgba(153, 0, 153, 1)', 1, 2);
      orangeCar = new Vehicle([6, 4], 'rgba(255, 153, 51, 1)', 2, 2);
      lightBlueCar = new Vehicle([1, 5], 'rgba(153, 204, 255, 1)', 2, 2);
      darkGreenCar = new Vehicle([2, 5], 'rgba(0, 100, 0, 1)', 1, 2);
      greenTruck = new Vehicle([1, 6], 'rgba(0, 255, 128, 1)', 1, 3);
      greyCar = new Vehicle([4, 6], 'rgba(32, 32, 32, 1)', 2, 2);
      brownCar = new Vehicle([6, 6], 'rgba(51, 25, 0, 1)', 2, 2);
      state = "game";
      return [yellowTruck, redCar, lightGreenCar, purpleTruck, pinkCar, purpleCar, orangeCar, lightBlueCar, darkGreenCar, greenTruck, greyCar, brownCar];
      
    case 30:
      purpleTruck = new Vehicle([4, 1], 'rgba(153, 0, 153, 1)', 1, 3);
      lightGreenCar = new Vehicle([3, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      yellowTruck = new Vehicle([1, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      orangeCar = new Vehicle([4, 3], 'rgba(255, 153, 51, 1)', 2, 2);
      lightBlueCar = new Vehicle([1, 4], 'rgba(153, 204, 255, 1)', 1, 2);
      pinkCar = new Vehicle([3, 4], 'rgba(255, 153, 204, 1)', 1, 2);
      purpleCar = new Vehicle([1, 6], 'rgba(153, 0, 153, 1)', 1, 2);
      darkGreenCar = new Vehicle([3, 6], 'rgba(0, 100, 0, 1)', 1, 2);
      blueTruck = new Vehicle([6, 6], 'rgba(0, 0, 153, 1)', 2, 3);
      state = "game";
      return [purpleTruck, lightGreenCar, yellowTruck, redCar, orangeCar, lightBlueCar, pinkCar, purpleCar, darkGreenCar, blueTruck];
      
    case 31:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      yellowTruck = new Vehicle([4, 1], 'rgba(255, 255, 102, 1)', 1, 3);
      lightBlueCar = new Vehicle([5, 2], 'rgba(153, 204, 255, 1)', 1, 2);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      orangeCar = new Vehicle([4, 3], 'rgba(255, 153, 51, 1)', 2, 2);
      pinkCar = new Vehicle([1, 4], 'rgba(255, 153, 204, 1)', 2, 2);
      purpleCar = new Vehicle([4, 4], 'rgba(153, 0, 153, 1)', 1, 2);
      darkGreenCar = new Vehicle([1, 5], 'rgba(0, 100, 0, 1)', 1, 2);
      purpleTruck = new Vehicle([6, 5], 'rgba(153, 0, 153, 1)', 2, 3);
      blueTruck = new Vehicle([3, 6], 'rgba(0, 0, 153, 1)', 2, 3);
      greenTruck = new Vehicle([4, 6], 'rgba(0, 255, 128, 1)', 1, 3);
      state = "game";
      return [lightGreenCar, yellowTruck, lightBlueCar, redCar, orangeCar, pinkCar, purpleCar, darkGreenCar, purpleTruck, blueTruck, greenTruck];
      
    case 32:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      lightBlueCar = new Vehicle([5, 1], 'rgba(153, 204, 255, 1)', 1, 2);
      orangeCar = new Vehicle([4, 2], 'rgba(255, 153, 51, 1)', 2, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      yellowTruck = new Vehicle([3, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      purpleCar = new Vehicle([2, 4], 'rgba(153, 0, 153, 1)', 1, 2);
      darkGreenCar = new Vehicle([4, 4], 'rgba(0, 100, 0, 1)', 1, 2);
      pinkCar = new Vehicle([1, 5], 'rgba(255, 153, 204, 1)', 2, 2);
      brownCar = new Vehicle([1, 6], 'rgba(51, 25, 0, 1)', 1, 2);
      armyGreenCar = new Vehicle([4, 6], 'rgba(51, 51, 0, 1)', 2, 2);
      purpleTruck = new Vehicle([6, 6], 'rgba(153, 0, 153, 1)', 2, 3);
      state = "game";
      return [lightGreenCar, lightBlueCar, orangeCar, redCar, yellowTruck, purpleCar, darkGreenCar, pinkCar, brownCar, armyGreenCar, purpleTruck];
      
    case 33:
      orangeCar = new Vehicle([5, 1], 'rgba(255, 153, 51, 1)', 1, 2);
      lightGreenCar = new Vehicle([2, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      greenTruck = new Vehicle([3, 3], 'rgba(0, 255, 128, 1)', 2, 3);
      pinkCar = new Vehicle([2, 4], 'rgba(255, 153, 204, 1)', 1, 2);
      purpleCar = new Vehicle([4, 4], 'rgba(153, 0, 153, 1)', 1, 2);
      yellowCar = new Vehicle([1, 5], 'rgba(255, 255, 102, 1)', 2, 2);
      darkGreenCar = new Vehicle([2, 5], 'rgba(0, 100, 0, 1)', 1, 2);
      blueTruck = new Vehicle([1, 6], 'rgba(0, 0, 153, 1)', 1, 3);
      greyCar = new Vehicle([4, 6], 'rgba(32, 32, 32, 1)', 2, 2);
      brownCar = new Vehicle([5, 6], 'rgba(51, 25, 0, 1)', 2, 2);
      purpleTruck = new Vehicle([6, 6], 'rgba(153, 0, 153, 1)', 2, 3);
      state = "game";
      return [orangeCar, lightGreenCar, redCar, greenTruck, pinkCar, purpleCar, yellowCar, darkGreenCar, blueTruck, greyCar, brownCar, purpleTruck];
    
    case 34:
      greenTruck = new Vehicle([4, 1], 'rgba(0, 255, 128, 1)', 1, 3);
      lightGreenCar = new Vehicle([1, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      orangeCar = new Vehicle([4, 3], 'rgba(255, 153, 51, 1)', 2, 2);
      blueTruck = new Vehicle([1, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      lightBlueCar = new Vehicle([5, 4], 'rgba(153, 204, 255, 1)', 2, 2);
      purpleTruck = new Vehicle([6, 4], 'rgba(153, 0, 153, 1)', 2, 3);
      pinkCar = new Vehicle([4, 5], 'rgba(255, 153, 204, 1)', 2, 2);
      darkGreenCar = new Vehicle([5, 5], 'rgba(0, 100, 0, 1)', 1, 2);
      yellowCar = new Vehicle([1, 6], 'rgba(255, 255, 102, 1)', 1, 2);
      purpleCar = new Vehicle([3, 6], 'rgba(153, 0, 153, 1)', 2, 2);
      brownCar = new Vehicle([4, 6], 'rgba(51, 25, 0, 1)', 1, 2);
      state = "game";
      return [greenTruck, lightGreenCar, redCar, orangeCar, blueTruck, lightBlueCar, purpleTruck, pinkCar, darkGreenCar, yellowCar, purpleCar, brownCar];
      
    case 35:
      lightGreenCar = new Vehicle([4, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      yellowTruck = new Vehicle([3, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      orangeCar = new Vehicle([4, 3], 'rgba(255, 153, 51, 1)', 2, 2);
      purpleTruck = new Vehicle([6, 3], 'rgba(153, 0, 153, 1)', 2, 3);
      blueTruck = new Vehicle([2, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      armyGreenCar = new Vehicle([1, 5], 'rgba(51, 51, 0, 1)', 2, 2);
      pinkCar = new Vehicle([2, 5], 'rgba(255, 153, 204, 1)', 1, 2);
      greyCar = new Vehicle([1, 6], 'rgba(32, 32, 32, 1)', 1, 2);
      purpleCar = new Vehicle([4, 6], 'rgba(153, 0, 153, 1)', 2, 2);
      darkGreenCar = new Vehicle([5, 6], 'rgba(0, 100, 0, 1)', 2, 2);
      state = "game";
      return [lightGreenCar, redCar, yellowTruck, orangeCar, purpleTruck, blueTruck, armyGreenCar, pinkCar, greyCar, purpleCar, darkGreenCar];
      
    case 36:
      purpleTruck = new Vehicle([2, 1], 'rgba(153, 0, 153, 1)', 1, 3);
      lightGreenCar = new Vehicle([5, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      lightBlueCar = new Vehicle([3, 2], 'rgba(153, 204, 255, 1)', 1, 2);
      yellowTruck = new Vehicle([1, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      orangeCar = new Vehicle([2, 3], 'rgba(255, 153, 51, 1)', 2, 2);
      redCar = new Vehicle([3, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      greenTruck = new Vehicle([1, 4], 'rgba(0, 255, 128, 1)', 1, 3);
      blueTruck = new Vehicle([6, 4], 'rgba(0, 0, 153, 1)', 2, 3);
      pinkCar = new Vehicle([4, 5], 'rgba(255, 153, 204, 1)', 2, 2);
      darkGreenCar = new Vehicle([5, 5], 'rgba(0, 100, 0, 1)', 1, 2);
      greyCar = new Vehicle([1, 6], 'rgba(32, 32, 32, 1)', 1, 2);
      purpleCar = new Vehicle([3, 6], 'rgba(153, 0, 153, 1)', 2, 2);
      state = "game";
      return [purpleTruck, lightGreenCar, lightBlueCar, yellowTruck, orangeCar, redCar, greenTruck, blueTruck, pinkCar, darkGreenCar, greyCar, purpleCar];
      
    case 37:
      lightGreenCar = new Vehicle([1, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      lightBlueCar = new Vehicle([5, 1], 'rgba(153, 204, 255, 1)', 1, 2);
      pinkCar = new Vehicle([1, 2], 'rgba(255, 153, 204, 1)', 1, 2);
      orangeCar = new Vehicle([3, 2], 'rgba(255, 153, 51, 1)', 2, 2);
      redCar = new Vehicle([2, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      greenTruck = new Vehicle([2, 4], 'rgba(0, 255, 128, 1)', 1, 3);
      yellowTruck = new Vehicle([5, 4], 'rgba(255, 255, 102, 1)', 2, 3);
      purpleTruck = new Vehicle([6, 4], 'rgba(153, 0, 153, 1)', 2, 3);
      blueTruck = new Vehicle([1, 5], 'rgba(0, 0, 153, 1)', 2, 3);
      darkGreenCar = new Vehicle([5, 5], 'rgba(0, 100, 0, 1)', 1, 2);
      greyCar = new Vehicle([1, 6], 'rgba(32, 32, 32, 1)', 1, 2);
      purpleCar = new Vehicle([4, 6], 'rgba(153, 0, 153, 1)', 2, 2);
      brownCar = new Vehicle([5, 6], 'rgba(51, 25, 0, 1)', 1, 2);
      state = "game";
      return [lightGreenCar, lightBlueCar, pinkCar, orangeCar, redCar, greenTruck, yellowTruck, purpleTruck, blueTruck, darkGreenCar, greyCar, purpleCar, brownCar];
      
    case 38:
      yellowTruck = new Vehicle([4, 1], 'rgba(255, 255, 102, 1)', 1, 3);
      lightGreenCar = new Vehicle([1, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      orangeCar = new Vehicle([2, 2], 'rgba(255, 153, 51, 1)', 1, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      lightBlueCar = new Vehicle([4, 3], 'rgba(153, 204, 255, 1)', 2, 2);
      pinkCar = new Vehicle([3, 4], 'rgba(255, 153, 204, 1)', 2, 2);
      purpleCar = new Vehicle([4, 4], 'rgba(153, 0, 153, 1)', 1, 2);
      greyCar = new Vehicle([4, 5], 'rgba(32, 32, 32, 1)', 1, 2);
      greenTruck = new Vehicle([6, 5], 'rgba(0, 255, 128, 1)', 2, 3);
      darkGreenCar = new Vehicle([3, 6], 'rgba(0, 100, 0, 1)', 2, 2);
      blueTruck = new Vehicle([4, 6], 'rgba(0, 0, 153, 1)', 1, 3);
      state = "game";
      return [yellowTruck, lightGreenCar, orangeCar, redCar, lightBlueCar, pinkCar, purpleCar, greyCar, greenTruck, darkGreenCar, blueTruck];
    
    case 39:
      yellowTruck = new Vehicle([4, 1], 'rgba(255, 255, 102, 1)', 1, 3);
      lightGreenCar = new Vehicle([3, 2], 'rgba(0, 255, 128, 1)', 2, 2);
      redCar = new Vehicle([1, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      orangeCar = new Vehicle([4, 3], 'rgba(255, 153, 51, 1)', 2, 2);
      pinkCar = new Vehicle([1, 4], 'rgba(255, 153, 204, 1)', 1, 2);
      lightBlueCar = new Vehicle([3, 4], 'rgba(153, 204, 255, 1)', 2, 2);
      purpleCar = new Vehicle([4, 4], 'rgba(153, 0, 153, 1)', 1, 2);
      brownCar = new Vehicle([3, 5], 'rgba(51, 25, 0, 1)', 1, 2);
      greenTruck = new Vehicle([6, 5], 'rgba(0, 255, 128, 1)', 2, 3);
      darkGreenCar = new Vehicle([1, 6], 'rgba(0, 100, 0, 1)', 2, 2);
      greyCar = new Vehicle([2, 6], 'rgba(32, 32, 32, 1)', 2, 2);
      yellowCar = new Vehicle([3, 6], 'rgba(255, 255, 102, 1)', 1, 2);
      state = "game";
      return [yellowTruck, lightGreenCar, redCar, orangeCar, pinkCar, lightBlueCar, purpleCar, brownCar, greenTruck, darkGreenCar, greyCar, yellowCar];
      
    case 40:
      lightGreenCar = new Vehicle([2, 1], 'rgba(0, 255, 128, 1)', 1, 2);
      orangeCar = new Vehicle([5, 2], 'rgba(255, 153, 51, 1)', 2, 2);
      yellowTruck = new Vehicle([1, 3], 'rgba(255, 255, 102, 1)', 2, 3);
      lightBlueCar = new Vehicle([2, 3], 'rgba(153, 204, 255, 1)', 2, 2);
      pinkCar = new Vehicle([3, 3], 'rgba(255, 153, 204, 1)', 2, 2);
      redCar = new Vehicle([4, 3], 'rgba(255, 0, 0, 1)', 1, 2);
      blueTruck = new Vehicle([1, 4], 'rgba(0, 0, 153, 1)', 1, 3);
      purpleTruck = new Vehicle([6, 4], 'rgba(153, 0, 153, 1)', 2, 3);
      purpleCar = new Vehicle([4, 5], 'rgba(153, 0, 153, 1)', 2, 2);
      greyCar = new Vehicle([5, 5], 'rgba(32, 32, 32, 1)', 1, 2);
      brownCar = new Vehicle([1, 6], 'rgba(51, 25, 0, 1)', 1, 2);
      darkGreenCar = new Vehicle([3, 6], 'rgba(0, 100, 0, 1)', 2, 2);
      yellowCar = new Vehicle([4, 6], 'rgba(255, 255, 102, 1)', 1, 2);
      state = "game";
      return [lightGreenCar, orangeCar, yellowTruck, lightBlueCar, pinkCar, redCar, blueTruck, purpleTruck, purpleCar, greyCar, brownCar, darkGreenCar, yellowCar];
  }
}