const { User, Event, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log(context.user)
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },

    events: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Event.find(params).sort({ createdAt: -1 }) // sort most recent first

    },

    // get ONE Event
    event: async (parent, { _id }) => {
      return Event.findOne({ _id })
    },

    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('myCurrentEvent')
        .populate('myJoinedEvent');
    },
    // get a user by username
    user: async (parent, { username }) => {
      console.log(username);
      return User.findOne({ username })
        .select('-__v -password')
        .populate('myCurrentEvent')
        .populate('myJoinedEvent');
    },
  },

  Mutation: {

    addUser: async (parent, args) => {
      console.log("Get Signup Info");
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {

      var newUser = args.input

      console.log(args)
      console.log(newUser)

      return await User.findOneAndUpdate(
        { _id: context.user._id },
        newUser,
        { new: true }

      );
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

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

      return event;
    },

    joinEvent: async (parent, args, context) => {
      console.log('line87' + args)  //eventId
      console.log('line88' + context)
      consolr.log(args)

      // const joinEvent = await Even.create({ ...args.input });
      // console.log(joinEvent)


      // add the user to the event
      await Event.findByIdAndUpdate(
        { _id: args.eventId },
        { $push: { guests: context.user.username } },
        { new: true }
      );

      // find user by id in context - add event to the user
      const updatedUser = await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { myJoinedEvent: args.eventId } },
        { new: true }
      );
      return updatedUser
    },


    updateEvent: async (parent, args, context) => {

      var newEvent = args.input
      // console.log('line 113' + sargs)
      console.log(args)
      console.log(newEvent)
      // console.log(args.eventId)
      // console.log(context.user)

      return await Event.findOneAndUpdate(
        { _id: args.eventId },
        newEvent,
        // { new: true, runValidators: true }
        { new: true }

      );
    },

    removeEvent: async (parent, args, context) => {

      return Event.findOneAndDelete(
        { _id: args.eventId }
      )
    },

    addComment: async (parent, {eventId, username, commentText}, context) => {

      console.log(eventId)
      console.log(context.user)
      const comment = await Event.findOneAndUpdate(
        { _id: eventId },
        { $push: { comment:  { commentText, username: username } }  },
        // { $push: { reactions: { reactionBody, username: context.user.username } } },
        { new: true, runValidators: true }
      );

      await User.findOneAndUpdate(
        {_id: context.user._id},
        { $push: { comment:  { commentText, username: username } }  },
        { new: true, runValidators: true }
      )

  
      return comment;

    }


  }
};

module.exports = resolvers;
