var a = 10 ;
var b = 6 ;
var min = Math.min(a,b);
var max = Math.max(a,b);
// for循环求最大公约数
for(var i = min;i>0;i--){
	if(a%i==0&&b%i==0){
		console.log(i);
		break;
	}
}


