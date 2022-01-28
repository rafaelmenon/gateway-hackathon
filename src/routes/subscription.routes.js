import { create } from "../controllers/subscription.controller";

const subscriptionRoutes = (app) => {
  app.post("/v1/create/subscription", create);
};

export default subscriptionRoutes;
