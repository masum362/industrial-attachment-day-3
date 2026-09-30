# 🚀 JavaScript Advanced Mixed Practice Tasks

এই practice set-এ নিচের conceptsগুলো practically ব্যবহার করতে হবে:

* Scope
* Scope Chain
* Shadowing
* Hoisting
* TDZ
* Execution Context
* Call Stack
* `this`
* `call()`
* `apply()`
* `bind()`
* Closure
* Private Variables
* Higher-Order Functions

> **Rule:** প্রতিটি task করার আগে output/behaviour নিজে predict করবে। তারপর code run করে result verify করবে।

---

# 🟢 Task 1 — Scope, Hoisting & Execution Order

নিচের code analyze করো:

```js
console.log(message);

var message = "JavaScript";

function first() {
  console.log("First");

  second();

  console.log("First End");
}

function second() {
  console.log("Second");
}

first();

console.log(message);
```

### তোমার কাজ

1. Code-এর সম্পূর্ণ output ক্রমানুসারে লিখো।
2. `var message` কেন প্রথমে error না দিয়ে `undefined` দেয়?
3. `first()` এবং `second()` কীভাবে Call Stack-এ প্রবেশ ও বের হয় তা explain করো।
4. Function Declaration কীভাবে hoist হয় তা explain করো।

### Extra Challenge

নিচের code-এর behaviour predict করো:

```js
console.log(name);

let name = "Rahim";
```

**প্রশ্ন:** এখানে `undefined` না এসে error কেন হবে?

---

# 🟡 Task 2 — Scope Chain & Shadowing

একটি nested function structure তৈরি করো যেখানে Global, Parent এবং Child scope থাকবে।

### Requirements

নিচের structure অনুসরণ করো:

```js
let username = "Global User";

function parent() {
  let username = "Parent User";

  function child() {
    let username = "Child User";

    console.log(username);
  }

  child();

  console.log(username);
}

parent();

console.log(username);
```

### তোমার কাজ

1. Output predict করো।
2. কোন `username` কোন scope থেকে এসেছে তা identify করো।
3. কোন variable কোথায় shadow হয়েছে তা explain করো।
4. `child()` যদি নিজের `username` না রাখে তাহলে কোন value পাওয়া যাবে?
5. `parent()`-এর `username`-ও সরিয়ে দিলে কী হবে?

### Goal

এই task-এর মাধ্যমে **Lexical Scope + Scope Chain + Shadowing** পরিষ্কারভাবে বুঝতে হবে।

---

# 🟠 Task 3 — `this`, `call()`, `apply()` & `bind()`

একটি employee profile system তৈরি করো।

### Given Data

```js
const employee1 = {
  name: "Rahim",
  role: "Frontend Developer"
};

const employee2 = {
  name: "Karim",
  role: "Backend Developer"
};

function introduce(company, city) {
  console.log(
    `${this.name} is a ${this.role} at ${company} in ${city}.`
  );
}
```

### তোমার কাজ

#### 1. Normal Method

একটি object method তৈরি করে `this` ব্যবহার করে নিজের information print করো।

#### 2. `call()`

`employee1`-এর information print করো:

```text
Rahim is a Frontend Developer at Mastrus IT in Moulvibazar.
```

#### 3. `apply()`

`employee2`-এর information print করো।

Arguments অবশ্যই array হিসেবে দিতে হবে।

#### 4. `bind()`

`employee1`-এর জন্য একটি নতুন function তৈরি করো:

```js
const rahimProfile = ...
```

তারপর:

```js
rahimProfile();
```

দিলে employee1-এর information print হবে।

### Bonus Challenge

```js
const showProfile = employee1.introduce;
```

এরপর:

```js
showProfile();
```

কেন expected result নাও দিতে পারে তা explain করো।

তারপর `bind()` দিয়ে problem solve করো।

---

# 🔴 Task 4 — Private Bank Account with Closure

একটি ছোট Bank Account system তৈরি করো যেখানে balance বাইরে থেকে directly access করা যাবে না।

### Starter Code

```js
function createBankAccount(accountHolder, initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      // code
    },

    withdraw(amount) {
      // code
    },

    getBalance() {
      // code
    },

    getAccountInfo() {
      // code
    }
  };
}
```

