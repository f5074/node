const models = require("../../models");

exports.get_join = (_, res) => {
  res.render("accounts/join.html");
};

exports.get_login = (_, res) => {
  res.render("accounts/login.html");
};

exports.post_join = async (req, res) => {
  try {
    // 아래 조건을 참조해서 이미 가입된 아이디면 되돌아갑니다.

    /*
    return res.send(
        '<script>window.history \
      .back(alert("존재하는 아이디 입니다."))</script>'
      );
    */

    const value = await models.User.findOne({where : {username : req.body.username}});
    console.log(value);
    if(!value){
      models.User.create(req.body);
      res.send(
        '<script>alert("회원가입 성공");\
      location.href="/accounts/login";</script>'
      );
    }else{
      res.send(
        '<script>window.history.back(alert("존재하는 아이디 입니다."))</script>'
      );
    }


  } catch (e) { }
};
