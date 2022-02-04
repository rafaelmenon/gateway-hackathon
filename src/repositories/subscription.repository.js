import url from "../url";
import { sendEmailSubscription } from "./send.subscription.repository";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createSubscription = async (data) => {
  const timestamp = new Date().getTime();

  data.notificationDisabled = false;
  data.additionalEmails = null;
  data.municipalInscription = null;
  data.stateInscription = null;
  data.observations = null;
  data.externalReference = String(timestamp);

  const createClientAsaas = await url.post("/customers", data);

  createClientAsaas.data.id_asaas = createClientAsaas.data.id;

  delete createClientAsaas.data.id;
  delete createClientAsaas.data.object;

  console.log(createClientAsaas);

  // const client = await prisma.subscription.create({
  //   data: createClientAsaas.data,
  // });

  // const object = {
  //   customer: client.id_asaas,
  //   billingType: "UNDEFINED",
  //   dueDate: "2022-03-03",
  //   value: 15,
  //   description: "Inscrição Hackathon 2022 - B9 Sistemas",
  //   externalReference: client.externalReference,
  //   discount: {
  //     value: 0,
  //     dueDateLimitDays: 0,
  //   },
  //   fine: {
  //     value: 0,
  //   },
  //   interest: {
  //     value: 0,
  //   },
  //   postalService: false,
  // };

  // const createPayment = await url.post("/payments", object);

  // const paymentLink = createPayment.data.invoiceUrl;

  // sendEmailSubscription(data.email, data.name);

  // return { paymentLink };
};
