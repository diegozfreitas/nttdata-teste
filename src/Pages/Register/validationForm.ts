import * as yup from "yup";
import { validateCNPJ, validateCPF } from "validations-br";

export const ValidationsSchema = yup.object().shape({
  document: yup
    .string()
    .required("Campo obrigatório!")
    .test("is-CnpjOrCpfValid", "Digite um documento válido", (document) => {
      const value = document!?.replace(/[^0-9]+/g, "");

      return value.length! <= 11 ? validateCPF(value) : validateCNPJ(value);
    }),
  producerName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Preencha o nome corretamente")
    .min(3, "Preencha o nome corretamente")
    .required("Campo obrigatório!"),
  farmName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Preencha o nome corretamente")
    .min(3, "Preencha o nome corretamente")
    .required("Campo obrigatório!"),
  city: yup.string().required("Campo obrigatório!"),
  arableArea: yup.number().required("Campo obrigatório!"),
  vegetationArea: yup.number().required("Campo obrigatório!"),
  totalArea: yup
    .number()
    .required("Campo obrigatório!")
    .test(
      "vai",
      "O valor não pode ser maior que a soma de áreas",
      (value, document) => {
        return !(
          document.parent.vegetationArea + document.parent.arableArea >
          value!
        );
      }
    ),
  state: yup.string().required("Campo Obrigatorio"),
  cultures: yup.mixed().test({
    test: (value) => {
      return (
        typeof value === "string" || (Array.isArray(value) && value.length > 0)
      );
    },
    message: "Selecione pelo menos uma opção",
  }),
});
