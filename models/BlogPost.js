const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        content:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_at:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated_at:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost'
    }
);

module.exports = BlogPost;