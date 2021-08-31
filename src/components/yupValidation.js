import * as yup from 'yup';
import strings from '../global/strings.json';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(strings.emailValidation)
    .required(strings.emailRequired),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, strings.mustSmallLetter)
    .matches(/\w*[A-Z]\w*/, strings.mustCapitalLetter)
    .matches(/\d/, strings.mustNumber)
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      strings.mustSpecialChar,
    )
    .min(8, ({min}) => `${strings.mustBeAtLeast} ${min} characters`)
    .required(strings.passwordRequired),
});
