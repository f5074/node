const models = require("../../models");

exports.get_contacts = async (req, res) => {

  try {
    const contacts = await models.Contacts.findAll({

      ...(req.query.lat && req.query.lng ?

        {
          attributes: {

            include: [
              [
                models.sequelize.literal(`
                ST_DISTANCE_SPHERE( POINT(
                    ${req.query.lng},
                    ${req.query.lat}
                  ), geo)`
                ),
                'distance'
              ]
            ]


          },

          order: [[models.sequelize.literal('distance'), 'asc']]

        }

        : '')
    });
    res.json({
      contacts
    })
  } catch (e) {
    console.log(e);
  }


}


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
