const model = require("../../schema/blog");
const blogschema = model.blogschema;

exports.getAll = async (req, res) => {
  try {
    const blogs = await blogschema.find();
    res.status(200).json(blogs);
  } catch (e) {
    res.status(e);
  }
}
exports.getUserAllblogs = async (req, res) => {
  try {
    const blogs = await blogschema.find({uid :req.params.id});
    res.status(200).json(blogs);
  } catch (e) {
    res.status(e);
  }
}
exports.getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await blogschema.findById(id);
    res.status(200).json(blog);
  } catch (e) {
    res.status(e);
  }
}


exports.create = async (req, res) => {
  console.log(req.body);
  try {
  const blog = new blogschema(req.body);
  await blog.save()
  res.status(200).json({
    status: "Success",
    message: "Record Successfully Created."
  })
} catch(e){
  res.json(e)
}
};

exports.updateItem = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await blogschema.findById(id);
    await blog.updateOne(req.body)
    res.json({
      status: "Success",
      message: "Record Successfully Updated."
    }).status(200)
  } catch (e) {
    res.json(e);
  }
};



exports.DeleteItem = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await blogschema.findById(id);
    await blog.deleteOne()
    res.status(200).json({
      status: "Success",
      message: "Record Successfully Deleted."
    });
  } catch (e) {
    res.status(e);
  }
};
