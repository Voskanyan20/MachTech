import * as yup from 'yup'

export const validationSchema = yup.object({
    name: yup
      .string('Напишите Название:')
      .required('Обязательное поле:')
      .min(3, 'Минимум 3 символов:'),
    login: yup
      .string('Напишите логин:')
      .required('Обязательное поле:')
      .min(3, 'Минимум 3 символов:'),
    password: yup
      .string('Напишите пароль:')
      .required('Обязательное поле:')
      .min(4, 'Слабый пароль:'),
    url: yup
      .string('Напишите url:')
      .required('Обязательное поле:')
      .min(8, 'Минимум 8 символов:'),
    comment: yup
      .string('Напишите Комментарий:')
      .max(1200, 'Максимум 1200 символов:')
  })