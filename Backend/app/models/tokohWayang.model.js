const mongoose = require("mongoose");

const TokohWayang = mongoose.model(
  "Tokoh Wayang",
  new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
  })
);

module.exports = TokohWayang;
