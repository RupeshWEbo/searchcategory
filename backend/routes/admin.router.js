const express = require("express");
const adminRouter = express.Router();
const SentanceController = require("../controllers/admin/sentance.controller")

adminRouter.post("/search-sentance", SentanceController.fetchSentance);

module.exports = adminRouter;
