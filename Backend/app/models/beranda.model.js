const mongoose = require("mongoose");

const BerandaSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: true
  },
  isi: {
    type: String,
    required: true
  },
});

const Beranda = mongoose.model("Beranda", BerandaSchema);

module.exports = Beranda;
