const models = require("../../models");

exports.get_contacts = async (req, res) => {
  try {
    // 이아래 작성

    res.json({
      contacts
    });
  } catch (e) {
    console.log(e);
  }
};

exports.post_contacts_user = async (req, res) => {
  try {
    res.json({
      message: "success"
    });
  } catch (e) {
    console.log(e);
    res.json({
      message: "fail"
    });
  }
};

exports.delete_contacts_user = async (req, res) => {
  try {
    res.json({
      message: "success"
    });
  } catch (e) {
    console.log(e);
    res.json({
      message: "fail"
    });
  }
};
