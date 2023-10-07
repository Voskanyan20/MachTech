import React from 'react'
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import activeStar from '../../assets/activeStar.svg'
import './index.css'

export default function MainTableHeader ({
  valueToDirection,
  orderDirection,
  handleSort
}) {
  const sortHandler = prop => e => {
    handleSort(e, prop)
  }
  return (
    <TableHead style={{ background: '#F2F2F2', height: '57px' }}>
      <TableRow>
        <TableCell style={{ width: '45%' }} key='name'>
          <TableSortLabel
            active={valueToDirection === 'name'}
            direction={valueToDirection === 'name' ? orderDirection : 'asc'}
            onClick={sortHandler('name')}
          >
            Название
          </TableSortLabel>
        </TableCell>
        <TableCell style={{ width: '45%' }}>URL</TableCell>
        <TableCell>
          <img className='activeStar' src={activeStar} alt='' />
        </TableCell>
      </TableRow>
    </TableHead>
  )
}
