import React, { useEffect, useState } from 'react'
import moreIcon from '../../../assets/moreIcon.svg'
import { folders } from '../../../data/data'
import addFolderIcon from '../../../assets/addFolder.svg'
import loupIcon from '../../../assets/loup.svg'
import settingIcon from '../../../assets/settingIcon.svg'
import { Link } from 'react-router-dom'
import { deleteItem } from '../../../utils/delete'
import { AccessModal } from '../../modals/AccessModal'

export default function LeftSideMain () {
  const [loupClicked, setLoupClicked] = useState(false)
  const [moreClicked, setMoreClicked] = useState(false)
  const [folderData, setfolderData] = useState(null)
  const [query, setQuery] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [activeId, setActiveId] = useState(0)

  useEffect(() => {
    setfolderData(folders)
  }, [])

  const sendId = (folderId, active) => {
    // console.log(folderId, active)
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
            <img
              className='menu_icon'
              src={addFolderIcon}
              alt='Создать папку'
            />
            <AccessModal />
            {/* <img className='menu_icon' src={keyIcon} alt='Доступ' /> */}
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
                      onClick={(e) => {
                        sendIdToMain(item.id, isActive)
                        setIsActive(!isActive)
                        setActiveId(item.id)
                        e.stopPropagation()
                      }}
                    >
                      <div className='folder_infos_div'>
                        <img
                          className='folder_icon'
                          src={item.folderIcon}
                          alt='Папка'
                        />
                        <p>{item.name}</p>
                      </div>
                      <button
                        onClick={e => {
                          setMoreClicked(item.id)
                          setIsActive(!isActive)
                        }}
                        style={{
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer'
                        }}
                      >
                        <img key={item.id} src={moreIcon} />
                      </button>
                    </Link>
                    {moreClicked === item.id && isActive ? (
                      <div key={item.id} className='more_popup'>
                        <button
                          className='more_popup_button'
                          onClick={() =>
                            deleteItem(folderData, setfolderData, item.id)
                          }
                        >
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
                  </>
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

// import React, { useEffect, useState } from 'react'
// import moreIcon from '../../../assets/moreIcon.svg'
// import { Button } from '@mui/material'
// import { folders } from '../../../data/data'
// import addFolderIcon from '../../../assets/addFolder.svg'
// // import keyIcon from '../../../assets/keyIcon.svg'
// import loupIcon from '../../../assets/loup.svg'
// import settingIcon from '../../../assets/settingIcon.svg'
// // import searchIcon from '../../../assets/search.svg'
// import { Link } from 'react-router-dom'
// import { deleteItem } from '../../../utils/delete'
// import { AccessModal } from '../../modals/AccessModal'

// export default function LeftSideMain () {
//   const [loupClicked, setLoupClicked] = useState(false)
//   const [moreClicked, setMoreClicked] = useState(false)
//   const [folderData, setfolderData] = useState(null)
//   const [query, setQuery] = useState('')
//   const [active, setActive] = useState(false)

//   useEffect(() => {
//     setfolderData(folders)
//   }, [])

//   const sendId = (folderId, active) => {
//     return `rightSide/${folderId}/${active}`
//   }

//   const sendIdToMain = async (folderId, active) => {
//     return `main/${folderId}/${active}`
//   }

//   console.log('====================================');
//   console.log(moreClicked);
//   console.log('====================================');

//   return (
//     <>
//       {/* Menu start */}
//       <div className='menu'>
//         {loupClicked ? (
//           <>
//             <input
//               className='searchInput'
//               placeholder='Поиск...'
//               value={query}
//               onChange={e => setQuery(e.target.value)}
//             />
//             <img
//               className='search_icon'
//               src={loupIcon}
//               alt='Поиск'
//               onClick={() => {
//                 setLoupClicked(!loupClicked)
//               }}
//             />
//           </>
//         ) : (
//           <span>
//             <img
//               className='menu_icon'
//               src={addFolderIcon}
//               alt='Создать папку'
//             />
//             <AccessModal />
//             {/* <img className='menu_icon' src={keyIcon} alt='Доступ' /> */}
//             <img className='menu_icon' src={settingIcon} alt='Изменить' />
//             <img
//               className='search_icon'
//               src={loupIcon}
//               alt='Поиск'
//               onClick={() => setLoupClicked(!loupClicked)}
//             />
//           </span>
//         )}
//       </div>
//       {/* Menu End */}
//       <div id='left_side_main'>
//         {folderData
//           ? folderData
//               .filter(folder => {
//                 return folder.name
//                   .toLowerCase()
//                   .includes(query.toLocaleLowerCase())
//               })
//               .map((item , index) => {
//                 return (
// <Link
//   key={item.id}
//   // onClick={() => {

//   // }}
//   to={sendId(item.id, active)}
//   onClick={() => {
//     sendIdToMain(item.id, active)
//     setActive(!active)
//   }}
// >
//   <button
//     key={item.id}
//     className='folder'
//     style={active ? { background: '#e8f0ff' } : null}
//   >
//     <img
//       className='folder_icon'
//       src={item.folderIcon}
//       alt='Папка'
//     />
//     <p className='folder_name'>{item.name}</p>
//   </button>
//     <img
//       key={item.id}
//       src={moreIcon}
//       onClick={() => setMoreClicked(!moreClicked)}
//     />
//   {moreClicked ? (
//     <div key={item.id} className='more_popup'>
//       <button
//         className='more_popup_button'
//         onClick={() =>
//           deleteItem(folderData, setfolderData, item.id)
//         }
//       >
//         Удалить папку
//       </button>
//       <button className='more_popup_button'>
//         Добавить подраздел
//       </button>
//       <button className='more_popup_button'>
//         Добавить пароль
//       </button>
//       <button className='more_popup_button'>
//         Добавить в избранное
//       </button>
//     </div>
//   ) : null}
// </Link>
//                 )
//               })
//           : null}
//       </div>
//     </>
//   )
// }

// // {folderIcons.map(icon => {
// //   return (
// //     <>
// //       <img key={icon.id} src={icon.url} alt={icon.alt} />
// //     </>
// //   )
// // })}

/////////////////////////////
