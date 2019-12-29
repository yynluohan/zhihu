export function getTime (text) {
  const time = new Date()
  const data = {
    year: time.getFullYear(),
    month: time.getMonth() + 1,
    date: time.getDate()
  }
  return text ? data[text] : data
}
