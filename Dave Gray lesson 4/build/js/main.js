"use strict";
// Literal types
let myName;
let userName;
// functions
const add = (a, b) => {
    return a + b;
};
const logMSg = (message) => {
    console.log(message);
};
logMSg('Hello!');
logMSg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a:number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMSg(multiply(2, 3));
// Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMSg(addAll(2, 3, 4));
logMSg(addAll(2, 3));
logMSg(sumAll(2, 3));
logMSg(sumAll(undefined, 3));
// Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMSg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinte = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This is should never happen');
};
