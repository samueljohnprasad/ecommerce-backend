const express = require("express");
const router = express.Router();

//route -> request response handler
router.get("/create-or-update", (req, res) => {
    res.json({
      name: "create-or-update",
    });
  });

module.exports=router
