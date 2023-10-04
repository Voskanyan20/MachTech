import React, { useEffect, useState } from 'react'
import { folders } from './data/data'

export function GetData () {
  const [item, setItem] = useState(null)

  useEffect(() => {
    const itemId = 1
    const foundItem = folders.find(item => item.id === itemId)
    setItem(foundItem)
  }, [])
  console.log(22222 ,item)
  return <div>getData</div>
}
