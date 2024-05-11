import express, { Request, Response } from 'express';
import {users} from './user_data/data';
import { login } from './authN/login';

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome!');
});

app.post('/login', login);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});