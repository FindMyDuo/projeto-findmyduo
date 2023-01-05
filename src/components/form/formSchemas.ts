import * as yup from "yup";

//regexp will validate the discord username#tag
const regexp = new RegExp("^.{3,32}#[0-9]{4}$");

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("O e-mail é obrigatório.")
    .email("O e-mail preenchido é inválido."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(6, "A senha deve conter 6 characteres."),
});

export const registerSchema = yup.object().shape(
  {
    name: yup
      .string()
      .required("O nome é obrigatório.")
      .min(5, "O nome deve conter ao menos 5 digitos"),
    email: yup
      .string()
      .required("O e-mail é obrigatório.")
      .email("O e-mail preenchido é inválido."),
    password: yup
      .string()
      .required("A senha é obrigatória.")
      .min(6, "A senha deve conter 6 characteres."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais.")
      .required("Confirme a senha.")
      .min(6, "A senha deve conter 6 characteres."),
    socialMedia: yup
      .string()
      .notRequired()
      .optional()
      .nullable(true)
      .when("socialMedia", {
        is: (value: string) => value?.length,
        then: (rule) =>
          rule
            .min(5, "O discord deve ter ao menos 5 digitos.")
            .matches(regexp, "Por favor insira a Tag."),
      }),
  },
  [["socialMedia", "socialMedia"]]
);
