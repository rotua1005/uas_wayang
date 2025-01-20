const mongoose = require("mongoose");

const ArtikelSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: true,
  },
  gambar: {
    type: String,  // Path to image
    required: true,
  },
  paragraf: [
    {
      teks: {
        type: String,
        required: true,
      }
    }
  ],
  judul1: {
    type: String,
    required: true,
  },
  paragraf1: [
    {
      teks: {
        type: String,
        required: true,
      }
    }
  ],
  sejarah: {
    judul: {
      type: String,
      default: "Sejarah Wayang",
    },
    konten: {
      type: String,
      default: "Sejarah tentang wayang budaya Indonesia.",
    }
  },
  cards: [
    {
      gambar: {
        type: String,
        required: true,
      },
      judul: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      }
    }
  ],
  museum: {
    judul: {
      type: String,
      default: "Sejarah Museum Wayang",
    },
    konten: {
      type: String,
      required: true,
    }
  },
  alatMusik: {
    judul: {
      type: String,
      default: "Alat Musik Pada Wayang",
    },
    konten: {
      type: String,
      required: true,
    },
    gambar: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    }
  }
});

const Artikel = mongoose.model("Artikel", ArtikelSchema);

module.exports = Artikel;
