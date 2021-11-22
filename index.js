//--practice
// console.log("hello world");
// console.warn("this is warning");
// console.error("this is an error");
//Add---
// var number1 = 34;
// var number2 = 24;
// console.log(number1 + number2);

//comparision---
// var x= 34;
// var y= 56;
// console.log(x==y);
// console.log(x<=y);
// console.log(x>=y);
// console.log(x>y);
// console.log(x<y);

//function---
// function avg(a,b){
//     c = (a +b)/2;
//     return c;
// }
// c1 = avg(4,6);
// c2 = avg(14,16);
// console.log(c1, c2);

//if-else---
// var age =24;
// if(age>18){
//     console.log('your not a kid');
// }
// else{
//     console.log("you are kid");
// }
//---
// var marks= 75;
// if(marks < 35){
//     console.log('just pass');
// }
// else if(marks < 65){
//     console.log('pass with minimum number');
// }
// else if(marks >= 75)
// {
//     console.log('good marks');
// }
// else{
//     console.log('fail');
// }

//And operation
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

//OR  operation
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Array--
// var ar = [1,2,3,4,5,6,7,8];
// console.log(ar);
// for(var i=0;ar.length;i++){
//     console.log(ar[i])
// }


//--or--
// ar.forEach(function(element){
//     console.log(element);
// });

//---while loop
 let j=0;
// while(j<ar.length){
//     console.log(ar[j]);
//     j++;
// }

//---do while
// do{
//     console.log(ar[j]);
//     j++;
// }while(j<ar.length);

//---String 
//  let MyString = "arshi naaz siddiqui";
// console.log(MyString.length)
// console.log(MyString.indexOf("i"))
// console.log(MyString.lastIndexOf("i"))

// console.log(MyString.slice(1,4))

// d = MyString.replace("arshi","amrin");
// console.log(d,MyString)

//---time
// let Mydate = new Date();
// console.log(Mydate.getTime());
// console.log(Mydate.getSeconds());
// console.log(Mydate.getMinutes());
// console.log(Mydate.getMonth());
// console.log(Mydate.getTimezoneOffset());
// console.log(Mydate.getDay());


//--JSON
obj = {name:"Arshi",length:1,a:{this:'tha"t'}}
json = JSON.stringify(obj);
console.log(typeof jso);
