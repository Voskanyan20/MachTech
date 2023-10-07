import React, { useEffect, useState } from 'react'
import moreIcon from '../../../assets/moreIcon.svg'
import { folders } from '../../../data/data'
import loupIcon from '../../../assets/loup.svg'
import { Link } from 'react-router-dom'
import LeftSideMoreMenu from './LefSideMoreMenu.jsx'
import { AccessModal } from '../../modals/AccessModal'
import { SettingModal } from '../../modals/SettingModal'
import { CreateFolder } from '../../modals/CreateFolder'

export default function LeftSideMain () {
  const [loupClicked, setLoupClicked] = useState(false)
  const [moreClicked, setMoreClicked] = useState(false)
  const [isActiveMore, setIsActiveMore] = useState(false)
  const [folderData, setfolderData] = useState(null)
  const [query, setQuery] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [activeId, setActiveId] = useState(0)

  useEffect(() => {
    setfolderData(folders)
  }, [])

  const sendId = (folderId, active) => {
    return `rightSide/${folderId}/${active}`
  }

  const sendIdToMain = async (folderId, active) => `main/${folderId}/${active}`

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
            <CreateFolder />
            <AccessModal />
            <SettingModal />
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
                return folder.name
                  .toLowerCase()
                  .includes(query.toLocaleLowerCase())
              })
              .map((item, index) => {
                return (
                  <>
                    <Link
                      key={item.id}
                      style={
                        item.id === activeId && isActive
                          ? { background: '#e8f0ff' }
                          : null
                      }
                      className='folder'
                      to={sendId(item.id, isActive)}
                      onClick={e => {
                        sendIdToMain(item.id, isActive)
                        setIsActive(!isActive)
                        setActiveId(item.id)
                      }}
                    >
                      <div className='folder_infos_div'>
                        <img
                          className='folder_icon'
                          src={item.folderIcon}
                          alt='Папка'
                        />
                        <p className='folder_name'>{item.name}</p>
                      </div>
                      <button
                        onClick={e => {
                          setMoreClicked(item.id)
                          setIsActiveMore(!isActiveMore)
                          e.preventDefault()
                        }}
                        className='more_button'
                      >
                        <img key={item.id} src={moreIcon} alt='More' />
                      </button>
                    </Link>
                    {moreClicked === item.id && isActiveMore ? (
                      <LeftSideMoreMenu
                        itemId={item.id}
                        folderData={folderData}
                        setfolderData={setfolderData}
                      />
                    ) : null}
                  </>
                )
              })
          : null}
      </div>
    </>
  )
}