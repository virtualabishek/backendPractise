import { DataTypes } from "sequelize";
import connection from "./index.js";

const userModel = connection.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue("location", value + ", Nepal");
      },
      get() {
        this.getDataValue("location") + "OK";
      },
    },
    description: {
      type: DataTypes.STRING,
    },
  },

  {
    timestamps: false,
    // createdAt: false, if i need only updated at
    // yo rakhena vanechai automatically, created at and pdated at rakhdinxa...
  }
);

export default userModel;
