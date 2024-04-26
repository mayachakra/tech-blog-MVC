const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text:{
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        created_at:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'user17',
                key: 'id'
            }
        },
        post_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'blogpost',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;