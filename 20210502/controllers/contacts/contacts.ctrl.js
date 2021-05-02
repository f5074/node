const models = require("../../models");

exports.post_contacts_user = async (req, res) => {
  try {
    // 아래에 작성하세요.

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
    // 아래에 작성하세요.

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
