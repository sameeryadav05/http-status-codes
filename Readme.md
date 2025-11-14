
# 🚀 http-status-codes

A lightweight and developer-friendly utility for working with **HTTP status codes** in Node.js and JavaScript.

---

## 📦 Installation
```bash
npm install http-status-codes
```

---

---
## 🧠 Usage

```js
import { HttpStatus, getStatusMessage, getStatusCode, getCategory } from 'http-status-codes';

console.log(HttpStatus.OK); // 200
console.log(getStatusMessage(404)); // "Not Found"
console.log(getStatusCode("Created")); // 201
console.log(getCategory(503)); // "Server Error"
```
---

---
🧩 Features

✅ All official IANA HTTP status codes
✅ Easy to use constants (HttpStatus.OK, etc.)
✅ Helper functions for lookup and categorization
✅ Lightweight, zero dependencies

---

---
📊 API Reference

| Function                 | Description                                             |
| ------------------------ | ------------------------------------------------------- |
| `HttpStatus`             | Object containing all HTTP status codes                 |
| `getStatusMessage(code)` | Returns message (e.g. 404 → "Not Found")                |
| `getStatusCode(message)` | Returns code (e.g. "Forbidden" → 403)                   |
| `getCategory(code)`      | Returns category ("Client Error", "Server Error", etc.) |


---
