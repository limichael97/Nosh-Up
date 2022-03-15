const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)
// const eventFormat = require('../utils/eventFormat')




addEvent: async (parent, args, context) => {
  // console.log(context)
  console.log(args)

  const event = await Event.create({ ...args.input });
  console.log(event)

  await User.findByIdAndUpdate(
    { _id: context.user._id },
    { $push: { myCurrentEvent: event } },
    { new: true }
  );


  // ************ FORMAT EVENT DATE Starts **********
  console.log('------107------')
  let time = (event.time) // user input time recved as 00:00
  let eventDate = (event.eventDate) //user input date yyyy-mm-dd == JS Date
  //Sat Mar 19 2022 17:00:00 GMT-0700 (Pacific Daylight Time)

  //In Event OBJ: 2022-03-20T00:00:00.000Z  
  //in GraphQL data Obj:  ms 

  // -------- get yyyy-mm-dd -------
  let eventDateSlice = (JSON.stringify(eventDate)).slice(1, 11)
  console.log(`
      118
      Date Sliced ${eventDateSlice}
      `)

  // --------convert hour to Number ----------
  // (PST) is 8 hours behind (UTC) 7 PDT
  let hour = Number(JSON.stringify(parseInt(time.slice(0, 2))))
  let hourCalc = Number(JSON.stringify((parseInt(time.slice(0, 2)) + 7)))
  console.log(`
      127
      hour: ${hour}
      hour Calc: ${hourCalc}
      `)

  // --------getMinutes as String in order to concat back with UTC Hour
  let min2 = ((time.slice(3)))
  console.log(`
      133
      time min2: ${min2}
      `)

  let eventDtObj = new Date(eventDateSlice);
  eventDtObj.setHours(eventDtObj.getHours() + hourCalc);
  eventDtObj.setMinutes(eventDtObj.getMinutes() + min2)

  let eventISO = eventDtObj.toISOString()
  // let utc = dayjs.utc(eventISO)

  console.log(`
      145
      eventDtObj: ${eventDtObj}
      eventISO: ${eventISO}
      `)

  let finalEventDate = dayjs(eventISO).format('LLLL')
  console.log(`
      152
      Final Event Date: ${finalEventDate}
      `)

  event["adjEventDt"] = finalEventDate
  console.log('----157----')
  console.log(event)

  return event;
}













// const dayjs = require('dayjs');
// const localizedFormat = require('dayjs/plugin/localizedFormat')
// dayjs.extend(localizedFormat)

// var DateTime = luxon.DateTime

// const eventFormat = (args) => {
//   // ************ FORMAT EVENT DATE Starts **********

// //   let time = (event.time) // user input time recved as 00:00
// //   let eventDate = (event.eventDate) //user input date yyyy-mm-dd == JS Date
// //   //Sat Mar 19 2022 17:00:00 GMT-0700 (Pacific Daylight Time)

// //   //In Event OBJ: 2022-03-20T00:00:00.000Z  
// //   //in GraphQL data Obj:  ms 

// //   // -------- get yyyy-mm-dd -------
// //   let eventDateSlice = (JSON.stringify(eventDate)).slice(1, 11)
// //   console.log(`
// //       119
// //       Date Sliced ${eventDateSlice}
// //       `)

// //   // --------convert hour to Number ----------
// //   // (PST) is 8 hours behind (UTC) 7 PDT
// //   let hourCalc = JSON.stringify((parseInt(time.slice(0, 2)) + 7))
// //   console.log(`
// //       131
// //       hour Calc: ${hourCalc}
// //       `)

// //   // --------getMinutes as String in order to concat back with UTC Hour
// //   let min2 = ((time.slice(3)))
// //   console.log(`
// //       138
// //       time min2: ${min2}
// //       `)



// //   let eventDtObj = new Date(eventDateSlice);
// //   eventDtObj.setHours(eventDtObj.getHours() + 25);
// //   eventDtObj.setMinutes(eventDtObj.getMinutes() + 30)

// //   let eventISO = eventDtObj.toISOString()
// //   // let utc = dayjs.utc(eventISO)

// //   console.log(`
// //       164
// //       eventDtObj: ${eventDtObj}
// //       eventISO: ${eventISO}
// //       `)



// //   let finalEventDate = dayjs(eventISO).format('LLLL')
// //   console.log(`
// // 175
// // Final Event Date: ${finalEventDate}
// // `)
// //   return finalEventDate
// // }

// /////////////////////// DATE Comparisons  Start ///////////
// today = DateTime.now().toLocal();
// isEvent = (entered_date).toLocal();//not a function

// console.log(today < entered_date)
// console.log(today > entered_date)



// console.log('line  ' + today)
// console.log('line  ' + isEvent)

// var timeLeft = isEvent.diff(today, ['days', 'hours', 'minutes']).toObject()
// const daysLeft =

//   console.log(timeLeft)
// console.log(`${timeLeft.days} days until your event!`)


// /////////////////////// DATE Comparisons  End ///////////






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