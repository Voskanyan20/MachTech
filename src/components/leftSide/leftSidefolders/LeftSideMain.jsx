import React, { useEffect, useState } from 'react'
import moreIcon from '../../../assets/moreIcon.svg'
import { Button } from '@mui/material'
import { folders } from '../../../data/data'
import addFolderIcon from '../../../assets/addFolder.svg'
import keyIcon from '../../../assets/keyIcon.svg'
import loupIcon from '../../../assets/loup.svg'
import settingIcon from '../../../assets/settingIcon.svg'
import searchIcon from '../../../assets/search.svg'
import { Link } from 'react-router-dom'

// color: #000;
// font-family: Segoe UI;
// font-size: 14px;
// font-style: normal;
// font-weight: 400;
// line-height: normal;
export default function LeftSideMain () {
  const [loupClicked, setLoupClicked] = useState(false)
  const [moreClicked, setMoreClicked] = useState(false)
  const [folderData, setfolderData] = useState(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    setfolderData(folders)
  }, [])
  // folders.filter(folder => {folder.name.toLowerCase().includes(query)
  return (
    <>
    {/* Menu start */}
      <div className='menu'>
        {loupClicked ? (
          <>
            <input
              className='searchInput'
              placeholder='Поиск...'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <img
              className='search_icon'
              src={loupIcon}
              alt='Поиск'
              onClick={() => {
                setLoupClicked(!loupClicked)
              }}
            />
          </>
        ) : (
          <span>
            <img
              className='menu_icon'
              src={addFolderIcon}
              alt='Создать папку'
            />
            <img className='menu_icon' src={keyIcon} alt='Доступ' />
            <img className='menu_icon' src={settingIcon} alt='Изменить' />
            <img
              className='search_icon'
              src={loupIcon}
              alt='Поиск'
              onClick={() => setLoupClicked(!loupClicked)}
            />
          </span>
        )}
      </div>
      {/* Menu End */}
      <div id='left_side_main'>
        {folderData
          ? folderData
              .filter(folder => {
                return folder.name.toLowerCase().includes(query.toLocaleLowerCase())
              })
              .map(item => {
                return (
                  <Link key={item.id} to='folderInfo'>
                    <Button key={item.id} className='folder'>
                      <img
                        className='folder_icon'
                        src={item.folderIcon}
                        alt='Папка'
                      />
                      <p className='folder_name'>{item.name}</p>
                      <img
                        key={item.id}
                        src={moreIcon}
                        onClick={() => setMoreClicked(!moreClicked)}
                      />
                    </Button>
                    {moreClicked ? (
                      <div key={item.id} className='more_popup'>
                        <button className='more_popup_button'>
                          Удалить папку
                        </button>
                        <button className='more_popup_button'>
                          Добавить подраздел
                        </button>
                        <button className='more_popup_button'>
                          Добавить пароль
                        </button>
                        <button className='more_popup_button'>
                          Добавить в избранное
                        </button>
                      </div>
                    ) : null}
                  </Link>
                )
              })
          : null}
      </div>
    </>
  )
}

// {folderIcons.map(icon => {
//   return (
//     <>
//       <img key={icon.id} src={icon.url} alt={icon.alt} />
//     </>
//   )
// })}
