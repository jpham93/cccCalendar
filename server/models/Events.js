const mongoose = require('mongoose')
// const moment = require('moment')

const { Schema } = mongoose 

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  details: {
    type: String,
    required: false,
  },
});

const Event = mongoose.model('events', EventSchema);

module.exports = Event;