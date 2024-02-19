const model = require("../../schema/admin");
const adminschema = model.adminschema;

exports.addAdmin = async (request, response) => {
  try {
    console.log(request.body);
    const admin = new adminschema(request.body);
    const adminSaved = admin.save();
    response
      .json({
        status: "Success",
        message: "Record Successfully Created.",
      })
      .status(200);
  } catch (e) {
    response.status(e);
  }
};

exports.listAdmin = async (request, response) => {
  try {
    const list = await adminschema.find();
    response.json(list);
  } catch (error) {
    response.json(error);
  }
};

exports.loginAdmin = async (request, response) => {
  try {
    const { adminUsername, adminPassword } = request.body;
    const adminIndividual = await adminschema.findOne({
      adminUsername: adminUsername,
      adminPassword: adminPassword,
    });
    if (adminIndividual) {
      response.json({
        status: "success",
        message: "Login Succesfully done",
        user: adminIndividual,
      });
    }
    if (!adminIndividual) {
      response.json({
        status: "error",
        message: "credentials does not match",
      });
    }
  } catch (error) {
    response.json(error);
  }
};

exports.deleteAdmin = async (request, response) => {
  try {
    const { adminUsername } = request.params;
    console.log(adminUsername);
    if(!adminUsername){
    response.json({message:"string"})
    }
    
    const adminDelete = await adminschema.deleteOne({
      adminUsername,
    });
    if (adminDelete) {
      response.json({
        status: "success",
        message: "Deleted Succesfully",
        user: adminDelete
      });
    }
    if (!adminDelete) {
      response.json({
        status: "error",
        message: "sorry can't delete ",
      });
    }
  } catch (error) {
    response.json(error)
  }
};

exports.updateAdmin = async (request, response) => {
  const { id } = request.params;
  const { adminUsername, adminPassword } = request.body;
  const updateObject = {
    adminUsername: adminUsername,
    adminPassword: adminPassword,
  };
  const updateAdmin = await adminschema.updateOne({ _id: id }, updateObject);
  if (!updateAdmin) {
    response.json({
      status: "error",
      message: "can't update now, sorry",
    });
  }
  response.json({
    status: "success",
    message: "Updated Succesfully",
  });
};
