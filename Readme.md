
# 🚀 @sameeryadav/http-status-codes

A lightweight and developer-friendly utility for working with **HTTP status codes** in Node.js and JavaScript.

---

## 📦 Installation
```bash
npm install http-status-codes
```

---


## 🧠 Usage

```js
import { HttpStatus, getStatusMessage, getStatusCode, getCategory } from 'http-status-codes';

console.log(HttpStatus.OK); // 200
console.log(getStatusMessage(404)); // "Not Found"
console.log(getStatusCode("Created")); // 201
console.log(getCategory(503)); // "Server Error"

```
