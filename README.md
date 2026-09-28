# 🚀 JavaScript Advanced Practice Tasks

এই practice set-এ JavaScript-এর নিচের topics একসাথে practice করতে হবে:

* Scope
* Scope Chain
* Hoisting
* TDZ
* Execution Context
* Call Stack
* `this`
* `call()`
* `apply()`
* `bind()`
* Closure
* DOM
* Events
* Event Object
* Event Bubbling
* Event Delegation
* `preventDefault()`
* `stopPropagation()`

---

# 📚 Topics Covered

## 1. Scope

Practice করতে হবে:

* Global Scope
* Function Scope
* Block Scope
* Lexical Scope
* Scope Chain
* Shadowing
* Hoisting
* Temporal Dead Zone
* Execution Context
* Call Stack

---

## 2. `this` Keyword

Practice করতে হবে:

* Global `this`
* Object-এর ভিতরে `this`
* Function-এর ভিতরে `this`
* Arrow Function-এর `this`
* `call()`
* `apply()`
* `bind()`

---

## 3. Closure

Practice করতে হবে:

* Closure কীভাবে কাজ করে
* Private Variables
* Function returning Function
* Data privacy
* Practical Closure

---

## 4. DOM

Practice করতে হবে:

* `getElementById()`
* `querySelector()`
* `querySelectorAll()`
* `textContent`
* `innerHTML`
* `style`
* `classList`
* `createElement()`
* `appendChild()`
* `remove()`
* Attributes

---

## 5. Events

Practice করতে হবে:

* `click`
* `input`
* `submit`
* `change`
* Keyboard Events
* Mouse Events
* Event Object
* Event Bubbling
* Event Capturing
* Event Delegation
* `preventDefault()`
* `stopPropagation()`

---

# 🟢 Task 1 — Student Profile

একটি Student Profile তৈরি করো।

### Student Data

```js
const student = {
  name: "Rahim",
  age: 22,
  course: "Web Development",
  skills: ["HTML", "CSS", "JavaScript"]
};
```

### Requirements

Page-এ দেখাতে হবে:

* Student Name
* Age
* Course
* Skills

### Must Use

* Object
* Array
* `querySelector()`
* `textContent`
* `innerHTML`
* `forEach()`

### Bonus

একটি **Show Skills** button তৈরি করো।

Button click করলে skills dynamically page-এ দেখাবে।

---

# 🟢 Task 2 — Counter with Closure

একটি Counter App তৈরি করো।

```text
Counter: 0

[ + ] [ - ] [ Reset ]
```

### Requirements

Counter-এর value একটি private variable হিসেবে রাখতে হবে।

Example:

```js
function createCounter() {
  let count = 0;

  return {
    increment() {
      // code
    },

    decrement() {
      // code
    },

    reset() {
      // code
    },

    getValue() {
      // code
    }
  };
}
```

### Must Use

* Closure
* Private Variable
* DOM
* Click Event
* `textContent`

### Important

নিচের মতো সরাসরি counter value access করা যাবে না:

```js
counter.count
```

---

# 🟡 Task 3 — Student Registration Form

একটি Student Registration Form তৈরি করো।

```text
Name:   [____________]

Email:  [____________]

Age:    [____________]

Course: [ JavaScript ▼ ]

        [ Register ]
```

### Submit করার পরে

Successful registration হলে দেখাবে:

```text
Registration Successful!

Name: Rahim
Email: rahim@gmail.com
Age: 22
Course: JavaScript
```

### Validation

Name empty হলে:

```text
Name is required
```

Email empty হলে:

```text
Email is required
```

Age 18-এর কম হলে:

```text
Age must be 18 or above
```

### Must Use

* `submit`
* `preventDefault()`
* Event Object
* `input.value`
* DOM Manipulation

---

# 🟡 Task 4 — Scope & Shadowing

নিচের code-এর output আগে অনুমান করো।

```js
let name = "Global";

function parent() {
  let name = "Parent";

  function child() {
    let name = "Child";

    console.log(name);
  }

  child();

  console.log(name);
}

parent();

console.log(name);
```

### Questions

1. প্রথমে কী print হবে?
2. দ্বিতীয় কী print হবে?
3. তৃতীয় কী print হবে?
4. কোন scope থেকে কোন `name` পাওয়া যাচ্ছে?
5. এখানে Scope Chain কীভাবে কাজ করছে?

---

# 🟡 Task 5 — `this` Keyword

