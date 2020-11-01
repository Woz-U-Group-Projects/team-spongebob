import cookie from 'js-cookie'

// SET COOKIE
export const setCookie = (key, value) => {
  if(window === 'undefined') {
    cookie.set(key, value, {
      expires: 1
    })
  }
}

// REMOVE FROM COOKIE
export const removeCookie = (key) => {
  if(window === 'undefined') {
    cookie.set(key, {
      expires: 1
    })
  }
}

// GET COOKIE
export const getCookie = (key) => {
  if(window === 'undefined') {
    return cookie.get(key)
  }
}

// SET IN LOCAL STORAGE
export const setLocalStorage = (key, value) => {
  if(window === 'undefined') {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

// REMOVE FROM LOCAL STORAGE
export const removeLocalStorage = (key) => {
  if(window === 'undefined') {
    localStorage.removeItem(key)
  } 
}

// AUTHENTICATE USER
export const authentcate = (response, next) => {
  console.log('AUTHENTICATE ON SIGNIN', response)
  setCookie('token', response.data.token)
  setLocalStorage('user', response.data.user)
  next()
}

// ACCESS USER FROM LOCALSTORAGE
export const isAuth = () => {
  if(window === 'undefined') {
    const cookieChecked = getCookie('token')
    if(cookieChecked) {
      if(localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
      } else {
        return false
      }
    }
  }
}