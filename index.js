import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import mongoose from 'mongoose';

import { registerValidations, loginValidations, postCreateValidations } from './validations.js';

import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';

mongoose
  .connect(process.env.MONGO_DB_CONNECT)
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB crashed', err));

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidations, UserController.login);
app.post('/auth/register', registerValidations, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidations, PostController.create);
app.delete('/posts/:id',checkAuth, PostController.remove);
app.patch('/posts/:id', PostController.update);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server ok');
});
