"use strict";
exports.__esModule = true;
exports.LargestTimeForGivenDigits = void 0;
var LargestTimeForGivenDigits;
(function (LargestTimeForGivenDigits) {
    LargestTimeForGivenDigits.sum = function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        a.reduce(function (acc, val) { return acc + val; }, 0);
    };
})(LargestTimeForGivenDigits = exports.LargestTimeForGivenDigits || (exports.LargestTimeForGivenDigits = {}));
