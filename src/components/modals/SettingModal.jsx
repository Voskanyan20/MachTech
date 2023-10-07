import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import '../leftSide/index.css'
import modalClose from '../../assets/modalClose.svg'
import settingIcon from '../../assets/settingIcon.svg'
import './index.css'
import CreateAccess from './CreateAccess'
import ExportCsv from './ExportCsv'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'white'
}

export const SettingModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [openOne, setOpenOne] = useState(false)
  const [openSecond, setOpenSecond] = useState(false)
  const [openThird, setOpenThird] = useState(false)

  return (
    <div style={{ display: 'inline', border: 'none', borderRadius: '10px' }}>
      <img
        onClick={handleOpen}
        className='menu_icon'
        src={settingIcon}
        alt='Изменить'
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <header className='modal_header'>
            <p className='modal_title'>Настройки</p>
            <img
              style={{ cursor: 'pointer' }}
              onClick={() => setOpen(false)}
              src={modalClose}
              alt='X'
            />
          </header>
          <div className='setting_buttons'>
            <button
              // onClick={() => ''}
              className='setting_button'
            >
              Импорт паролей
            </button>
            <button
              onClick={() => {
                setOpenOne(!openOne)
                setOpenSecond(false)
                setOpenThird(false)
              }}
              className='setting_button'
            >
              Экспорт данных в .CSV
            </button>

            <button
              // onClick={() => ''}
              className='setting_button'
            >
              Получить отчет действий пользователей
            </button>
            <button
              onClick={() => {
                setOpenSecond(!openSecond)
                setOpenThird(false)
                setOpenOne(false)
              }}
              className='setting_button'
            >
              Отредактировать права на корневую папку
            </button>
            {openSecond ? (
              <CreateAccess isOpen={openSecond} setIsOpen={setOpenSecond} />
            ) : null}
            <button
              onClick={() => {
                setOpenThird(!openThird)
                setOpenSecond(false)
                setOpenOne(false)
              }}
              className='setting_button'
            >
              Забрать права
            </button>
            {openThird ? (
              <CreateAccess isOpen={openThird} setIsOpen={setOpenThird} />
            ) : null}
          </div>
          {openOne ? (
            <ExportCsv isOpen={openOne} setIsOpen={setOpenOne} />
          ) : null}
        </Box>
      </Modal>
    </div>
  )
}
