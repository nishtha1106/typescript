function cube(length, breath, height) {
    if (height == undefined) {
        var area = length * breath;
        return "area is " + area;
    }
    else
        var volume = length * breath * height;
    return "volume is " + volume;
}
console.log(cube(3, 4, 5));
console.log(cube(4, 5));
