const http = require('http');

//requset    请求
//response   响应
var se = http.createServer(function(req,res){
	var pamsrr=	req.url.substring(1).split("&")
	var parms= {};
	pamsrr.forEach(function(item){
		var tem = item.split("=");
		parms[tem[0]]=tem[1];
	});
	console.log(req.url);
	res.setHeader("Content-type","text/html;charset=utf-8");//处理页面乱码

	res.write(`<style>
		body{
			background:${parms['color']};
		}</style>
		`)
	res.end("<h1>这是我的第一个网络服务</h1>");
});
se.listen(3000);