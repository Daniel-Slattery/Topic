'use strict';

const mongoose = require('./');

const Schema = mongoose.Schema;

const topicSchema = new Schema({
  _id: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  published_at: {
    type: String,
    default: new Date()
  },
  score: {
    type: Number,
    default: 0
  }
});



const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;