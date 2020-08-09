var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {


  app.get("/", async function (req, res) {
    try {
      await db.Burgers.findAll({}).then(function (data) {
        res.render("index", {
          burgers: data
        })
      });
    } catch (e) {
      console.log(e);
      res.end();
    }
    //res.end();
  });

  app.post("/api/burger", async function (req, res) {
    console.log("api pos");
    try {
      await db.Burgers.create({
        burger: req.body.burger,
      })
    } catch (e) {
      console.log(e);
      res.end();
    }
    res.end();
  });


  app.post("/api/devour", async function (req, res) {
    console.log("api put");
    try {
      await db.Burgers.update({ devoured: true },{
        where: {
          id: req.body.id
        }
      })
    } catch (e) {
      console.log(e);
      res.end();
    }
    res.end();
  });
};