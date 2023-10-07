import { toast } from 'react-toastify'

const successCopy = () => {
  return toast.success('Успешно скопировано', {
    position: 'bottom-center',
    autoClose: 2000,
    closeOnClick: true,
    theme: 'light'
  })
}
const errorCopy = () => {
  return toast.error('Ошибка скопирования', {
    position: 'bottom-center',
    autoClose: 2000,
    closeOnClick: true,
    theme: 'light'
  })
}
const successCreate = () => {
  return toast.success('Успешно скопировано', {
    position: 'bottom-center',
    autoClose: 2000,
    closeOnClick: true,
    theme: 'light'
  })
}
const errorCreate = () => {
  return toast.error('Ошибка скопирования', {
    position: 'bottom-center',
    autoClose: 2000,
    closeOnClick: true,
    theme: 'light'
  })
}
const successUpdate = () => {
  return toast.success('Успешно скопировано', {
    position: 'bottom-center',
    autoClose: 2000,
    closeOnClick: true,
    theme: 'light'
  })
}
const errorUpdate = () => {
  return toast.error('Ошибка скопирования', {
    position: 'bottom-center',
    autoClose: 2000,
    closeOnClick: true,
    theme: 'light'
  })
}
const successDelete = () => {
  return toast.success('Успешно скопировано', {
    position: 'bottom-center',
    autoClose: 2000,
    closeOnClick: true,
    theme: 'light'
  })
}
const errorDelete = () => {
  return toast.error('Ошибка скопирования', {
    position: 'bottom-center',
    autoClose: 2000,
    closeOnClick: true,
    theme: 'light'
  })
}
const cancel = () => {
    return toast.warning('Отмена', {
      position: 'bottom-center',
      autoClose: 2000,
      closeOnClick: true,
      theme: 'light'
    })
  }
export { cancel , successCopy, errorCopy , successCreate , successDelete , successUpdate , errorCreate , errorDelete , errorUpdate ,  }
