import { body } from 'express-validator';

export const loginValidations = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть больше 5 символов').isLength({ min: 5 }),
];

export const registerValidations = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть больше 5 символов').isLength({ min: 5 }),
  body('fullName', 'Укажите имя (минимум 3 символа)').isLength({ min: 3 }),
  body('avatarUrl', 'Неверная ссылка').optional().isURL(),
];

export const postCreateValidations = [
  body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст статьи').isLength({ min: 10 }).isString(),
  body('tags', 'Неверный формат тэгов').optional().isString(),
  body('imageUrl', 'Неверная ссылка').optional().isString(),
];
