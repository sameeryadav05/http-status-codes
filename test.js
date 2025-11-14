import { HttpStatus, getStatusMessage, getStatusCode, getCategory } from './index.js';

console.log(HttpStatus.CREATED); // 201
console.log(getStatusMessage(404)); // Not Found
console.log(getStatusCode("Forbidden")); // 403
console.log(getCategory(503)); // Server Error
