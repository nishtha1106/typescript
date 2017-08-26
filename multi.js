var Multi = (function () {
    function Multi() {
        this.name = "nishtha";
        this.num1 = 23;
        this.num2 = 2;
        this.num3 = this.num1 * this.num2;
    }
    return Multi;
}());
var obj = new Multi();
console.log("hello " + obj.name + " multiplication of " + obj.num1 + " and " + obj.num2 + " is " + obj.num3);
