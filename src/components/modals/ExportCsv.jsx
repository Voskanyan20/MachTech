import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

export default function ExportCsv ({ open }) {
  return (
    <>
      <List
        sx={{
          width: '100px',
          maxWidth: '100px',
          bgcolor: 'background.paper',
          borderRadius: '0px 0px 10px 10px',
          boxShadow: '0px 0px 10px 0px rgba(183, 183, 183, 0.25)'
        }}
        className='export_list'
        aria-label='contacts'
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText className='export_list_text' primary='Полный' />
          </ListItemButton>
        </ListItem>
        <ListItem className='export_list_text' disablePadding>
          <ListItemButton>
            <ListItemText className='export_list_text' primary='Чтение' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText className='export_list_text' primary='Пусто' />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  )
}
