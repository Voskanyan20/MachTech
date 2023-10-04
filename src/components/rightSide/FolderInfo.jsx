import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { folders } from '../../data/data'
import copyIcon from '../../assets/copyIcon.svg'
import accessIcon from '../../assets/rightSideButtons/access.svg'
import historyIcon from '../../assets/rightSideButtons/history.svg'
import editIcon from '../../assets/rightSideButtons/edit.svg'
import urlCopy from '../../assets/rightSideButtons/Link_Break.svg'
import './index.css'

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
            <div className='right_side_info'>
              <p className='info_label'>{folderDataById.name}</p>
              <span className='info_content'>
                {folderDataById.name}
                <img className='info_copy' src={copyIcon} />
              </span>
            </div>
            <section className='description_div'>
              <p className='info_label'>Описание:</p>
              <div className='desc_content'>
                <p className='desc_text'>{folderDataById.description}</p>
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
