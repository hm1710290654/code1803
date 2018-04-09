var users=[
{name:"张三",age:18,sex:'男'},
{name:"李四",age:49,sex:'男'},
{name:"老张",age:32,sex:'男'},
{name:"小芳",age:34,sex:'女'},
{name:"魏红",age:18,sex:'女'},
{name:"小明",age:88,sex:'男'},
];

//users对象变成JSON字符串写出到users.json文件中
const fs = require("fs");
//path模块
// const path = require("path");
// var temp = path.resolve(__dirname,'user.json')
// console.log(temp);    

console.log(users);
fs.writeFile(__dirname+'/user.json',
	JSON.stringify(users,null,4),
	function (err){
		if(err)
	console.error(err);
	});






       
//str.setHeader("Content-type","users/html;charset=utf-8");     
// console.log(__dirname);