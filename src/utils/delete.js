export const deleteItem = async (data ,setData, id) => {
    const result = data.filter(item => item.id !== id);
    return setData(result);;
}