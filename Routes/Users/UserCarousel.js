const express = require("express");
const router = express.Router();
const { UserCarouselGet } = require("../../Controllers/UserCarousel");
router.get("/carouselPic", UserCarouselGet);

module.exports = router;
