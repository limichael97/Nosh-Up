const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const Comment = require('./Comment')
const eventFormat = require('../utils/eventFormat');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema({
  title: {
    type: String,
  },
  host: {
    type: String,
  },
  cuisineType: {
    type: String,
  },
  city: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  eventDate: {
    type: String,
    max: '2400-01-01',
    get: date => eventFormat(date)
  },

  time: {
    type: String
  },

  adjEventDt: {
    type: String,
  },

  guests: [String],

  countNoshers: {
    type: Number,
    min: 1,
    max: 12
  },
  maxNoshers: {
    type: String,
  },
  comment: [commentSchema],
  // comment: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Comment'
  //   }
  // ],
  vacancy: {
    type: Boolean
  },
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    }
  }
);

eventSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});


eventSchema.virtual('daysUntil').get(function () {

  // ------------ EVENT Vars Start ---------
  var isEvent = event_date.value  // is a DOMString local time Zone
  console.log(`
122 isEvent: ${isEvent}
`)

  isEventObj = new Date(isEvent) //create a date OBJ
  console.log(`
127 isEventOBj: ${isEventObj}
`)

  isEventStr = new Date(isEvent).toLocaleString
  console.log(`
132 isEventStr: ${isEvent}
`)
  // ------------ EVENT Vars End ---------


  // ----------- TODAY Vars  Start ----------------
  isTodayObj = new Date  // is a date Obj
  console.log(`
140 isTodayObj: ${isTodayObj}
`)

  const isToday = new Date();
  isTodayStr = isToday.toLocaleString() //  String, local time zone
  console.log(`
146 isTodayStr: ${isTodayStr}
`)
  // -------------- TODAY Vars  End -----------------


  // ------- Date RELATIVE COMPARISON Starts -----------
  // console.log(isTodayObj < isEventObj)
  // console.log(isTodayObj >  isEventObj)
  // ------- Date RELATIVE COMPARISON Ends -----------


  // ------------- Calc  DAYS LEFT Starts ------------
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  // t and e are  js Date OBJ
  function dateDiffInDays(t, e) {
    // Discard the time and time-zone info
    const utc1 = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    const utc2 = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY); //Returns x rounded down to its nearest integer
  }
  //  ----------- calculate difference -----
  const t = isTodayObj,
    e = isEventObj,
    difference = dateDiffInDays(t, e);
  console.log(`
//187 difference: : ${difference}
// `)
})
// ------------- Calc  DAYS LEFT endss ------------





const Event = model('Event', eventSchema);

module.exports = Event;
