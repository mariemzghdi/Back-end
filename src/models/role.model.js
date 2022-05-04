const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
  name: {
    type: String,
    enum: ['admin', 'user'],
  },
});

module.exports = mongoose.model('Role', roleSchema);
