"use strict";
var Size;
(function (Size) {
    Size[Size["XS"] = 0] = "XS";
    Size[Size["S"] = 1] = "S";
    Size[Size["M"] = 2] = "M";
    Size[Size["L"] = 3] = "L";
    Size[Size["XL"] = 4] = "XL";
})(Size || (Size = {}));
function getPriceFromSize(size, basePrice) {
    const increments = {
        [Size.XS]: 0,
        [Size.S]: 0.05,
        [Size.M]: 0.10,
        [Size.L]: 0.15,
        [Size.XL]: 0.20
    };
    return basePrice + basePrice * increments[size];
}
console.log(getPriceFromSize(Size.M, 10));
console.log(getPriceFromSize(Size.L, 10));
var Week;
(function (Week) {
    Week[Week["Sunday"] = 1] = "Sunday";
    Week[Week["Monday"] = 2] = "Monday";
    Week[Week["Tuesday"] = 3] = "Tuesday";
    Week[Week["Wednesday"] = 4] = "Wednesday";
    Week[Week["Thursday"] = 5] = "Thursday";
    Week[Week["Friday"] = 6] = "Friday";
    Week[Week["Saturday"] = 7] = "Saturday";
})(Week || (Week = {}));
function printWeekNumberDay(day) {
    console.log(day);
}
printWeekNumberDay(Week.Monday);
printWeekNumberDay(Week.Sunday);
var Color;
(function (Color) {
    Color["red"] = "#EB1416";
    Color["orange"] = "#FFA500";
    Color["yellow"] = "#FAAB36";
    Color["green"] = "#79C314";
    Color["blue"] = "#487DE7";
    Color["indigo"] = "#4B369D";
    Color["violet"] = "#70369D";
})(Color || (Color = {}));
function printColors(colors) {
    for (let color of colors) {
        let body = document.body;
        let div = document.createElement("DIV");
        div.style.height = "20px";
        div.style.backgroundColor = color;
        body.appendChild(div);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    printColors([
        Color.red,
        Color.indigo,
        Color.violet,
        Color.orange,
        Color.yellow,
        Color.green,
        Color.blue
    ]);
});
function getTypeof(param) {
    return typeof param;
}
function bubblesort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    return arr;
}
console.log(bubblesort([1, 5, 6, 3, 8, 2, 9, 4, 7]));
//# sourceMappingURL=app.js.map