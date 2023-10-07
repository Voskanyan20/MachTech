import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import '../leftSide/index.css'
import user1 from '../../assets/userLogo/user1.svg'
import historyIcon from '../../assets/rightSideButtons/history.svg'
import user from '../../assets/historyModalIcons/User_01.svg'
import access from '../../assets/historyModalIcons/access.svg'
import history from '../../assets/historyModalIcons/history.svg'
import date from '../../assets/historyModalIcons/date.svg'
import './index.css'
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'white'
}

export const History = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div style={{ display: 'inline', border: 'none', borderRadius: '10px' }}>
      <Button onClick={handleOpen} className='toolButtons'>
        <img className='tool_icons' src={historyIcon} alt='Доступ' />
        История
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <TableContainer height='auto'>
            <Table sx={{ minWidth: 500 }} aria-label='customized table'>
              <TableHead style={{ background: '#F2F2F2', height: '57px' }}>
                <TableRow>
                  <TableCell style={{ width: '45%' }} key='name'>
                    <img className='history_head_img' src={user} alt='' />
                    Пользователь
                  </TableCell>
                  <TableCell style={{ width: '45%' }}>
                    <img className='history_head_img' src={access} alt='' />{' '}
                    Права доступа
                  </TableCell>
                  <TableCell>
                    <img className='history_head_img' src={history} alt='' />
                    История
                  </TableCell>
                  <TableCell>
                    <img className='history_head_img' src={date} alt='' />
                    Дата
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className='history_table_body'>
                    <img src={user1} alt='' />
                    Фамилия Имя Отчество
                  </TableCell>
                  <TableCell>Редактор</TableCell>
                  <TableCell>Изменение пароля</TableCell>
                  <TableCell>13.07.2023, в 14:03</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  )
}
