"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
console.log(Direction.North);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    StatusCode[StatusCode["TimeOut"] = 503] = "TimeOut";
})(StatusCode || (StatusCode = {}));
if (StatusCode.NotFound) {
    console.log('Code Not Found');
}
if (StatusCode.Success) {
    console.log("Code Found");
}
if (StatusCode.Forbidden) {
    console.log('Something went wrong');
}
if (StatusCode.TimeOut) {
    console.log('Please wait for a second');
}
