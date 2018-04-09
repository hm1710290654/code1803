
const fs = require("fs");
var content = fs.readFileSync('user.json');	
// console.log(JSON.parse(content));
var con=JSON.parse(content)
con.sort(function(a,b){
	var r=a.age-b.age;
	if(r==0){
		return(a.sex.charCodeAt(0)-b.sex.charCodeAt(0));
	}
	return r;
});
// var str = "<table >"
//        for (var i in con) {
//            str += "<tr>"
// }
//            for (var j in con[i]) {
//                str += "<td>" + con[i][j] + "</td>"
//            }
//            str += "</tr>"
//        }
//        str +="</table>"

var str = "<body><table id='tab'>"
str += con.map(function (a){
	return `
	<tr>
	<td>${a.name}</td>
	<td>${a.age}</td>
	<td>${a.sex}</td>
	</tr>
	`;		
 }).reduce(function(a,b){
 	return a+b;
 });
str +="</table>";
str+=`<script>
var tab = document.getElementById('tab');
var trs = tab.getElementsByTagName('tr');
for (var i=0;i<trs.length;i++){
	if(i%2==1){
		trs[i].style.background="red";
	}else{
		trs[i].style.background="blue";
	}
}
</script></body>`
fs.writeFile(__dirname+'/users.html',str,
	function (err){
		if(err)
			console.error(err);
	});