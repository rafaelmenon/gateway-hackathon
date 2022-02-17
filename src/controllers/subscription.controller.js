import {
  createSubscription,
  deleteSubscription,
  listByIdSubscription,
  listSubscription,
  updateSubscription,
} from "../repositories/subscription.repository";
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

export const get = async (req, res) => {
  try {
    const response = await listSubscription();
    res.status(200).send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

export const getById = async (req, res) => {
  try {
    const response = await listByIdSubscription(req.params.id);
    res.status(200).send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

export const update = async (req, res) => {
  try {
    const response = await updateSubscription(req.params.id, req.body);
    res.status(200).send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

export const deleteSubscription = async (req, res) => {
  try {
    const response = await deleteSubscription(req.params.id);
    res.status(200).send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};
