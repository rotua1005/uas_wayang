// index.js
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.tokohWayang = require('./tokohWayang.model')
db.jenisWayang = require('./jenisWayang.model')
db.artikel = require('./artikel.model')
db.beranda = require('./beranda.model')

module.exports = db;