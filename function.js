let twoRaiseTo2 = Math.pow(2,2)
console.log("2 raise to the power of 2 is:",twoRaiseTo2)
let twoRaiseTo3=Math.pow(2,3)
console.log("2 raise to the power of 3 is:", twoRaiseTo3)
let sixRaiseTo6 =Math.pow(6,2)
console.log("6 raise to the power of 2 is:", sixRaiseTo6)
function square(){
    console.log(2 ** 2)
}
for(let count =1; count <11; count++){
    square()
}
function printName(){
    console.log("Egede","Anita")
}
printName()
function multiply(){
    let number1 =2
    let number2 =4
    let product = number1*number2
    let message = "2 times 4 is :"+product
    console.log(message)
}
multiply()
function addition(){
    let x =3
    let y =9
    let add = x+y
    let m = "3 plus 9 is :"+add
    console.log(m)
}
addition()
function subtrction(){
    let a =7
    let b =4
    let sub = a-b
    let me = "7 minus 4 is :"+sub
    console.log(me)
}
subtrction()
function division(){
    let g =20
    let h =5
    let div=g/h
    let mes ="20 divided by 5 is :"+div
    console.log(mes)
}
division()