function isCartonFull( eggsInCarton, cartonCapacity ){

  // write an if statement checks if the carton is at cartonCapacity
  // this function should return true if so, false if not
  if (eggsInCarton >= cartonCapacity){
    return true;
    //console.log("true");
  }
  else {
    return false;
    //console.log("false");
  }
}
// end checkIfCartonIsFull
isCartonFull(11,10);
