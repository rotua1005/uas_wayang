const mongoose = require("mongoose");

const JenisWayang = mongoose.model(
  "Jenis Wayang",
  new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    asal: {
        type: String,
        required: true
    },
  })
);

module.exports = JenisWayang;
