import { Sequelize,DataTypes } from "sequelize";
import db from "../config/index.js";

const sequelize = db.sequelize;
const User = sequelize.define(
    "User",{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        createdAt:{
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue:Sequelize.literal("CURRENT_TIMESTAMP")
        },
        updatedAt:{
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue:Sequelize.literal("CURRENT_TIMESTAMP")
        }
    },
    {
        tableName:"user"
    }
    
);
sequelize.sync({force:true});
export default User;
