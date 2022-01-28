import { createSubscription } from "../repositories/subscription.repository";
import { subscriptionSchema } from "../validations/subscription.validation";

export const create = async (req, res) => {
  try {
    await subscriptionSchema.validate(req.body);
    const response = await createSubscription(req.body);

    res.status(200).send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};
