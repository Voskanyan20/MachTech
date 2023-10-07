import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { folders } from '../../data/data'
import urlCopy from '../../assets/rightSideButtons/Link_Break.svg'
import './index.css'
import { History } from '../modals/History'
import { AccessModalRightSide } from '../modals/AccessModalRightSide'
import { EditFolder } from '../modals/EditFolder'
import FolderInfoInputs from './FolderInfoInputs'
import { Button } from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { errorCopy, successCopy } from '../../utils/messages'

export default function FolderInfo () {
  const folderId = useParams()
  const [folderDataById, setFolderDataById] = useState(null)
  const id = folderId.folderId
  const active = folderId.active

  useEffect(() => {
    const foundItem = folders.find(item => item.id == id)
    setFolderDataById(foundItem)
  }, [id])

  return (
    <div id='right_side_div'>
      {folderDataById && active === 'false' ? (
        <>
          <header className='right_side_header'>
            <h1 className='right_side_title'>{folderDataById.name}</h1>
          </header>
          <main className='right_side_main'>
            <FolderInfoInputs
              name={folderDataById.name}
              description={folderDataById.description}
            />
            <section className='right_side_tools'>
              <AccessModalRightSide />
              <History />
              <EditFolder data={folderDataById} />
              <CopyToClipboard text={folderDataById.url}>
                <Button
                  onClick={() =>
                    folderDataById.url ? successCopy() : errorCopy()
                  }
                  className='toolButtons'
                >
                  <img src={urlCopy} alt='' /> Ссылка
                </Button>
              </CopyToClipboard>
            </section>
          </main>
        </>
      ) : (
        <>
          <header className='right_side_header'></header>
          <section>
            <h1 className='right_side_default'>Тут пока ничего нет...</h1>
          </section>
        </>
      )}
    </div>
  )
}
