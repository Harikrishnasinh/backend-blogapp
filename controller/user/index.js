const model = require("../../schema/user");
const userschema = model.Users;

exports.login = async (req, res) => {
  try {
    const user = await userschema.findOne(req.body);
    if(user) res.json(user.username)
    else res.json(0)
  } catch (e){
    res.status(e);
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const users = await userschema.find();
    res.json(users).status(200);
  } catch (e) {
    res.status(e);
  }
};

exports.getOneItem = async (req, res) => {
  const username = req.params.username;
  try {
    const user = await userschema.findOne({username: username});
    res.json(user).status(200);
  } catch (e) {
    res.status(e);
  }
};

exports.createItem = async (req, res) => {
  try {
    const user = new userschema(req.body);
    user.save();
    res.json({
      status: "Success",
      message: "Record Successfully Created."
    }).status(200)
  } catch (e) {
    res.json(e);
  }
};

exports.updateItem = async (req, res) => {
  const username = req.params.username;
  try {
    let user = await userschema.findOne({username: username});
    await user.updateOne(req.body);
    res.json({
      status: "Success",
      message: "Record Successfully Updated."
    }).status(200)
  } catch (e) {
    res.json(e);
  }
};

exports.DeleteItem = async (req, res) => {
  const username = req.params.username;
  try {
    const user = await userschema.findOne({username: username});
    await user.deleteOne();
    res.status(200).json({
      status: "Success",
      message: "Record Successfully Deleted."
    });
  } catch (e) {
    res.status(e);
  }
};
