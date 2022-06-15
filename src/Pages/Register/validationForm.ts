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
  producerName: yup.string().required("Campo obrigatório!"),
  farmName: yup.string().required("Campo obrigatório!"),
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
});


