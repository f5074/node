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

exports.get_contacts_list = async(req,res) => {

  try{

      const contacts = await models.Contacts.findAll({
        limit : req.query.limit,
        offset : req.offset,
        order : [ ['createdAt' , 'desc'] ]
      })

      res.json({
        contacts
      })

  }catch(e){

  }

}

exports.write_tag = async (req, res) => {
  try {
      const tag = await models.Tag.findOrCreate({
          where: {
              name : req.body.name
          }
      });
 
      const contact = await models.Contacts.findByPk(req.body.contact_id);
      const status = await contact.addTag(tag[0]);
 
      console.log(status);
 
      res.json({
          status : status
        })

      } catch (e) {
          res.json(e)
      }
     }
     
     exports.delete_tag = async (req, res) => {
      try {
          const contact = await models.Contacts.findByPk(req.params.contact_id);
          const tag = await models.Tag.findByPk(req.params.tag_id);
     
          const result = await contact.removeTag(tag);
        
          res.json({
              result : result
          });
      } catch (e) {
        console.log(e);
      }
     }
     
     exports.get_search = async (req, res) => {
      try {
     
        const contacts = await models.Contacts.findAll({
     
            include : [ 'Tag' ],
     
            where : {
              ...(
              // 검색어가 있는 경우
              ('name' in req.query && req.query.name) ?
              {
                  // + 태그에서 가져옴 or
                  [models.Sequelize.Op.or] : [
                      models.Sequelize.where( models.Sequelize.col('Tag.name') , {
                          [models.Sequelize.Op.like] : `%${req.query.name}%`
                      }),
                      {
                          'name' : {
                              [models.Sequelize.Op.like] : `%${req.query.name}%`
                          }
                      }
                  ],
              }
              :
              '' )
            }
           
     
          });
     
        res.json({
          contacts
        })
     
     
      } catch (e) {
        console.log(e);
      }
     }
      
