import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { folders } from '../../data/data'
import copyIcon from '../../assets/copyIcon.svg'
import accessIcon from '../../assets/rightSideButtons/access.svg'
import historyIcon from '../../assets/rightSideButtons/history.svg'
import editIcon from '../../assets/rightSideButtons/edit.svg'
import urlCopy from '../../assets/rightSideButtons/Link_Break.svg'
import passview from '../../assets/passwordView.svg'
import './index.css'

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

  console.log('DATA', passwordDataById)

  return (
    <div id='right_side_div'>
      {passwordDataById && active === 'false' ? (
        <>
          <header className='right_side_header'>
            <h1 className='right_side_title'>{passwordDataById.name}</h1>
          </header>
          <main className='right_side_main'>
            <div className='right_side_info'>
              <p className='info_label'>Логин:</p>
              <span className='info_content'>
                {passwordDataById.login}
                <img className='info_copy' src={copyIcon} />
              </span>
            </div>
            <div className='right_side_info'>
              <p className='info_label'>Пароль:</p>
              <span className='info_content'>
                {passwordDataById.password}
                <span>
                  <img className='info_view' src={passview} />
                  <img className='info_copy' src={copyIcon} />
                </span>
              </span>
            </div>
            <div className='right_side_info'>
              <p className='info_label'>URL:</p>
              <span className='info_content'>
                {passwordDataById.url}
                <img className='info_copy' src={copyIcon} />
              </span>
            </div>
            <section className='description_div'>
              <p className='info_label'>Комментарий:</p>
              <div className='desc_content'>
                <p className='desc_text'>{passwordDataById.description}</p>
              </div>
            </section>
            <section className='right_side_tools'>
              <button className='toolButtons'>
                <img src={accessIcon} alt='' /> Доступ
              </button>
              <button className='toolButtons'>
                <img src={historyIcon} alt='' /> История
              </button>
              <button className='toolButtons'>
                <img src={editIcon} alt='' /> Изменить
              </button>
              <button className='toolButtons'>
                <img src={urlCopy} alt='' /> Ссылка
              </button>
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
