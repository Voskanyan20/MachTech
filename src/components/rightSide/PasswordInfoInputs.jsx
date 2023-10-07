import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import copyIcon from '../../assets/copyIcon.svg'
import './index.css'
import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { errorCopy, successCopy } from '../../utils/messages'

export default function PasswordInfoInputs ({ login, password, url, comment }) {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  return (
    <div>
      <div className='right_side_info'>
        <p className='info_label'>Логин:</p>
        <OutlinedInput
          readOnly
          defaultValue={login}
          className='info_content'
          type={'text'}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton edge='end'>
                <CopyToClipboard text={login}>
                  <img
                    src={copyIcon}
                    onClick={() => (login ? successCopy() : errorCopy)}
                    alt=''
                  />
                </CopyToClipboard>
              </IconButton>
            </InputAdornment>
          }
        />
      </div>

      <div className='right_side_info'>
        <p className='info_label'>Пароль:</p>
        <OutlinedInput
          readOnly
          defaultValue={password}
          className='info_content'
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
              <IconButton edge='end'>
                <CopyToClipboard text={password}>
                  <img
                    src={copyIcon}
                    onClick={() => (password ? successCopy() : errorCopy)}
                    alt=''
                  />
                </CopyToClipboard>
              </IconButton>
            </InputAdornment>
          }
        />
      </div>

      <div className='right_side_info'>
        <p className='info_label'>URL:</p>
        <OutlinedInput
          readOnly
          defaultValue={url}
          className='info_content'
          type={'text'}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton edge='end'>
                <CopyToClipboard text={url}>
                  <img
                    src={copyIcon}
                    onClick={() => (url ? successCopy() : errorCopy)}
                    alt=''
                  />
                </CopyToClipboard>
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <section className='description_div'>
        <p className='info_label'>Комментарий:</p>
        <OutlinedInput
          readOnly
          defaultValue={comment}
          className='desc_content'
          type={'text'}
        />
      </section>
    </div>
  )
}
