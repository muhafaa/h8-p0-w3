function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var comparator = 0;
  var result = 0;
  while (true) {
      comparator++;
      if (arr[0]*comparator == arr[1]) {
          comparator = comparator;
          break;
      }
  }
  
  for (var i = 1; i < arr.length-1; i++) {
      if (arr[i] * comparator == arr[i+1]) {
          result = true;
      } else{
          result = false;
          break;
      }      
  }
  return result;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false