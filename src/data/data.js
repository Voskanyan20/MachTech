import folder1 from '../assets/folderIcons/folder1.svg'
import folder2 from '../assets/folderIcons/folder2.svg'
import folder3 from '../assets/folderIcons/folder3.svg'
import folder4 from '../assets/folderIcons/folder4.svg'
import folder5 from '../assets/folderIcons/folder5.svg'
import folder6 from '../assets/folderIcons/folder6.svg'
import defaultFolder from '../assets/folder.svg'
// import { v4 as uuidv4 } from 'uuid'
// const uniqueId = uuidv4();

let idCounter = 0

function generateUniqueId () {
  idCounter += 1
  return idCounter
}

const uniqueId = generateUniqueId()

export const colors = [
  {
    id: 1,
    title: '#D30000'
  },
  {
    id: 2,
    title: '#FF7A00'
  },
  {
    id: 3,
    title: 'yellow'
  },
  {
    id: 4,
    title: 'green'
  },
  {
    id: 5,
    title: 'silver'
  },
  {
    id: 6,
    title: '#00F1F1'
  },
  {
    id: 7,
    title: '#4698F0'
  },
  {
    id: 8,
    title: '#3300FF'
  },
  {
    id: 9,
    title: 'grey'
  },
  {
    id: 10,
    title: 'gold'
  }
]

export const folderIcons = [
  {
    id: 1,
    url: folder1,
    alt: 'icon'
  },
  {
    id: 2,
    url: folder2,
    alt: 'icon'
  },
  {
    id: 3,
    url: folder3,
    alt: 'icon'
  },
  {
    id: 4,
    url: folder4,
    alt: 'icon'
  },
  {
    id: 5,
    url: folder5,
    alt: 'icon'
  },
  {
    id: 6,
    url: folder6,
    alt: 'icon'
  }
]
export const folders = [
  {
    id: uniqueId,
    name: "Одежда",
    category: 'Shoes',
    description: 'This is a folder1',
    folderColor: 'red',
    folderIcon: defaultFolder,
    key: [
      {
        id: uniqueId,
        name: 'Adidas',
        login: 'login',
        password: 'password',
        url: 'www.adidas.com',
        comment: 'sport Shoes'
      }
    ]
  },
]

// export const DATA = {
//   folders: [
//     {
//       id: uniqueId,
//       category: 'Shoes',
//       description: 'This is a folder1',
//       folderColor: 'red',
//       folderIcon: '1',
//       key: [
//         {
//           name: 'Adidas',
//           login: 'login',
//           password: 'password',
//           url: 'www.google.com',
//           comment: 'sport Shoes'
//         }
//       ]
//     }
//   ]
// }
