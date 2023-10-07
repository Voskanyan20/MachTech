import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { folders } from '../../data/data'
import './index.css'
import passiveStar from '../../assets/passiveStar.svg'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow
} from '@mui/material'
import MainTableHeader from './MainTableHeader'
import { CreatePassword } from '../modals/CreatePassword'

export default function MainComponent () {
  const folderId = useParams()
  const id = folderId.folderId
  const active = folderId.active
  const [folderDataById, setFolderDataById] = useState(null)
  const [page, setPage] = useState(0)
  const [rowperpage, setRowPerPage] = useState(5)
  const [orderDirection, setOrderDirection] = useState('asc')
  const [valueToDirection, setValueToDirection] = useState('name')
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const foundItem = folders.find(item => item.id == id)
    setFolderDataById(foundItem)
  }, [id])

  /// Pagination ///
  const handlechangepage = (event, newPage) => {
    setPage(newPage)
  }
  const handleRowsPerPage = event => {
    setRowPerPage(+event.target.value)
    setPage(0)
  }

  /// Sort label ///
  const handleSort = (e, prop) => {
    const isAscending = valueToDirection === prop && orderDirection === 'asc'
    setValueToDirection(prop)
    setOrderDirection(isAscending ? 'desc' : 'asc')
  }

  const descComperator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }

  const getCamparator = (order, orderBy) => {
    return order == 'desc'
      ? (a, b) => descComperator(a, b, orderBy)
      : (a, b) => -descComperator(a, b, orderBy)
  }
  const sortedFolderData = (row, comparator) => {
    const stabilisedRow = row.map((el, index) => [el, index])
    stabilisedRow.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) return order
      return a[1] - b[1]
    })
    return stabilisedRow.map(el => el[0])
  }

  return (
    <>
      <TableContainer height='auto'>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <MainTableHeader
            valueToDirection={valueToDirection}
            orderDirection={orderDirection}
            handleSort={handleSort}
          />
          <TableBody>
            {active === 'false' ? (
              <>
                {folderDataById && folderDataById.pass.length > 0 ? (
                  sortedFolderData(
                    folderDataById.pass,
                    getCamparator(orderDirection, valueToDirection)
                  )
                    .slice(page * rowperpage, page * rowperpage + rowperpage)
                    .map(row => (
                      <TableRow
                        className='table_body'
                        key={row.id}
                        pass={row.name}
                      >
                        <TableCell>
                          <Link
                            className='main_pass_name'
                            to={`/passwordInfo/${id}/${row.id}/${isActive}`}
                          >
                            {row.password}
                          </Link>
                        </TableCell>
                        <TableCell>{row.url}</TableCell>
                        <TableCell>
                          <img
                            className='passiveStar'
                            src={passiveStar}
                            alt=''
                          />
                        </TableCell>
                      </TableRow>
                    ))
                ) : (
                  <CreatePassword />
                )}
              </>
            ) : null}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        count={folderDataById ? folderDataById.pass.length : 0}
        rowsPerPageOptions={[5, 10]}
        rowsPerPage={rowperpage}
        page={page}
        onPageChange={handlechangepage}
        onRowsPerPageChange={handleRowsPerPage}
      ></TablePagination>
    </>
  )
}
