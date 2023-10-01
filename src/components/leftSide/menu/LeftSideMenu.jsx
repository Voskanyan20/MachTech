import React, { useCallback } from 'react'
import addFolderIcon from '../../../assets/addFolder.svg'
import keyIcon from '../../../assets/keyIcon.svg'
import loupIcon from '../../../assets/loup.svg'
import settingIcon from '../../../assets/settingIcon.svg'
import { useState } from 'react'
import { folders } from '../../../data/data'
import { searching } from '../leftSideSearch'

export default function LeftSideMenu ({render , setRender}) {
  const [clicked, setClicked] = useState(false)
  const [query , setQuery] = useState('');

  // const searchFilter = useCallback(() => {
  //   searching(query);
  // }, [query]);
  const handleChange = (e) => {
    setQuery(e.target.value)
    searching(query)
    setRender(!render)
  }

  const handleSearch = () => {
    searching(query);
    setRender(!render)
  };

  return (
    <div className='menu'>
      {clicked ? (
        <>
          <input className='searchInput' placeholder='Поиск...' value={query} onChange={(e) => handleChange(e)} />
          <img
            className='search_icon'
            src={loupIcon}
            alt='Поиск'
            onClick={() => {
              setClicked(!clicked)
              handleSearch();
            }}
          />
        </>
      ) : (
        <span>
          <img className='menu_icon' src={addFolderIcon} alt='Создать папку' />
          <img className='menu_icon' src={keyIcon} alt='Доступ' />
          <img className='menu_icon' src={settingIcon} alt='Изменить' />
          <img
            className='search_icon'
            src={loupIcon}
            alt='Поиск'
            onClick={() => setClicked(!clicked)}
          />
        </span>
      )}
    </div>
  )
}
