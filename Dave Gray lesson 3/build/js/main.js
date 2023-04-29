"use strict";
let stringArr = ['one', 'hey', 'Vance'];
let bibleNames = ['David', 'Jonah', 30];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'great';
stringArr.push('hello');
bibleNames[0] = 7;
bibleNames.unshift('Micah');
bibleNames = stringArr;
let test = [];
let bands = [];
bands.push('Joshua');
// Tuple
let myTuple = ['Jesus', 33, true];
//Objects
let myObj;
myObj = [];
myObj = {};
const exampleObj = {
    prop1: 'Vance',
    prop2: true
};
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'JIMMY',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
//Enums
//"Unlike most Typescript features, Enums are not a type-level addition to javascript but something added to the language and runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
