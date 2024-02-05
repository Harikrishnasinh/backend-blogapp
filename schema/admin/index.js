const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  adminUsername: {
    type: String,
    requiried: true,
    minLength: 1,
  },
  adminPassword: {
    type: String,
    requiried: true,
    minLength: 1,
  },
});
exports.adminschema = mongoose.model("Admin", AdminSchema);
