"use strict";

module.exports = (app, libs) => {
    app.get("/listSellers", async (req, res) => {
        try {
            const seller = await libs.auth.listSeller();
            res.json({ data : seller.abc });
        } catch (err) {
            res.status(400).json({ err: err.message });
        }
      });

      app.post("/addSellers", async (req, res) => {
        try {
            const seller = await libs.auth.createNewSeller(req.body);
            res.json({ data : seller.abc });
        } catch (err) {
            res.status(400).json({ err: err.message });
        }
      });
}