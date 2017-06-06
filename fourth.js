// var addNumbers=function (num1 :number, num2:number){
// 	return num1+num2;
// }
// var total=addNumbers(4,5);
// console.log(total)
// // var addMoreNumbers=function(num1:number,num2:number=2){
// // 	return num1+num2;
// // }
// // var sum=addMoreNumbers(1,5);
// var addManyMoreNumbers=function(num1:number,num2:number=2,num3?:number){
//     console.log("num1:"+num1);
//     console.log("num2:"+num2);
//     console.log("num3:"+num3);
//     if(num3!=null){
//     	return num1+num2+num3
//     }
// 	return num1+num2;
// }
// var sum=addManyMoreNumbers(1,5,6);
// console.log(sum)
function myRestParams(first, second) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    console.log("first:" + first);
    console.log("second:" + second);
    console.log("others:" + others);
    return others;
}
console.log("MyRestParams:", myRestParams("uma", "mahesh", "rao", "maxwell", "colson"));
function sumNumber() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var value = nums_1[_a];
        console.log(value);
    }
}
sumNumber(1, 2, 3);
