// const dayjs = require('dayjs');
// const localizedFormat = require('dayjs/plugin/localizedFormat')
// dayjs.extend(localizedFormat)



// const daysLeft = events => {

//   // ------------ EVENT Vars Start ---------
//   var isEvent = event_date.value  // is a DOMString local time Zone
//   console.log(`
//    isEvent: ${isEvent}
//   `)

//   isEventObj = new Date(isEvent) //create a date OBJ
//   console.log(`
//    isEventOBj: ${isEventObj}
//   `)

//   isEventStr = new Date(isEvent).toLocaleString
//   console.log(`
//    isEventStr: ${isEvent}
//   `)
//   // ------------ EVENT Vars End ---------


//   // ----------- TODAY Vars  Start ----------------
//   isTodayObj = new Date  // is a date Obj
//   console.log(`
//    isTodayObj: ${isTodayObj}
//   `)

//   const isToday = new Date();
//   isTodayStr = isToday.toLocaleString() //  String, local time zone
//   console.log(`
//    isTodayStr: ${isTodayStr}
//   `)
//   // -------------- TODAY Vars  End -----------------


//   // ------- Date RELATIVE COMPARISON Starts -----------
//   // console.log(isTodayObj < isEventObj)
//   // console.log(isTodayObj >  isEventObj)
//   // ------- Date RELATIVE COMPARISON Ends -----------


//   // ------------- Calc  DAYS LEFT Starts ------------
//   const _MS_PER_DAY = 1000 * 60 * 60 * 24;

//   // t and e are  js Date OBJ
//   function dateDiffInDays(t, e) {
//     // Discard the time and time-zone info
//     const utc1 = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
//     const utc2 = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());

//     return Math.floor((utc2 - utc1) / _MS_PER_DAY); //Returns x rounded down to its nearest integer
//   }
//   //  ----------- calculate difference -----
//   const t = isTodayObj,
//     e = isEventObj,
//     daysLeft = dateDiffInDays(t, e);
//   console.log(`
//   daysLeft: : ${daysLeft}
//    `)
//   console.log(doc.toObject({ virtuals: true }));
//   return this.difference
// }
// // ------------- Calc  DAYS LEFT endss ------------

// module.exports = daysLeft