// global scope variable
// let a = 20;
// function abc(){
//     // function / block variable
//     let b = 10;
//     return a + b;
// }


// const result = abc();
// console.log(result)
// const first = () => second();
// first();
// function second() {
//   console.log("Inside second");
// }


// let a = 10;
// console.log(a)

// var --> function scope
// let and const --> block scope

// {
//     let a = 10;
// }

// console.log(a)


// let a = 10;
// function parent() {
//     let b = 20;
//     function child(){
//         var c = 10;
//         const sum = a + b;
//         return sum;
//     }
//     // if(b==20){
//     //     var c = 10;
//     // }
//     console.log(c)
//     const result = child();
//     return result;
// }
// console.log(parent())

// console.log(msg); 

// var msg = "JavaScript";

// test();

// function test() {
//   console.log("Running test...");
// }

// testExpression();

// var testExpression = function() {
//   console.log("Running expression...");
// };

// for (var i = 0; i < 3; i++) {
//     console.log(i)
//   // কিছু নেই
// }
// console.log("var i:", i); // 0(2) / 0 1 2(3) / 3

// for (let j = 0; j < 3; j++) {
//   // কিছু নেই
// }
// console.log("let j:", j); // Error
// প্রশ্ন: দুটি console.log-এ কী কী মান বা এরর আসবে?

// let count = 100;

// function parent() {
//   let count = 50;

//   function child() {
//     console.log(count); // 1
//   }

//   child();
// }

// parent();
// console.log(count); // 2
// প্রশ্ন: কনসোলে ক্রমানুসারে কোন দুটি সংখ্যা প্রিন্ট হবে?

// "use strict"
// console.log(this)

// const obj = {
//     model:"Toyoto",
//     getName : () => {
//         console.log(this)
//     }

// }
// // console.log(this.sdf)
// obj.getName()
// const user1 = { name: "Tanvir" };
// const user2 = { name: "Anis" };
// function introduce(city, role) {
//   console.log(`${this.name} lives in ${city} and works as ${role}.`);
// }
// // introduce("Dhaka","Frontend")
// // introduce.call(user2, "Dhaka", "Frontend Dev");
// // introduce.apply(user2,["Dhaka", "Frontend Dev"])
// const func = introduce.bind(user1,"Dhaka", "Frontend Dev")
// func();

// const player = {
//   title: "Striker",
//   skills: ["Running", "Shooting"],
//   showSkills() {
//     this.skills.forEach(skill => {
//       console.log(`${this.title} can do ${skill}`);
//     });
//   }
// };

// player.showSkills();

// const detachedShow = player.showSkills.bind(player)
// detachedShow();

// // Closures
// function counter(){
//     let count = 0;

//     return function () {
//         count++
//         return count;
//     }
// }
// const resultFunc = counter();
// console.log(resultFunc())
// console.log(resultFunc())
// console.log(resultFunc())

// function createBankAccount(initialBalance) {
//   let balance = initialBalance; // প্রাইভেট ভ্যারিয়েবল, বাইরে থেকে এক্সেসযোগ্য নয়

//   return {
//     deposit(amount) {
//       if (amount > 0) balance += amount;
//       return `Current Balance: $${balance}`;
//     },
//     withdraw(amount) {
//       if (amount <= balance) {
//         balance -= amount;
//         return `Current Balance: $${balance}`;
//       }
//       return "Insufficient funds!";
//     },
//     getBalance() {
//       return balance;
//     },
//   };
// }

// const account = createBankAccount(100);

// console.log(account.deposit(50));   // "Current Balance: $150"
// console.log(account.balance);       // undefined (সরাসরি এক্সেস করা অসম্ভব!)
// console.log(account.getBalance());  // 150
// console.log(account.withdraw(100));


// function multiplyBy(factor) {
//   return function(number) {
//     return number * factor;
//   };
// }
// const twoX = multiplyBy(2)
// const result = twoX(10)
// console.log(result)





// function memoizedSquare() {
//   const cache = {}; // ক্লোজারের মাধ্যমে বেঁচে থাকবে

//   return function(n) {
//     if (n in cache) {
//       console.log("Fetching from cache...");
//       return cache[n];
//     }
//     console.log("Calculating...");
//     let result = 0
//     for (let i = 0; i < 10000000; i++) {
//         result +=i
//     }
//     cache[n] = result;
//     return result;
//   };
// }

// const square = memoizedSquare();
// console.log(square(5)); // Calculating... -> 25
// console.log(square(5)); // Fetching from cache... -> 25

