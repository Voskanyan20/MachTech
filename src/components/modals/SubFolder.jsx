import React, { useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import modalClose from '../../assets/modalClose.svg'
import searchLoup from '../../assets/поиск.svg'
import folderIcon from '../../assets/folderIconModal.svg'
import {
  IconButton,
  InputAdornment,
  ListItem,
  OutlinedInput
} from '@mui/material'

export default function SubFolder ({ isOpen, setIsOpen }) {
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader
          className='modal_header'
          component='div'
          id='nested-list-subheader'
        >
          <p className='modal_title'>Выбрать раздел</p>
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(false)}
            src={modalClose}
            alt='X'
          />
        </ListSubheader>
      }
    >
      <ListItem>
        <OutlinedInput
          defaultValue={'Поиск по названию'}
          className='modal_input'
          type={'text'}
          startAdornment={
            <InputAdornment position='start'>
              <IconButton edge='start'>{<img src={searchLoup} alt=''/>}</IconButton>
            </InputAdornment>
          }
        />
      </ListItem>
      <ListItemButton>
        <ListItemIcon>
          <img src={folderIcon} alt='' />
        </ListItemIcon>
        <ListItemText primary='Название папки' />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <img src={folderIcon} alt='#' />
        </ListItemIcon>
        <ListItemText primary='Название папки' />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <img src={folderIcon} alt='#' />
        </ListItemIcon>
        <ListItemText primary='Название папки' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <img src={folderIcon} alt='' />
            </ListItemIcon>
            <ListItemText primary='Второстепенная папка' />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}
