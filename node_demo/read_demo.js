const fs = require('fs');



fs.readFile('shit.txt',function (err,data){
	console.log(data.toString());
	})



// fs.writeFile('shit.txt',`
// 	这是我追加的内容
// 	`,{flag :'a'},function(err){

// 	});
var content = fs.readFileSync('shit.txt');
console.log(content.toString());
console.log("script over");

console.log(__dirname);//脚本所在的目录
console.log(__filename);//脚本的文件全路径