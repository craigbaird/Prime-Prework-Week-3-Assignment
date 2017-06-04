var myArray = [1,2,3,4,5,6,7,8,9,10];
var myEvensArray = [];

function onlyEvens(array) {
  // complete this function so that given an array full of
  // numbers, it returns a new array containing only the even ones
  // for example `onlyEvens([1,2,3,4]) === [2,4]`
  for (var i = 0; i<= myArray.length; i++) {
    if (myArray[i] % 2 === 0){
      myEvensArray.push(myArray[i]);
    }
  }
  return (myEvensArray);
  //console.log(myEvensArray);
}
onlyEvens(myArray);
