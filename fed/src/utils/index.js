import axios from 'axios'
const isDev = import.meta.env.MODE === 'development' ? true : false
const apiHOST = isDev ? 'http://localhost:9008' : ''

export async function request({ path, method = 'POST', data = {}, timeout = 15 * 1000 }) {
  const url = apiHOST + path
  try {
    const ret = await axios({
      url,
      method,
      data,
      timeout,
      withCredentials: isDev ? false : true,
    })
    return ret.data
  } catch (error) {
    // 处理超时错误
    if (error.code === 'ECONNABORTED') {
      return {
        err: 1,
        msg: 'Request timeout',
      }
    } else {
      return {
        err: 1,
        msg: error.message,
      }
    }
  }
}
export function setCookie(name, value, options = {}) {
  const {
    expires = 0, // 默认7天过期
    path = '/', // 默认根路径
    domain = '', // 默认当前域名
    secure = !isDev, // 开发环境不需要 secure
    sameSite = 'Lax', // 默认 Lax 策略
  } = options

  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  // 设置过期时间
  if (expires) {
    const date = new Date()
    date.setDate(date.getDate() + expires)
    cookie += `; expires=${date.toUTCString()}`
  }

  // 设置路径
  if (path) {
    cookie += `; path=${path}`
  }

  // 设置域名
  if (domain) {
    cookie += `; domain=${domain}`
  }

  // 设置安全标志
  if (secure) {
    cookie += '; secure'
  }

  // 设置 SameSite
  cookie += `; samesite=${sameSite}`

  document.cookie = cookie
}
export function deleteCookie(name) {
  setCookie(name, '', { expires: -1 })
}
export function getCookie(name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const arr = document.cookie.match(reg)
  if (arr && arr.length) {
    return unescape(arr[2])
  } else {
    return null
  }
}

export function hasLogin() {
  return (getCookie('panda_user_role') && getCookie('panda_user_uid')) ? true : false
}
export function getUser() {
  return {
    uid: Number(getCookie('panda_user_uid')),
    role: Number(getCookie('panda_user_role')),
    name: getCookie('panda_user_name'),
  }
}


export function formatNumber2US(num) {
  const internationalNumberFormat = new Intl.NumberFormat('en-US')
  return internationalNumberFormat.format(num)
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
