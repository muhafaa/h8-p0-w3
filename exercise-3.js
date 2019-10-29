function dataHandling(data){
  var kategori = ['Nomor ID', 'Nama Lengkap', 'TTL', 'Hobby'];

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < 2; j++) {
      console.log(`${kategori[j]}: ${data[i][j]}`);
    }
    console.log(kategori[2]+': '+data[i][2]+' '+data[i][3]);
    console.log(kategori[3]+': '+data[i][4]);
    console.log(' ')
  }
}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
dataHandling(input);