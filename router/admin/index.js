const express = require("express");
const router = express.Router();
const admin = require("../../controller/admin");
router
  .post("/", admin.addAdmin)
  .get("/", admin.listAdmin)
  .post("/login-admin", admin.loginAdmin)
  .delete("/delete-admin/:adminUsername", admin.deleteAdmin)
  .patch("/update-admin/:id", admin.updateAdmin);

exports.router = router;
