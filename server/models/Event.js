const { Schema, model } = require('mongoose');
const Comment = require('./Comment')

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

  guests: [String],

  countNoshers: {
    type: Number,
    min: 1,
    max: 12
  },
  maxNoshers: {
    type: Number,
    min: 2,
    max: 12,
  },
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  vacancy: {
    type: Boolean
  },
},
  {
    toJSON: {
      virtuals: true
    }
  }
);

eventSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const Event = model('Event', eventSchema);

module.exports = Event;
