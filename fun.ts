function f() {
    var a = 1;

    a = 2;
    var b = g();
    console.log(b)
    a = 3;
var b = g();
console.log(b)
    return b;

    function g() {
        return a;
    }
}
console.log(f());