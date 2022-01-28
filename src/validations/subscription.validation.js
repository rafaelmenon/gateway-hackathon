import * as yup from "yup";

export const subscriptionSchema = yup.object({
  name: yup
    .string("name deve ser do tipo string")
    .required("name é obrigatório"),
  email: yup
    .string("email é do tipo string")
    .required("email é obrigatório")
    .email("email inválido"),
  mobilePhone: yup
    .string("mobilePhone é do tipo string")
    .required("mobilePhone é obrigatório"),
  cpfCnpj: yup
    .string("cpfCnpj é do tipo string")
    .required("cpfCnpj é obrigatório"),
  postalCode: yup
    .string("postalCode é do tipo string")
    .required("postalCode é obrigatório"),
  address: yup
    .string("address é di tipo string")
    .required("address é obrigatório"),
  addressNumber: yup.string("addressNumber é do tipo string"),
  province: yup
    .string("province é do tipo string")
    .required("province é obrigatório"),
});
