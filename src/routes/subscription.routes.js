import {
  create,
  deleteSubscription,
  get,
  getById,
  update,
} from "../controllers/subscription.controller";

const subscriptionRoutes = (app) => {
  app.post("/v1/create/subscription", create);
  app.get("/v1/subscription", get);
  app.get("/v1/subscription/:id", getById);
  app.put("/v1/subscription/:id", update);
  app.delete("/v1/subscription/:id", deleteSubscription);
};

export default subscriptionRoutes;
