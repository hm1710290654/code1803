//console.log("Hello")
var str = "";
for (var i=1;i<10;i++){
	for (var j=1;j<=i;j++){
		str+=`${i}*${j}=${i*j}\t`;
		//console.log("%d*%d=%d",i,j,i*j);
	}
	str +="\n";
}
console.log(str);
