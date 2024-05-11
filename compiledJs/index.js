"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_1 = require("./authN/login");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3000;
app.get('/', (req, res) => {
    res.send('Welcome!');
});
app.post('/login', login_1.login);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
