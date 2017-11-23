"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
//es5
function Person1(name) {
    this.name = name;
}
Person1.prototype.describe = function () {
    console.log('Person1 called ' + this.name);
    return "person1 " + this.name;
};
//es6

var Person2 = function () {
    function Person2(name) {
        _classCallCheck(this, Person2);

        this.name = name;
    }

    _createClass(Person2, [{
        key: "describe",
        value: function describe() {
            console.log('Person2 called ' + this.name);
            return "person2 " + this.name;
        }
    }]);

    return Person2;
}();
//let p1 = new Person1("LEA");
//let p2 = new Person1("JANE");
//p1.describe();
//p2.describe();

//5、Derived classes【派生类】
//es5


function Wang(name, title) {
    "use strict";

    Person1.call(this, name); //构造函数继承【super(name)】
    this.title = title;
}
Wang.prototype = Object.create(Person1.prototype); //原型的继承
Wang.prototype.constructor = Wang; //constructor依旧是Wang
Wang.prototype.describe = function () {
    "use strict";

    return Person1.prototype.describe.call(this) + ' (' + this.title + ')';
};
//es6

var Lea = function (_Person) {
    _inherits(Lea, _Person);

    function Lea(name, title) {
        "use strict";

        _classCallCheck(this, Lea);

        //父类方法
        var _this = _possibleConstructorReturn(this, (Lea.__proto__ || Object.getPrototypeOf(Lea)).call(this, name));

        _this.title = title;
        return _this;
    }

    _createClass(Lea, [{
        key: "describe",
        value: function describe() {
            return _get(Lea.prototype.__proto__ || Object.getPrototypeOf(Lea.prototype), "describe", this).call(this) + ' (' + this.title + ')';
        }
    }]);

    return Lea;
}(Person2);

var w = new Wang("wang", "ES5:");
var l = new Lea("lea", "ES6:");
console.log(w.describe());
console.log(l.describe());
console.log(l.name);

//# sourceMappingURL=func_args-compiled.js.map