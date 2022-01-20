const mongoose = require("../services/mongoose").mongoose;

const Schema = mongoose.Schema;

const CustomerModel = new Schema(
  {
    order_id: {
      type: String,
      unique: true,
    },
    customer_id: {
      type: String,
    },
    customer_email: {
      type: String,
    },
    customer_name: {
      type: String,
    },
    item_title: {
      type: String,
      default: 0
    },
    track: {
      type: Number,
      default: 0
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