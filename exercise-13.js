function targetTerdekat(arr) {
    // you can only write your code here!
    var countToLeft = 0;
    var countToRight = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'o') {
            for (var right = i; right < arr.length; right++) {
                countToRight++; 
                if (arr[right] == 'x') {
                    countToRight -= 1;
                    break;
                } else if (arr[right] == arr[arr.length-1] && arr.length-1 != 'x' && arr.length-1 != 'o') {
                    countToRight = 0;
                }
            }

            for (var left = i; left >= 0; left--) {                
                countToLeft++; 
                if (arr[left] == 'x') {
                    countToLeft -= 1;
                    break;
                } else if (arr[left] == arr[0] && arr[0] != 'x' && arr[0] != 'o') {
                    countToLeft = 0;
                }
            }
            break;
        }
    }
    if (countToRight > countToLeft) {
        return countToRight;
    } else if(countToRight < countToLeft){
        return countToLeft;
    } else if(countToRight,countToLeft == 0){
        return 0;
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2