const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/FootprintsFinder');

const Account = require('./schemas/accountSchema')(mongoose);
const Session = require('./schemas/sessionSchema')(mongoose);

module.exports = { Account, Session };