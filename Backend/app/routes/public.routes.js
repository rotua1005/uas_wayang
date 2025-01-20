// Import controller
const controller = require("../controllers/public.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Rute artikel
  app.post("/api/articles", controller.postArticle);
  app.post("/api/tokohwayang", controller.postTokohWayang);
  app.post("/api/profileList", controller.postProfileList);
  
  app.get("/api/articles", controller.getArticle);
  app.get("/api/tokohwayang", controller.getTokohWayang);
  app.get("/api/profileList", controller.getProfileList);
  
  app.delete("/api/articles/:id", controller.deleteArticle);
  app.delete("/api/articles", controller.deleteAllArticles);

  // Rute beranda
  app.post("/api/beranda", controller.postBeranda);
  app.get("/api/beranda", controller.getBeranda);
};
