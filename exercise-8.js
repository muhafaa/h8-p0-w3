
function pasanganTerbesar(num) {
    // you can only write your code here!
    var arr = [];
    var temp = 0;
    var hasil = 0;
    for (var i = 0; i < String(num).length-1; i++) {
        hasil = parseInt(String(num)[i]+(String(num)[i+1]));
        if (hasil > temp) {
            temp = hasil;
        }
    }
    return temp;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99