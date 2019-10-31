// define function 
function breakOut(array, changeValue, stopValue){
// iterate through array
  for (var i = 0; i < array.length; i++){
// changes every element to changeValue until loop reaches stopValue
// array at index is not equal to stopValue - then splice the array to remove 1 and changeValue to misc
      if (array[i] !== stopValue){
      array.splice(i, 1, changeValue);
// else when the array at index is equal to the stopValue stop the loop
    } else {
// break out of loop
      break;
    }
  } 
// return array
  return array;
}

// define function 
function keepGoing(array, changeValue, skipValue){
  // iterate through array
  for (var i = 0; array.length; i++){
// changes every element to changeValue except those that match skipValue
    if (array[i] !== skipValue){
      return array[i];
    } else {
       // returns array
    return array; 
    }
    
  }
     
}


// define function 
function findBy(array, findFn){
  // looks for value in array numberical - based on return of value of findFn
  for (var i = 0; i < array.length; i++){
    if (array[i] === findFn){
      return array[i];
    } else {
      return null;
    }
  }
  // return null if value isnt found
  // check test file for signature of findFn and type of its return value
}



