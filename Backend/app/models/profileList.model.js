const mongoose = require("mongoose");

const ProfileList = mongoose.model(
  "Profile List",
  new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    photo_url: {
        type: String,
    },
    jurusan: {
        type: String,
    },
  })
);

module.exports = ProfileList;
