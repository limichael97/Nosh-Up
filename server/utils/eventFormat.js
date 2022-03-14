const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)


const eventFormat = (event) => {
  let time = (event.time)
  console.log(time)

  let date = (event.eventDate)
  console.log('- eventFormat 11 -------date-------')
  console.log(date)

  let eventTime = time.slice(0, 2)
  console.log('- eventFormat 15 -------date-------')
  console.log(eventTime)


  console.log('- eventFormat 19 -------date-------')
  console.log(date)

  let createdDate = dayjs(date).format('LLLL')
  return createdDate;
}

module.exports = eventFormat

