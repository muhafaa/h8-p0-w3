function angkaPalindrome(num) {
    // you can only write your code here!
    var hasil= '';
    while (num) {    
        num++;
        hasil='';
        for (var j = String(num).length-1; j >= 0; j--) {
            hasil += String(num)[j]; 
        }
        if(hasil == num){
            return hasil;
        }
    }
} 
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001