"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by lea on 2017/11/8.
 */
/*From IIFEs to blocks */
//1、let,const声明都会产生块级作用域
{
    var _name = "lea";
}
//console.log(name);//error：name is not defined

//2、string interpolation
var age = 24;
console.log("your age is " + age);

//3、Multi-line strings
var html = "<p>\
            you are a loser\
            <span>but i like</span>\
            <small>so,just go.</small>\
            </p>";

//4、arrow functions
function test() {
    console.log(function () {
        return html;
    }); //Function
}
test();

var arr = [1, 2, 3];
var squares = arr.map(function (x) {
    return x * x;
});
console.log(squares);

//5、Handling multiple return values
//arrays
var reg = /^(\d\d\d\d)-(\d\d)-(\d\d)$/i;

var _reg$exec = reg.exec("2017-11-08"),
    _reg$exec2 = _slicedToArray(_reg$exec, 4),
    time = _reg$exec2[0],
    year = _reg$exec2[1],
    month = _reg$exec2[2],
    day = _reg$exec2[3];

console.log(time);
console.log(year);
console.log(month);
console.log(day);

// objects
var obj = { name: "lea", age: 22 };
var name = obj.name;

console.log(name);

//# sourceMappingURL=block-compiled.js.map