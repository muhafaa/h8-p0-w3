function balikString(str) {
	var reverseString = '';
	for (var i = str.length-1; i >= 0; i--) {
		reverseString += str[i];
	}
	return reverseString;
}

var string = 'hello world!';
console.log(balikString(string));