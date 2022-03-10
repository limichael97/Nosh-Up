const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment')

const eventSchema = new Schema({
  title: {
    type: String,
  },
  username: {
    type: String,
  },
  cuisineType: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  eventDate: {
    type: Date,
    min: Date.now,
    max: '2400-01-01'
  },
  time: {
    type: Date,
    default: Date.now
  },
  countNoshers: {
    type: Number,
    min:1,
    max:12
  },
  maxNoshers: {
    type: Number,
    min: 2,
    max:12,
  },
  comments: [ commentSchema ],
  vacancy: {
    type: Boolean
  },
});

const Event = model('Event', eventSchema);

module.exports = Event;
