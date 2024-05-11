"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const data_1 = require("../user_data/data");
function login(req, res) {
    const { username, password } = req.body;
    // Check if username or password is missing
    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }
    // Check if username exists in the database
    if (!data_1.users[username]) {
        return res.status(401).send('Invalid username');
    }
    // Check if the provided password matches the password in the database
    if (data_1.users[username] !== password) {
        return res.status(401).send('Invalid password');
    }
    // Successful login
    res.send('Login successful');
}
exports.login = login;
