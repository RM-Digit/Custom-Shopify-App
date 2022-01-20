const Router = require("koa-router");
const trackModel = require("../../models/trackModel")

const router = new Router({
  prefix: "/pos",
});

function register(app) {
  router.post("/promotions", async (ctx) => {
    const body = ctx.request.body;
    const trackData = await trackModel.find({})
    var total = 0;
    trackData.forEach(d => {
      total += d.track;
    });

    console.log("track", total);

    ctx.status = 200;
    ctx.body = {
      type: "simple_action_list",
      points_label: " : Purchases",
      points_balance: total,
      actions: [
        {
          type: "flat_discount",
          title: "prepaid services",
          description: "-1000 points",
          action_id: "12qwwq3ABC",
          value: "0.01",
        },
      ],
    };
  });

  router.post("/perform_action", async (ctx) => { });

  router.post("/revert_action", async (ctx) => { });
  app.use(router.routes());
  app.use(router.allowedMethods());
}

module.exports = register;
