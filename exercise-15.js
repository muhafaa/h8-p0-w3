function groupAnimals(animals) {
  // you can only write your code here!
  var temp = animals[0];
  var newArr = [];
  for (var i = 0; i < animals.length-1; i++) {
      for (var j = 0; j < (animals.length-1)-i; j++) {
          if (animals[j] > animals[j+1]) {
              temp = animals[j];
              animals[j] = animals[j+1];
              animals[j+1] = temp;
          }
      }
  }

  temp = 'a';
  var index = 0;
  
  for (var k = 0; k < animals.length; k++) { 
        if (animals[k][0] == temp) {
            if (newArr[index] === undefined) {
                newArr[index] = [animals[k]];
            } else {
                newArr[index][newArr[index].length] = animals[k];
            }
        } else {
            temp = animals[k][0];
            newArr[newArr.length] = [animals[k]];
            index++;
         }
  }
  return newArr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
