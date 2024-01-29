const express = require("express");
const router = express.Router();
const blogs = require("../../controller/blog");
router
  .get("/", blogs.getAll)
  .get("/ub/:id", blogs.getUserAllblogs)
  .get("/:id", blogs.getOne)
  .post("/", blogs.create)
  .patch("/:id", blogs.updateItem)
  .delete("/:id", blogs.DeleteItem);

exports.router = router;
