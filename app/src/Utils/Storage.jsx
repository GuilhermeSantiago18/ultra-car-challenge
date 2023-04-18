export const setStorage = (data) => {
    return localStorage.setItem('data', JSON.stringify(data))
}

export const getStorage = () => {
    return JSON.parse(localStorage.getItem('data'))
}