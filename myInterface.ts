interface myInterface
{
	label:string;
}
function print(a:myInterface):any  {
	console.log(a.label)
}
let obj= { label: "nishtha", serial:1};
print(obj);