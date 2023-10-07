import React, { useCallback, useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import '../leftSide/index.css'
import modalClose from '../../assets/modalClose.svg'
import deleteIcon from '../../assets/deleteIcon.svg'
import './index.css'
import plusIcon from '../../assets/plusIcon.svg'
import badPassword from '../../assets/badPassIcon.svg'
import {
  Button,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput
} from '@mui/material'
import { colors } from '../../data/data'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { cancel, successUpdate } from '../../utils/messages'
import { validationSchema } from '../../utils/validation'
import { generatePassword } from '../../utils/generatePassword'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'white'
}

export const CreatePassword = ({ data }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [render, setRender] = useState(false)
  const [initialValues, setInitialState] = useState({
    name: '',
    login: '',
    password: '',
    url: '',
    comment: ''
  })

  const onSubmit = (values, props) => {
    console.log(values)
  }

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handleGeneratePassword = () => {
    const newPassword = generatePassword()
    const updatedObject = { ...initialValues, password: newPassword }
    setInitialState(updatedObject)
    setRender(!render)
  }

  return (
    <div style={{ display: 'inline', border: 'none', borderRadius: '10px' }}>
      <Button onClick={handleOpen} className='table_create_pass'>
        <img src={plusIcon} alt='' /> Добавить пароль
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <header className='modal_header'>
            <p className='modal_title'>Создать пароль</p>
            <div className='modal_header_icons_div'>
              <img
                style={{ cursor: 'pointer' }}
                onClick={() => setOpen(false)}
                src={deleteIcon}
                alt='Delete'
              />
              <img
                style={{ cursor: 'pointer' }}
                onClick={() => setOpen(false)}
                src={modalClose}
                alt='X'
              />
            </div>
          </header>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {props => (
              <Form>
                <div className='modal_content'>
                  <div className='modal_items'>
                    <p className='info_label'>Название:</p>
                    <Field
                      as={OutlinedInput}
                      name='name'
                      className='modal_input'
                      type={'text'}
                    />
                  </div>
                  <FormHelperText error className='error_massage'>
                    <ErrorMessage name='name' />
                  </FormHelperText>
                  <div className='modal_items'>
                    <p className='info_label'>Логин:</p>
                    <Field
                      as={OutlinedInput}
                      name='login'
                      className='modal_input'
                      type={'text'}
                    />
                  </div>
                  <FormHelperText error className='error_massage'>
                    <ErrorMessage name='login' />
                  </FormHelperText>
                  <div className='modal_items'>
                    <p className='info_label'>Пароль:</p>
                    <Field
                      as={OutlinedInput}
                      value={
                        render ? initialValues.password : null
                      }
                      name='password'
                      className='modal_input'
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </div>

                  <div className='modal_items'>
                    <p className='info_label'>Повторите:</p>
                    <Field
                      as={OutlinedInput}
                      name='password'
                      value={
                        render ? initialValues.password : null
                      }
                      className='modal_input'
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </div>
                  <div className='modal_items'>
                    <p className='info_label'>Сложность:</p>
                    <div className='pass_infos'>
                      <Field as='span' className='error_massage_password'>
                        <img src={badPassword} alt='' />
                        <ErrorMessage name='password' />
                      </Field>
                      <Button onClick={() => handleGeneratePassword()}>
                        Придумать пароль
                      </Button>
                    </div>
                  </div>
                  <div className='modal_items'>
                    <p className='info_label'>URL:</p>
                    <Field
                      as={OutlinedInput}
                      name='url'
                      className='modal_input'
                      type={'text'}
                    />
                  </div>
                  <FormHelperText error className='error_massage'>
                    <ErrorMessage name='url' />
                  </FormHelperText>
                  <div className='modal_items_big'>
                    <p className='info_label'>Комментарий:</p>
                    <Field
                      as={OutlinedInput}
                      name='comment'
                      className='modal_input_big'
                      type={'text'}
                    />
                  </div>
                  <FormHelperText error className='error_massage'>
                    <ErrorMessage name='comment' />
                  </FormHelperText>
                  <div className='modal_items'>
                    <p className='info_label'>Цвет пароля:</p>
                    <div className='color_icons_div'>
                      {colors &&
                        colors.map(item => {
                          return (
                            <div
                              key={item.id}
                              style={{
                                background: item.title
                              }}
                              className='color_icon'
                            ></div>
                          )
                        })}
                    </div>
                  </div>
                </div>
                <div className='access_create_buttons'>
                  <Button
                    type='submit'
                    // onClick={() => {
                    //   setOpen(false)
                    //   successUpdate()
                    // }}
                    className='access_create_save'
                  >
                    Сохранить
                  </Button>
                  <Button
                    onClick={() => {
                      setOpen(false)
                      cancel()
                    }}
                    className='access_create_cancel'
                  >
                    Отменить
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  )
}
