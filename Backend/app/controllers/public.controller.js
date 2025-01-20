// public.controller.js
const db = require("../models");
const Artikel = require("../models/artikel.model");
const ProfileList = require("../models/profileList.model");
const TokohWayang = require("../models/tokohWayang.model");
const Beranda = require("../models/beranda.model");

// POST DATA KE DATABASE
exports.postArticle = async (req, res) => {
    const { artikel } = req.body; 
    
    if (!Array.isArray(artikel)) {
      return res.status(400).json({ message: "Data artikel harus berupa array." });
    }
  
    try {
      const savedArticles = await Artikel.insertMany(artikel);
      res.status(201).json(savedArticles); 
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  };

  exports.postTokohWayang = async (req, res) => {
    const { tokoh_wayang } = req.body; 
      
    if (!Array.isArray(tokoh_wayang)) {
      return res.status(400).json({ message: "Data tokoh wayang harus berupa array." });
    }
  
    try {
      const savedTokohWayang = await TokohWayang.insertMany(tokoh_wayang);
      res.status(201).json(savedTokohWayang); 
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  }

  exports.postProfileList = async (req, res) => {
    const { profile_list } = req.body;
    
    if (!Array.isArray(profile_list)) {
      return res.status(400).json({ message: "Data harus berupa array." });
    } 
    try {
      const savedProfileList = await ProfileList.insertMany(profile_list);
      res.status(201).json(savedProfileList); 
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  }

  // GET DATA DARI DATABASE
exports.getArticle = async (req, res) => {
  try {
    const articles = await Artikel.find();

    if (articles.length == 0) {
      return res.status(200).json({ message: "Artikel Kosong" })
    }
    res.status(200).json(articles); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
}

exports.getTokohWayang = async (req, res) => {
  try {
    const tokohWayang = await TokohWayang.find();

    if (tokohWayang.length == 0) {
      return res.status(200).json({ message: "Data Kosong" })
    }
    res.status(200).json(tokohWayang); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
}

exports.getProfileList = async (req, res) => {
  try {
    const profile_list = await ProfileList.find();

    if (profile_list.length == 0) {
      return res.status(200).json({ message: "Data Kosong" })
    }
    res.status(200).json(profile_list); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
}

// DELETE DATA ARTIKEL BERDASARKAN ID
exports.deleteArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedArticle = await Artikel.findByIdAndDelete(id);

    if (!deletedArticle) {
      return res.status(404).json({ message: "Artikel tidak ditemukan." });
    }
    res.status(200).json({ message: "Artikel berhasil dihapus." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE SEMUA ARTIKEL
exports.deleteAllArticles = async (req, res) => {
  try {
    const result = await Artikel.deleteMany(); // Menghapus semua artikel
    res.status(200).json({ message: `${result.deletedCount} artikel telah dihapus.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE SEMUA TOKOH WAYANG
exports.deleteAllTokohWayang = async (req, res) => {
  try {
    const result = await TokohWayang.deleteMany(); // Menghapus semua tokoh wayang
    res.status(200).json({ message: `${result.deletedCount} tokoh wayang telah dihapus.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Beranda

exports.postBeranda = async (req, res) => {
  const { beranda } = req.body; 
  
  if (!Array.isArray(beranda)) {
    return res.status(400).json({ message: "Data artikel harus berupa array." });
  }

  try {
    const savedArticles = await Beranda.insertMany(beranda);
    res.status(201).json(savedArticles); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

exports.getBeranda = async (req, res) => {
  const { beranda } = req.body; 
  
  if (!Array.isArray(beranda)) {
    return res.status(400).json({ message: "Data beranda harus berupa array." });
  }

  try {
    const savedBeranda = await Beranda.insertMany(beranda); 
    res.status(201).json(savedBeranda); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
