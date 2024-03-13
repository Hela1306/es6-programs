var a = [10,20,30]
var b = [...a] //spread operator same thing as (a = b) but wait for the twist
var c = [...a,40,50,60]//values of a plus other values too
console.log(a);
console.log(b);
console.log(c);

//Normal argument (Looks only at what it thinks is usable in this case the first value)
function demo(a){
    console.log(a)
}
demo(10);
demo(10,20,30)
demo(2000,39,67)

//Rest Parameter (Looks at every values passed in parameter)
function demo2(...a){
    console.log(a)
}
demo2();
demo2(10);
demo2(200,34);
demo2(32.4376,6732,278,12,444)