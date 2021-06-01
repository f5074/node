const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const Posts = sequelize.define('Posts',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING },
      content: { type: DataTypes.TEXT }
    }
  );

  Posts.associate = (models) => {
    Posts.belongsToMany(models.Tag, {
      through: {
        model: 'TagPosts',
        unique: false
      },
      as: 'Tag',
      foreignKey: 'post_id',
      sourceKey: 'id',
      constraints: false
    });
  }

  //   Posts.associate = (models) => {

  //     Posts.hasMany(models.PostsMemo,
  //       { as: 'Memo', foreignKey: 'posts_id', sourceKey: 'id', onDelete: 'CASCADE' }
  //     );

  //     Posts.belongsToMany(models.User, {
  //       through: {
  //         model: 'PostsUser',
  //         unique: false
  //       },
  //       as: 'User',
  //       foreignKey: 'posts_id',
  //       sourceKey: 'id',
  //       constraints: false
  //     });


  //   }
  Posts.prototype.dateFormat = (date) => (
    moment(date).format('YYYY-MM-DD')
  );

  return Posts;
}
