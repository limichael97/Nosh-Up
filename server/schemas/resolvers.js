const { User, Event } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            console.log(context.user)
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id  })
                .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },

        events:  async (parent, { username }) => {
            const params = username ? { username } : {};
            return Event.find(params)

        },

        users: async () => {
            return User.find()
              .select('-__v -password')
              .populate('myCurrentEvent')
              .populate('myJoinedEvent');
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
              .populate('myCurrentEvent')
              .populate('myJoinedEvent');
        },
    },

    Mutation: {

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
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


            // For user
            //   const updatedUser = await User.findByIdAndUpdate(
            //     { _id: args.input._id },
            //     { $push: { myCurrentEvent: args.input } },
            //     { new: true }
            //   );
      
            //   return updatedUser;
          },


    }
};

module.exports = resolvers;
