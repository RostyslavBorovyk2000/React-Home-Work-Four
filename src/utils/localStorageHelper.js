export const saveItemsToLocalStorage = (key, state) => {
    localStorage.setItem(key, JSON.stringify(state))
}


export const getItemsFromLocalStorage = (key) => {
    const localStorageValue = localStorage.getItem(key)
    if (localStorageValue) {
        return JSON.parse(localStorageValue)
    }
    return null
}

export const getItemFromLocalStorage = (key, id) => {
    const localStorageValue = JSON.parse(localStorage.getItem(key))
    if (localStorageValue) {
        const localStorageItem = localStorageValue.find(item => item.id === id)
        return localStorageItem
    }
    return null
}

export const changeIsFavouriteFromLocalStorage = (key, id) => {
    const localStorageValue = JSON.parse(localStorage.getItem(key))
    if (localStorageValue) {
        const localStorageItem = localStorageValue.find(item => item.id === id)
        localStorageItem.isFavourite = !localStorageItem.isFavourite
        saveItemsToLocalStorage(key, localStorageValue)
    }
    return null
}

export const changeCountItemFromLocalStorageItems = (key, id, modalMark) => {
    const localStorageValue = JSON.parse(localStorage.getItem(key))
    if (localStorageValue) {
        const localStorageItem = localStorageValue.find(item => item.id === id)
        if (modalMark === 'addedModal') {
            localStorageItem.count++
        } else if (modalMark === 'deleteModal') {
            localStorageItem.count = localStorageItem.count === 0 ? 0 : localStorageItem.count - 1;
        }
        saveItemsToLocalStorage(key, localStorageValue)
    }
    return null
}





