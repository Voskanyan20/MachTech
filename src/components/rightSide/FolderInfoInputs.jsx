import React from 'react'
import copyIcon from '../../assets/copyIcon.svg'
import './index.css'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { successCopy } from '../../utils/messages'

export default function FolderInfoInputs ({ name, description }) {
  return (
    <div>
      <div className='right_side_info'>
        <p className='info_label'>Название:</p>
        <OutlinedInput
          readOnly
          defaultValue={name}
          className='info_content'
          type={'text'}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton edge='end'>
                <CopyToClipboard text={name}>
                  <img src={copyIcon} onClick={() => successCopy()} alt='' />
                </CopyToClipboard>
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <section className='description_div'>
        <p className='info_label'>Описание:</p>
        <OutlinedInput
          readOnly
          defaultValue={description}
          className='desc_content'
          type={'text'}
        />
      </section>
    </div>
  )
}
