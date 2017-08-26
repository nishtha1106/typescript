function area(s1:number):number;
function area(s1:number, s2?:number);

function area(s1:number, s2?:number) {
	if(s2==undefined) {
		return s1*s1;
	}
	else return s1*s2;
	}
	console.log(area(2))
	console.log(area(3,4))
