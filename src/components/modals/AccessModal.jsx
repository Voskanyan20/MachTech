import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import '../leftSide/index.css'
import keyIcon from '../../assets/keyIcon.svg'
import modalClose from '../../assets/modalClose.svg'
import modalLine from '../../assets/modalLine.svg'
import deleteIcon from '../../assets/deleteIcon.svg'
import user1 from '../../assets/userLogo/user1.svg'
import './index.css'
import CreateAccess from './CreateAccess'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'white'
}

export const AccessModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ display: 'inline', border: 'none', borderRadius: '10px' }}>
      <img
        onClick={handleOpen}
        className='menu_icon'
        src={keyIcon}
        alt='Доступ'
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <header className='modal_header'>
            <p className='modal_title'>Доступ</p>
            <img
              style={{ cursor: 'pointer' }}
              onClick={() => setOpen(false)}
              src={modalClose}
              alt='X'
            />
          </header>
          <div style={{ textAlign: 'center' }} className='access_modal_main'>
            <div className='access_modal_content'>
              <img src={user1} alt='' />
              <p className='access_fullname'>Фамилия Имя Отчество</p>
              <select className='access_select' name='' id=''>
                <option>Чтение</option>
                <option>Редактирование</option>
              </select>
              <img
                style={{ cursor: 'pointer' }}
                src={deleteIcon}
                alt='Delete'
              />
            </div>
            <img style={{ width: '80%' }} src={modalLine} alt='' />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='access_add_button'
          >
            Добавить пользователя
          </button>
          {isOpen ? (
            <CreateAccess isOpen={isOpen} setIsOpen={setIsOpen} />
          ) : null}
        </Box>
      </Modal>
    </div>
  )
}
