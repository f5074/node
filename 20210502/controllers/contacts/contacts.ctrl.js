const models = require('../../models');

exports.post_contacts_user = async (req, res) => {

  try {

    const contact = await models.Contacts.create(req.body);
    const user = await models.User.findByPk(req.body.user_id);

    await contact.addUser(user);

    res.json({
      message: 'success'
    })
  } catch (e) {
    console.log(e);
    res.json({
      message: 'fail'
    })
  }

}

exports.delete_contacts_user = async (req, res) => {

  try {
    const contact = await models.Contacts.findByPk(req.params.contact_id);
    const user = await models.User.findByPk(req.params.user_id);

    await contact.removeUser(user);

    res.json({
      message: 'success'
    })
  } catch (e) {
    console.log(e);
    res.json({
      message: 'fail'
    })
  }


}
