const models = require("../../models");

exports.post_posts = async (req, res) => {

  try {

    const post = await models.Posts.create(req.body);

    res.json({
      message: 'success'
    })
  } catch (e) {
    console.log(e);
    res.json({
      message: 'fail'
    })
  }
};

exports.put_posts_update = async (req, res) => {
  try {
    await models.Posts.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({
      message: 'success'
    })
  } catch (e) {
    console.log(e);
    res.json({
      message: 'fail'
    })
  }
};


exports.delete_posts_delete = async (req, res) => {

  try {
    await models.Posts.destroy({
      where: {
        id: req.params.id
      }
    });

    res.json({
      message: 'success'
    })
  } catch (e) {
    console.log(e);
    res.json({
      message: 'fail'
    })
  }
};


exports.post_posts_tag = async (req, res) => {

  try {
    console.log(req.body.name)
    a = await models.Tag.findOne({ where: { name: req.body.name } });
    if (a == null) {
      const tag = await models.Tag.create(req.body);
      const post = await models.Posts.findByPk(req.body.post_id);
      console.log(req.body.post_id);
      resultValue = await tag.addPost(post);
      

      res.json({
        status: resultValue
      })
    }
    else {
      res.json({
        status: []
      })
    }
  } catch (e) {
    console.log(e);
    res.json({
      message: 'fail'
    })
  }
};

exports.delete_posts_tag = async (req, res) => {

  try {
    const post = await models.Posts.findByPk(req.params.post_id);

    const tag = await models.Tag.findByPk(req.params.tag_id);

    count = await post.removeTag(tag);


    res.json({
      result: count
    })
  } catch (e) {
    console.log(e);
    res.json({
      result: count
    })
  }
};


exports.get_posts_list = async (req, res) => {

  try {

    const posts = await models.Posts.findAll({
      limit : req.query.limit,
      offset : req.offset,
      order: [['createdAt', 'desc']]
    })

    res.json({
      posts
    })

  } catch (e) {
    console.log(e);
  }

}

exports.get_posts_search = async (req, res) => {

  try {

    const posts = await models.Posts.findAll({
      include: ['Tag'],
      where: {
        ...(
          // 검색어가 있는 경우
          ('name' in req.query && req.query.name) ?
            {
              // + 태그에서 가져옴 or
              [models.Sequelize.Op.or]: [
                models.Sequelize.where(

                  models.Sequelize.col('Tag.name'), {
                  [models.Sequelize.Op.like]: `%${req.query.name}%`
                }),
                {
                  'title': {
                    [models.Sequelize.Op.like]: `%${req.query.name}%`
                  }
                }
              ],
            } : '')
      }

    });
    res.json({
      posts
    })
  } catch (e) {
    console.log(e);
  }
}