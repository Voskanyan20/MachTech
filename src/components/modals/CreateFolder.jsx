import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import '../leftSide/index.css'
import modalClose from '../../assets/modalClose.svg'
import deleteIcon from '../../assets/deleteIcon.svg'
import addFolderIcon from '../../assets/addFolder.svg'
import folderIcon from '../../assets/folderIconModal.svg'
import './index.css'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import { colors } from '../../data/data'
import { folderIcons } from '../../data/data'
import SubFolder from './SubFolder'
import { cancel, successCreate } from '../../utils/messages'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'white'
}

export const CreateFolder = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ display: 'inline', border: 'none', borderRadius: '10px' }}>
      <img
        className='menu_icon'
        src={addFolderIcon}
        alt='Создать папку'
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <header className='modal_header'>
            <p className='modal_title'>Изменить папку</p>
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
          <div className='modal_content'>
            <div className='modal_items'>
              <p className='info_label'>Название:</p>
              <OutlinedInput
                // defaultValue={data.name}
                className='modal_input'
                type={'text'}
              />
            </div>
            <div className='modal_items'>
              <p className='info_label'>Раздел:</p>
              <OutlinedInput
                // defaultValue={data.category}
                className='modal_input'
                type={'text'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton edge='end'>
                      {
                        <img
                          src={folderIcon}
                          onClick={() => setIsOpen(!isOpen)}
                          alt=''
                        />
                      }
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>

            {isOpen ? (
              <div className='sub_folder'>
                <div className='sub_folder_div'>
                  <SubFolder isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
              </div>
            ) : null}

            <div className='modal_items_big'>
              <p className='info_label'>Описание:</p>
              <OutlinedInput
                // defaultValue={data.description}
                className='modal_input_big'
                type={'text'}
              />
            </div>
            <div className='modal_items'>
              <p className='info_label'>Цвет папки:</p>
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
            <div className='modal_items'>
              <p className='info_label'>Иконка папки:</p>
              <div className='color_icons_div'>
                {folderIcons &&
                  folderIcons.map(item => {
                    return (
                      <img
                        className='folder_icon_select'
                        key={item.id}
                        src={item.url}
                        alt={item.alt}
                      />
                    )
                  })}
              </div>
            </div>
          </div>
          <div className='access_create_buttons'>
            <button
              onClick={() => {
                setOpen(false)
                successCreate()
              }}
              className='access_create_save'
            >
              Сохранить
            </button>
            <button
              onClick={() => {
                setOpen(false)
                cancel()
              }}
              className='access_create_cancel'
            >
              Отменить
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
