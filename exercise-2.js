function balikString(str) {
	var reverseString = '';
	for (var i = str[0].length-1; i >= 0; i--) {
		reverseString += str[0][i];
	}
	return reverseString
}

var string = ['hello world!'];
console.log(balikString(string));