নিচের code-এর output আগে অনুমান করো।

```js
const user = {
  name: "Rahim",

  normalFunction() {
    console.log(this.name);
  },

  arrowFunction: () => {
    console.log(this.name);
  }
};

user.normalFunction();
user.arrowFunction();
```

### Questions

1. `normalFunction()` কী print করবে?
2. `arrowFunction()` কী print করবে?
3. কেন দুইটির result আলাদা হতে পারে?
4. Arrow Function-এর `this` কোথা থেকে আসে?

### Bonus

`arrowFunction` এমনভাবে পরিবর্তন করো যাতে:

```text
Rahim
```

print হয়।

---

# 🟡 Task 6 — `bind()` Practice

নিচের code complete করো:

```js
const user = {
  name: "Masum",
  role: "Frontend Developer"
};

function showProfile() {
  console.log(`${this.name} is a ${this.role}`);
}

const profile = __________;

profile();
```

### Expected Output

```text
Masum is a Frontend Developer
```

### Requirement

`bind()` ব্যবহার করতে হবে।

### Bonus

একই function ব্যবহার করে দুইজনের profile print করো।

```js
const user1 = {
  name: "Rahim",
  role: "Backend Developer"
};

const user2 = {
  name: "Karim",
  role: "Frontend Developer"
};
```

---

# 🟠 Task 7 — Product Cart

একটি simple Product Cart তৈরি করো।

### Product Data

```js
const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 1200
  },
  {
    id: 2,
    name: "Mouse",
    price: 800
  },
  {
    id: 3,
    name: "Monitor",
    price: 15000
  }
];
```

### UI

```text
Products

Keyboard     ৳1200     [Add]
Mouse         ৳800     [Add]
Monitor     ৳15000     [Add]


Cart

Keyboard       ৳1200
Mouse            ৳800

Total: ৳2000
```

### Requirements

* Product dynamically render করতে হবে।
* Add button click করলে cart-এ product যোগ হবে।
* Total automatically update হবে।

### Must Use

* Array
* Object
* `forEach()`
* DOM
* Click Event
* Event Object
* Functions

### Bonus

একই product একাধিকবার add করলে নতুন item তৈরি না করে quantity increase করো।

---

# 🔴 Task 8 — Private Shopping Cart with Closure

Task 7-এর Cart system-কে Closure ব্যবহার করে আরও advanced করো।

```js
function createCart() {
  let cart = [];

  return {
    addProduct(product) {
      // code
    },

    removeProduct(id) {
      // code
    },

    getCart() {
      // code
    },

    getTotal() {
      // code
    }
  };
}
```

তারপর:

```js
const cart = createCart();
```

### Methods

```js
cart.addProduct(product);

cart.removeProduct(2);

cart.getCart();

cart.getTotal();
```

### Important

নিচের code:

```js
cart.cart
```

এর result হতে হবে:

```text
undefined
```

কারণ `cart` হবে private variable।

### Must Use

* Closure
* Private Data
* Object Methods
* Array
* DOM
* Events

---

# 🔴 Task 9 — Todo App

একটি complete Todo Application তৈরি করো।

### UI

```text
Todo App

[ Learn JavaScript        ] [Add]

--------------------------------

☐ Learn JavaScript    [Delete]

☑ Practice DOM        [Delete]

☐ Learn React         [Delete]

--------------------------------

Total: 3
Completed: 1
```

### Features

#### 1. Add Todo

Input থেকে Todo add হবে।

#### 2. Delete Todo

Delete button click করলে Todo remove হবে।

#### 3. Complete Todo

Todo click করলে completed state পরিবর্তন হবে।

#### 4. Counter

Automatically update হবে:

```text
Total: 3
Completed: 1
```

### Must Use

* DOM
* `createElement()`
* `appendChild()`
* `remove()`
* Events
* `classList`
* `textContent`
* Array

---

# 🔴 Task 10 — Event Delegation

Task 9-এর Todo App-এ প্রতিটি button-এর জন্য আলাদা event listener ব্যবহার করা যাবে না।

Parent container-এ একটি মাত্র event listener ব্যবহার করতে হবে।

```html
<div id="todoList">
  <!-- todos -->
</div>
```

Example Todo:

```html
<div class="todo">
  <span>Learn JavaScript</span>

  <button class="complete">Complete</button>
  <button class="delete">Delete</button>
</div>
```

Parent event listener:

```js
todoList.addEventListener("click", (event) => {
  // code
});
```

### Requirements

