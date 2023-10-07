import React from 'react'
import modalClose from '../../assets/modalClose.svg'
import plusIcon from '../../assets/plusIcon.svg'
import user1 from '../../assets/user1.svg'

import './index.css'
import { cancel, successCreate } from '../../utils/messages'

export default function CreateAccess ({ isOpen, setIsOpen }) {
  return (
    <>
      <div id='create_access'>
        <header className='access_create_header'>
          <h2 className='access_create_title'>
            Добавление новых пользователей
          </h2>
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(false)}
            src={modalClose}
            alt='X'
          />
        </header>
        <div className='access_create_body'>
          <div className='access_create_search_div'>
            <input
              className='access_create_input'
              type='text'
              placeholder={`Поиск`}
            />
          </div>
          <div className='access_create_content'>
            <div className='access_create_info'>
              <div className='create_info_first'>
                <img style={{ cursor: 'pointer' }} src={plusIcon} alt='' />
                <img src={user1} alt='' />
                <p className='create_info_name'>Name lastName</p>
              </div>
              <select className='access_create_select' name='' id=''>
                <option>Чтение</option>
                <option>Редактирование</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='access_create_buttons'>
        <button
          onClick={() => {
            setIsOpen(false)
            successCreate()
          }}
          className='access_create_save'
        >
          Сохранить
        </button>
        <button
          onClick={() => {
            setIsOpen(false)
            cancel()
          }}
          className='access_create_cancel'
        >
          Отменить
        </button>
      </div>
    </>
  )
}
