const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)



const eventFormat = date => {
    // let eventDate = dayjs(date).format('MMM D, YYYY at h:mm A ')
    console.log(`
    eventFormat 11
    eventFormat eventDate: ${date}
    `)


    let eventDate = dayjs(date).format('LLLL')
    return eventDate;

}


module.exports = eventFormat









// ///////////////// MILLISECONDS  //////////////////


// //  ---------  format ms to LLLL  Starts --------

// // use on FE to convert GraphQL obj data???

// let string = new Date(1647826200000).toISOString()
// console.log(`
// 181 ${string}
// `)
// let testStr = dayjs(string).format('LLLL')
// console.log(`
// 183
// Final Event Date: ${testStr}
// `)
// //  ---------  format ms to LLLL  Ends --------





// //  -------------- Get MS --------------
// // let myDate = new Date(eventISO)
// // let ms = myDate.getTime()
// // console.log(`170 ${ms}`)

// //************** FORMAT EVENT DATE Ends ************