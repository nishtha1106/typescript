 var b:string;
 function even(a:number):string {
	if (a%2==0) {
		b="even";
		return b
	}
	else 
		b="odd";
	return b
} 

even(5);
console.log(b)