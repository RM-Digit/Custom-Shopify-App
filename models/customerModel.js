const mongoose = require("../services/mongoose").mongoose;

const Schema = mongoose.Schema;

const CustomerModel = new Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    track: {
      type: Number,
      default:0
    },
  },
  { strict: true },
  {
    collection: "customers",
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("CustomerModel", CustomerModel);