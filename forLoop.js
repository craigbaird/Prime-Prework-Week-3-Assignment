function shoesOnTheBus( kidsOnTheBus ){
  // this function accepts the number of kids on the bus
  // assume each kid on the bus is wearing 2 shoes
  // write a for loop that counts how many shoes are on the bus
  // this function should return the number of shoes on the bus

var shoes = 0;
  for (var kids = 1;  kids <= kidsOnTheBus; kids++) {
    shoes = shoes + 2;
  }
  return shoes;
  //console.log(shoes);
}
shoesOnTheBus(50);
