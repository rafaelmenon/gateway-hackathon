import { sendEmailSubscription } from "./send.subscription.repository";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import axios from "axios";

export const createSubscription = async (data) => {
  const timestamp = new Date().getTime();

  data.notificationDisabled = false;
  data.additionalEmails = null;
  data.municipalInscription = null;
  data.stateInscription = null;
  data.observations = null;
  data.externalReference = String(timestamp);

  const createClientAsaas = await axios.post(
    "https://www.asaas.com/api/v3/customers",
    data,
    {
      headers: {
        access_token:
          "eb90fc896572b0dc3177062751dc1bd1d95a7a5392145a49e76eb99558136c94",
      },
    }
  );

  createClientAsaas.data.id_asaas = createClientAsaas.data.id;

  delete createClientAsaas.data.id;
  delete createClientAsaas.data.object;

  const client = await prisma.subscription.create({
    data: createClientAsaas.data,
  });

  const object = {
    customer: client.id_asaas,
    billingType: "UNDEFINED",
    dueDate: "2022-03-03",
    value: 15,
    description: "Inscrição Hackathon 2022 - B9 Sistemas",
    externalReference: client.externalReference,
    discount: {
      value: 0,
      dueDateLimitDays: 0,
    },
    fine: {
      value: 0,
    },
    interest: {
      value: 0,
    },
    postalService: false,
  };

  const createPayment = await axios.post(
    "https://www.asaas.com/api/v3/payments",
    object,
    {
      headers: {
        access_token:
          "eb90fc896572b0dc3177062751dc1bd1d95a7a5392145a49e76eb99558136c94",
      },
    }
  );

  const paymentLink = createPayment.data.invoiceUrl;

  sendEmailSubscription(data.email, data.name);

  return { paymentLink };
};
