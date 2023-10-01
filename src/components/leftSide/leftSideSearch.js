import { folders } from '../../data/data'

export const searching = (query) => {
    if (query) {
        const result = folders.filter(folder => {
          return folder.name.toLowerCase().includes(query)
        })
        console.log(result);
        return result 
    }else{
        return folders;
    }
}