একটি event listener ব্যবহার করে:

* Complete
* Delete

দুটো functionality implement করতে হবে।

### Must Understand

* Event Bubbling
* `event.target`
* Event Delegation

---

# 🔥 Final Project — Student Management System

এটি এই chapter-এর **Final Practice Project**।

একটি complete Student Management System তৈরি করতে হবে।

---

## 🎯 UI

```text
        Student Management System

Name:
[________________________]

Age:
[________________________]

Course:
[ JavaScript ▼ ]

[ Add Student ]


--------------------------------------------

Students

Name       Age       Course          Action

Rahim      22        JavaScript      Delete
Karim      24        React           Delete
Hasan      21        Node.js         Delete

--------------------------------------------

Total Students: 3
```

---

# Features

## 1. Add Student

Form submit করলে নতুন student add হবে।

---

## 2. Validation

নিচের validation থাকতে হবে:

* Name required
* Age required
* Age must be 18 or above
* Course required

---

## 3. Delete Student

Delete button click করলে student remove হবে।

---

## 4. Search Student

একটি search input তৈরি করো:

```text
Search Student: [________________]
```

Student-এর name দিয়ে search করতে হবে।

Example:

```text
Search: Rahim
```

তাহলে শুধু Rahim-এর information দেখাবে।

---

## 5. Total Students

Automatically update হবে:

```text
Total Students: 3
```

---

## 6. Empty State

কোনো student না থাকলে দেখাবে:

```text
No students found.
```

---

# ⭐ Final Project — Mandatory Concepts

Final project-এ নিচের concepts ব্যবহার করতে হবে:

| Concept            | Requirement        |
| ------------------ | ------------------ |
| Global Scope       | Main application   |
| Function Scope     | Functions          |
| Block Scope        | `let` / `const`    |
| Scope Chain        | Nested functions   |
| `this`             | Object Methods     |
| `bind()`           | Detached Function  |
| Closure            | Private Data       |
| DOM                | UI Manipulation    |
| `submit`           | Form               |
| `click`            | Buttons            |
| `input`            | Search             |
| Event Object       | Identify target    |
| Event Delegation   | Student actions    |
| `preventDefault()` | Form submission    |
| `classList`        | UI State           |
| `createElement()`  | Dynamic UI         |
| `appendChild()`    | Add elements       |
| `remove()`         | Delete elements    |
| Array Methods      | Student Management |

---

# ⭐ Advanced Challenge — Private Student Manager

Final project-এর data একটি Closure-এর মধ্যে রাখতে হবে।

```js
function createStudentManager() {
  let students = [];

  return {
    addStudent(student) {
      // code
    },

    deleteStudent(id) {
      // code
    },

    searchStudent(keyword) {
      // code
    },

    getStudents() {
      // code
    }
  };
}
```

তারপর:

```js
const manager = createStudentManager();
```

Student data সরাসরি access করা যাবে না।

```js
manager.students
```

Expected:

```text
undefined
```

---

# 🏆 Submission Requirements

প্রতিটি student-এর project-এ থাকতে হবে:

```text
project/
│
├── index.html
├── style.css
└── script.js
```

### Code Quality

* Meaningful variable names ব্যবহার করতে হবে।
* অপ্রয়োজনীয় repeated code লেখা যাবে না।
* Functions ব্যবহার করতে হবে।
* Console error থাকা যাবে না।
* Responsive UI করার চেষ্টা করতে হবে।
* Code properly format করতে হবে।
* প্রয়োজন অনুযায়ী comments ব্যবহার করতে হবে।

---

# 🚀 Challenge Level

| Task          | Level            |
| ------------- | ---------------- |
| Task 1        | 🟢 Beginner      |
| Task 2        | 🟢 Beginner+     |
| Task 3        | 🟡 Intermediate  |
| Task 4        | 🟡 Intermediate  |
| Task 5        | 🟡 Intermediate  |
| Task 6        | 🟡 Intermediate  |
| Task 7        | 🟠 Intermediate+ |
| Task 8        | 🔴 Advanced      |
| Task 9        | 🔴 Advanced      |
| Task 10       | 🔴 Advanced      |
| Final Project | 🔥 Advanced      |

---

# 🎯 Goal

এই practice শেষ করার পর একজন student যেন JavaScript-এর **Scope, `this`, Closure, DOM এবং Events** শুধু theory হিসেবে না জেনে একটি real-world application-এর মধ্যে ব্যবহার করতে পারে।
