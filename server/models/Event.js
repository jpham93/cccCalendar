const mongoose = require('mongoose')
// const moment = require('moment')

const { Schema } = mongoose

const EventSchema = new Schema({
  created: {
    type: 'Moment',
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  start: {
    type: 'Moment',
    required: true,
  },
  end: {
    type: 'Moment',
    required: true,
  },
  details: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  }
});

const Event = mongoose.model('events', EventSchema);

module.exports = Event;