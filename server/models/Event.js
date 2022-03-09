const { Schema } = require('mongoose');
const commentSchema = require('./Comment')

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  cusineType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
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
    required: true
  },
  comments: [ commentSchema ],
  vacancy: {
    type: Boolean
  },
});

module.exports = eventSchema;
