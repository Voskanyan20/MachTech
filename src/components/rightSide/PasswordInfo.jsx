import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { folders } from '../../data/data'
import urlCopy from '../../assets/rightSideButtons/Link_Break.svg'
import './index.css'
import PasswordInfoInputs from './PasswordInfoInputs'
import { AccessModalRightSide } from '../modals/AccessModalRightSide'
import { History } from '../modals/History'
import { Button } from '@mui/material'
import { EditPassword } from '../modals/EditPassword'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { errorCopy, successCopy } from '../../utils/messages'

export default function PasswordInfo () {
  const passwordId = useParams()
  const [passwordDataById, setPasswordDataById] = useState(null)
  const [folderDataById, setFolderDataById] = useState(null)
  const folderId = passwordId.folderId
  const id = passwordId.passwordId
  const active = passwordId.active

  useEffect(() => {
    const foundFolder = folders.find(item => item.id == folderId)
    setFolderDataById(foundFolder)

    const foundPassword = foundFolder.pass?.find(item => item.id == id)
    setPasswordDataById(foundPassword)
  }, [id])

  return (
    <div id='right_side_div'>
      {passwordDataById && active === 'false' ? (
        <>
          <header className='right_side_header'>
            <h1 className='right_side_title'>{passwordDataById.name}</h1>
          </header>
          <main className='right_side_main'>
            <PasswordInfoInputs
              login={passwordDataById.login}
              password={passwordDataById.password}
              url={passwordDataById.url}
              comment={passwordDataById.comment}
            />
            <section className='right_side_tools'>
              <AccessModalRightSide />
              <History />
              <EditPassword data={passwordDataById} />
              <CopyToClipboard text={passwordDataById.url}>
                <Button
                  onClick={() =>
                    passwordDataById.url ? successCopy() : errorCopy()
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
