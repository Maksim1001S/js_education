// 1 exercise
let people_Tc = 36.6;
let people_Tf = (9 / 5) * people_Tc + 32;
alert(people_Tf);

// 2 exercise
let name = "Василий";
let admin = name;
console.log(admin);

// 3 exercise
let sum1 = 10 + 10 + "10"
console.log(sum1)

let sum2 = 10 + "10" + 10
console.log(sum2)

let sum3 = 10 + 10 + +"10"
console.log(sum3)

let sum4 = 10 / -""
console.log(sum4)

let sum5 = 10 / +"2,5"
console.log(sum5)

/*

1. 10 добавдяем 10 получаем 20, 20 склеиваем с строкой 10 
2. т.к ассоциативность с лева на права 10 становиться строкой и склеиваеться с первой 10 и третей 10
3. "+" перед строкой делает числом, поэтому 10 + 10 + 10 = 30
4. в скобках ничего нету, поэтому "-" добавляеться к нулю и получаем -бесконечность
5. не целые числа пишуться через точку, поэтому Nan

*/