### Requirements

একটি account তৈরি করো:

```js
const account = createBankAccount("Rahim", 10000);
```

### Methods

```js
account.deposit(2000);

account.withdraw(3000);

console.log(account.getBalance());

console.log(account.getAccountInfo());
```

### Rules

#### Deposit

Amount `0` বা তার কম হলে deposit করা যাবে না।

#### Withdraw

Balance-এর চেয়ে বেশি টাকা withdraw করা যাবে না।

Output:

```text
Insufficient balance!
```

#### Privacy

নিচের code:

```js
console.log(account.balance);
```

এর result হতে হবে:

```text
undefined
```

### Bonus Challenge

দুটি account তৈরি করো:

```js
const account1 = createBankAccount("Rahim", 10000);

const account2 = createBankAccount("Karim", 5000);
```

একটির balance পরিবর্তন করলে অন্যটির balance পরিবর্তন হবে না।

### Goal

এই task-এ বুঝতে হবে:

**Closure কীভাবে private data তৈরি করে এবং প্রতিটি function call কীভাবে নিজের আলাদা lexical environment ধরে রাখে।**

---

# 🔥 Task 5 — Discount Calculator using Closure + `this`

এটি একটি real-world style challenge।

একটি **Product Pricing System** তৈরি করো।

### Product

```js
const product = {
  name: "Laptop",
  price: 60000,
  discount: 10,

  getFinalPrice() {
    // code
  }
};
```

`getFinalPrice()` এমনভাবে তৈরি করো যাতে `this.price` এবং `this.discount` ব্যবহার করে final price বের হয়।

---

## Part 1 — `this`

Expected:

```text
Product: Laptop
Original Price: 60000
Discount: 10%
Final Price: 54000
```

---

## Part 2 — Discount Factory

একটি function তৈরি করো:

```js
function createDiscountCalculator(discount) {
  return function(price) {
    // code
  };
}
```

তারপর:

```js
const studentDiscount = createDiscountCalculator(10);

const eidDiscount = createDiscountCalculator(20);
```

ব্যবহার:

```js
console.log(studentDiscount(60000));
// 54000

console.log(eidDiscount(60000));
// 48000
```

### Questions

1. `discount` কীভাবে inner function-এর কাছে available থাকছে?
2. `createDiscountCalculator()` শেষ হওয়ার পরও `discount` কীভাবে পাওয়া যাচ্ছে?
3. এখানে Closure কোথায় তৈরি হচ্ছে?

---

## Part 3 — Combine Everything

এখন একটি function তৈরি করো:

```js
function createProduct(name, price, discount) {
  // code
}
```

এটি এমন একটি object return করবে যার মধ্যে থাকবে:

```js
const laptop = createProduct(
  "Laptop",
  60000,
  10
);
```

এবং:

```js
laptop.getInfo();
```

দিলে product-এর name, original price, discount এবং final price দেখাবে।

### Final Requirement

`price` এবং `discount` সরাসরি পরিবর্তন করা যাবে না।

অর্থাৎ:

```js
laptop.price
```

এবং

```js
laptop.discount
```

private রাখতে হবে।

### Must Use

এই final task-এ অবশ্যই ব্যবহার করতে হবে:

* Closure
* Private Variables
* `this`
* Object Methods
* Higher-Order Function
* Scope
* Scope Chain

---

# 🏆 Practice Goal

এই ৫টি task শেষ করার পর student যেন explain করতে পারে:

* **Scope** → variable কোথা থেকে পাওয়া যায়
* **Scope Chain** → JavaScript কীভাবে outer scope খুঁজে
* **Hoisting & TDZ** → code execution-এর আগে declarations কীভাবে behave করে
* **Execution Context & Call Stack** → function কীভাবে execute হয়
* **`this`** → function কীভাবে তার context পায়
* **`call/apply/bind`** → manually `this` set করা
* **Closure** → function কীভাবে outer variables ধরে রাখে
* **Private Variables** → Closure দিয়ে data hide করা

> **Challenge Rule:** আগে নিজে logic ও output predict করবে → তারপর code লিখবে → তারপর browser/Node.js-এ run করে verify করবে।
