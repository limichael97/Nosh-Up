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

const Event = model('Event', eventSchema);

module.exports = Event;
