const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const moment = require('moment');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },

    username: {
      type: String,
      required: true
    },

    createdAt: {
      type: String,
      default: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

module.exports = reactionSchema;