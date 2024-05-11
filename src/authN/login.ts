import express, { Request, Response } from 'express';
import {users} from '../user_data/data';

export function login(req: Request, res: Response){
    const { username, password } = req.body;

    // Check if username or password is missing
    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    // Check if username exists in the database
    if (!users[username]) {
        return res.status(401).send('Invalid username');
    }

    // Check if the provided password matches the password in the database
    if (users[username] !== password) {
        return res.status(401).send('Invalid password');
    }

    // Successful login
    res.send('Login successful');
}