const models = require("../../models");

exports.get_contacts = ( _ , res) => {
  models.Contacts.findAll({

  }).then( (contacts) => {
      // DB에서 받은 contacts contacts 내보냄
      res.render( 'admin/contacts.html' ,{ contacts : contacts });
  });
};

exports.get_contacts_write = (_, res) => {
  res.render("admin/write.html");
};

exports.post_contacts_write = ( req , res ) => {
  models.Contacts.create({
      name : req.body.name,
      price : req.body.price ,
      description : req.body.description
  }).then( () => {
      res.redirect('/admin/contacts');
  });
}


exports.get_contacts_detail = ( req , res ) => {
  models.Contacts.findByPk(req.params.id).then( (contact) => {
      res.render('admin/detail.html', { contact: contact });  
  });
};


exports.get_contacts_edit = ( req , res ) => {
  models.Contacts.findByPk(req.params.id).then( (contact) => {
      res.render('admin/write.html', { contact : contact });
  });
};

exports.post_contacts_edit = ( req , res ) => {

  models.Contacts.update(
      {
          name : req.body.name,
          price : req.body.price ,
          description : req.body.description
      }, 
      { 
          where : { id: req.params.id } 
      }
  ).then( () => {
      res.redirect('/admin/contacts/detail/' + req.params.id );
  });

}

exports.get_contacts_delete = ( req , res ) => {
  models.Contacts.destroy({
      where: {
          id: req.params.id
      }
  }).then( () => {
      res.redirect('/admin/contacts');
  });
};
