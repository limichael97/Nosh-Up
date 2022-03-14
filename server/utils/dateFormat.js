const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const dateFormat = date => {
  // let createdDate = dayjs(date).format('MMM D, YYYY at h:mm A ')

  console.log('----CreatedAt date from -dateFormat 8 ------')
  console.log(date)

  let createdDate = dayjs(date).format('LLLL')
  return createdDate;

}


module.exports = dateFormat