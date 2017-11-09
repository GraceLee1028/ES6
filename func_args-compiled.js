"use strict";

/**
 * Created by lea on 2017/11/8.
 */
//1、Handling parameter default values【默认参数】
function info(age) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "grace";

    console.log(name);
}
info();

//Handling named parameters【tip:参数name与传递进来的对象中的属性名name需要一一对应】
function selectEntries(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === undefined ? 0 : _ref$name,
        _ref$end = _ref.end,
        end = _ref$end === undefined ? -1 : _ref$end,
        _ref$step = _ref.step,
        step = _ref$step === undefined ? 1 : _ref$step;

    console.log(name);
}
selectEntries({ name: "Jane" });
//selectEntries();//error: Cannot match against 'undefined' or 'null'.针对这一问题给出下面函数的处理方案
function selectEntries2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$name = _ref2.name,
        name = _ref2$name === undefined ? "lea" : _ref2$name,
        _ref2$end = _ref2.end,
        end = _ref2$end === undefined ? -1 : _ref2$end,
        _ref2$step = _ref2.step,
        step = _ref2$step === undefined ? 1 : _ref2$step;

    console.log(name);
}
selectEntries2();
//

//2、From arguments to rest parameters【...】
function allArgs() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var arg = _step.value;

            console.log(arg);
        }
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
}
allArgs(2, 3, 4, 5);
//es5
var max = Math.max.apply(Math, [-1, 5, 11, 3]);
console.log(max);
//es6
var max2 = Math.max.apply(Math, [-1, 5, 11, 3]);
console.log(max2);

//向一个数组添加一个数组的数据【改变原数组】
var arr = ['lea'];
//es5
arr.push.apply(arr, ['a', 'b']);
console.log(arr);

//es6
arr.push.apply(arr, ['a', 'b']);
console.log(arr);

//合并数组
//es5 concat,【返回新的数组，不影响原数组】
console.log(arr.concat([2, 4]));
//es6
console.log([].concat(arr, ['cd']));

//3、From function expressions in object literals to method definitions
var obj = {
    init: function init() {
        "use strict";

        this.testGo();
    },
    testGo: function testGo() {
        "use strict";

        console.log("go go go");
    }
};
obj.init();

//4、From constructors to classes

//# sourceMappingURL=func_args-compiled.js.map