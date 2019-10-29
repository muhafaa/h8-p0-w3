function dataHandling2(data){
  // splice
  data.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
  console.log(data)

  //split
  var date = data[3].split('/');
  switch (parseInt(date[1])){
    case 01 : { console.log('Januari'); break;}
    case 02 : { console.log('Februari'); break;}
    case 03 : { console.log('Maret'); break;}
    case 04 : { console.log('April'); break;}
    case 05 : { console.log('Mei'); break;}
    case 06 : { console.log('Juni'); break;}
    case 07 : { console.log('Juli'); break;}
    case 08 : { console.log('Agustus'); break;}
    case 09 : { console.log('September'); break;}
    case 10 : { console.log('Oktober'); break;}
    case 11 : { console.log('November'); break;}
    case 12 : { console.log('Desember'); break;}
  }

  //sort desc
  date.sort(function(value1, value2) { return parseInt(value1) < parseInt(value2) });
  console.log(date); // 15, 2, 1 

  //join
  console.log(date.join('-'))

  //slice
  console.log(data[1].slice(0,15))
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);