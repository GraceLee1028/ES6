'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _console;

/**
 * Created by lea on 2017/11/8.
 */
var arr = [1, 2, 3];

//1、From for to forEach() to for-of
//es5
arr.forEach(function (item) {
    "use strict";

    console.log(item); //1 2 3
});

//es6
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        //形成Block作用域
        console.log(item); //1 2 3
    }
    //console.log(item);//error:item is not defined.

    //2、entries()
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            index = _step2$value[0],
            _item = _step2$value[1];

        console.log('item' + index + ':' + _item);
        //item0:1
        //item1:2
        //item2:3
    }
    //③、concat():合并数组es5
    //扩展运算符
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

(_console = console).log.apply(_console, [1, 3.5]); //输出：1 3.5
var arr1 = [34, 23];
var arr2 = [45, 63, 23];

console.log([].concat(arr1, arr2)); //[ 34, 23, 45, 63, 23 ]

//④、Array.from()：将两类对象转为为真正的数组
var arr3 = {
    '0': 'lea', //这里要注意key为num
    '2': 24,
    length: 4
};
console.log(Array.from(arr3)); //[ 'lea', undefined, 24, undefined ]

//⑤、Array.of方法用于将一组值，转换为数组。
console.log(Array.of(1, 5, 8)); //[ 1, 5, 8 ]

//find()：
var arr4 = [1, 5, 10, 15].find(function (value, index, arr) {
    return value > 4;
});
console.log(arr4); //输出：10;【会找到符合条件的某项】

//includes():
console.log([1, 2, 3].includes(2)); //true

//# sourceMappingURL=array-compiled.js.map