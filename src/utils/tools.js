import qs from 'qs'

export function getTime (text) {
  const time = new Date()
  const data = {
    year: time.getFullYear(),
    month: time.getMonth() + 1,
    date: time.getDate()
  }
  return text ? data[text] : data
}

export function getLoSearch () {
  let queryData = {}
  if (window.location.hash) {
    queryData = qs.parse(window.location.hash.lastIndexOf('?') > -1 ? window.location.hash.split('?')[1] : '')
  }
  return queryData
}
