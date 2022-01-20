const Router = require("koa-router");
const shopify = require("../../services/shopify");
// const customerModel = require("../../models/customerModel");

const router = new Router({
  prefix: "/webhook",
});

function register(app) {
  router.post("/order-received", async (ctx) => {

  });

  app.use(router.routes());
  app.use(router.allowedMethods());
}

module.exports = register;
