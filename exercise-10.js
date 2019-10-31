function perkalianUnik(arr) {
    // you can only write your code here!
    var resultArr = [];
    var resultArrTemp = 0;
    var result = 1;

    for (var i = 0; i < arr.length; i++) {
        resultArrTemp = arr.shift(); 

        for (var j = 0; j < arr.length; j++) {
            result *= arr[j];
        }      
        
        resultArr.push(result);
        arr.push(resultArrTemp);
        result = 1;
    }

    return resultArr;
  }

  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]