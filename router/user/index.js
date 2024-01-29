const express = require("express");
const router = express.Router();
const user = require("../../controller/user");
router
  .post("/login", user.login)
  .get("/", user.getAllItems)
  .get("/:username", user.getOneItem)
  .post("/", user.createItem)
  .patch("/:username", user.updateItem)
  .delete("/:username", user.DeleteItem);

exports.router = router;
