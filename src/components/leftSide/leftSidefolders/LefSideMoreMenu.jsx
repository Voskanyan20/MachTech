import React from 'react'
import { deleteItem } from '../../../utils/delete'

export default function LefSideMoreMenu ({ itemId, folderData, setfolderData }) {
  return (
    <div key={itemId} className='more_popup'>
      <button
        className='more_popup_button'
        onClick={() => deleteItem(folderData, setfolderData, itemId)}
      >
        Удалить папку
      </button>
      <button className='more_popup_button'>Добавить подраздел</button>
      <button className='more_popup_button'>Добавить пароль</button>
      <button className='more_popup_button'>Добавить в избранное</button>
    </div>
  )
}
