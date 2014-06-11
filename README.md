StringBuilder
=============

var str = new String('0'),
    
var builder = str.StringBuilder()
		 .append('1')
		 .append('2')
		 .append('3');
			                 
console.log(builder.toString());


builder.insert(0,'5')
	     .remove(2,1);

console.log(builder.toString());

builder.clear();

console.log(builder.toString());
